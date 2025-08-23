from flask import Flask, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

products = []

class User(Resource):
    def get(self, user_id):
        return {"user_id": user_id, "name": "User" + str(user_id)}
    
    def post(self):
        data = request.get_json()
        products.append(data)
        return {"message": "Product added", "product": data}, 201
    
    def delete(self, user_id):
        global products
        products = [p for p in products if p.get("id") != user_id]
        return {"message": "Product deleted"}, 200
    
    def put(self, user_id):
        data = request.get_json()
        for p in products:
            if p.get("id") == user_id:
                p.update(data)
                return {"message": "Product updated", "product": p}, 200
        return {"message": "Product not found"}, 404

api.add_resource(User, '/user', '/user/<int:user_id>')

class Products(Resource):
    def get(self):
        return {"products": products}
    
api.add_resource(Products, '/products')

@app.route("/")
def home():
    return "Hello Flask with venv!"

if __name__ == "__main__":
    app.run(debug=True)
