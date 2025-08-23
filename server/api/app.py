from flask import Flask, request
from apiflask import APIFlask, Schema, abort
from apiflask.fields import Integer, String
from apiflask.validators import Length, OneOf
from flask.views import MethodView
from pymongo import MongoClient

app = APIFlask(__name__)
client = MongoClient("mongodb://localhost:27017")
db = client.ItaliaDB

users_collection = db.users
products_collection = db.products

class UserIn(Schema):
    id = String()
    username = String(required=True, validate=Length(1, 20))
    email = String(required=True, validate=Length(5, 50))

class UserOut(Schema):
    id = String()
    username = String()
    email = String()

class ProductIn(Schema):
    name = String(required=True, validate=Length(1, 50))
    price = Integer(required=True)

class ProductOut(Schema):
    id = Integer()
    name = String()
    price = Integer()

class UserAPI(MethodView):
    @app.route('/api/v1/users', methods=['POST'])
    def create_user():
        json_data = request.get_json()
        user = UserIn().load(json_data)
        result = users_collection.insert_one(user)
        inserted_user = users_collection.find_one({'_id': result.inserted_id})
        response_user = {
            'id': str(inserted_user['_id']),
            'username': inserted_user.get('username', ''),
            'email': inserted_user.get('email', '')
        }
        return UserOut().dump(response_user), 201

    @app.route('/api/v1/users/<user_id>', methods=['GET'])
    def get_user(user_id):
        from bson import ObjectId
        user = users_collection.find_one({'_id': ObjectId(user_id)})
        if not user:
            abort(404)
        user['id'] = str(user['_id'])
        return UserOut().dump(user)

class ProductAPI(MethodView):
    @app.route('/api/v1/products', methods=['POST'])
    def create_product():
        json_data = request.get_json()
        product = ProductIn().load(json_data)
        result = products_collection.insert_one(product)
        product['id'] = str(result.inserted_id)
        return ProductOut().dump(product), 201

    @app.route('/api/v1/products/<int:product_id>', methods=['GET'])
    def get_product(product_id):
            product = products_collection.find_one({'id': product_id})
            if not product:
                abort(404)
            return ProductOut().dump(product)
    
app.add_url_rule('/api/v1/users', view_func=UserAPI.as_view('users_api'))
app.add_url_rule('/api/v1/products', view_func=ProductAPI.as_view('products_api'))