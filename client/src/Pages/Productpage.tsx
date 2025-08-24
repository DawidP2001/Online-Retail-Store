//import React, { useEffect } from 'react';
import ProductCard from '../components/Cards/ProductCard';
import type { ColorOption } from '../components/Cards/ProductCard';

interface ProductpageProps {
  query: string;
};
const colorOption1: ColorOption = {
  color: "#000000",
  image: "/Products/Shoe/black1.png",
  transformImage: "/Products/Shoe/black2.png"
};

const colorOption2: ColorOption = {
  color: "#D2B48C",
  image: "/Products/Shoe/brown1.webp",
  transformImage: "/Products/Shoe/brown2.webp"
};
const colorOption3 = {
    color: "#a736a1ff",
    image: "/Products/Shoe/pink1.webp",
    transformImage: "/Products/Shoe/pink2.webp"
}
const colorOption4 = {
    color: "#e49b60ff",
    image: "/Products/Shoe/peach1.webp",
    transformImage: "/Products/Shoe/peach2.webp"
}
const ColorOptions: ColorOption[] = [
  colorOption1, colorOption2, colorOption3, colorOption4
]
const card1 = <ProductCard
    className="select-none"
    image="/Products/shoe.png"
    transformImage="/Products/shoe-2.png"
    title="On Running Cloudstratus"
    price="€85"
    colorPalette={ColorOptions}
    onButtonClick={() => console.log("Product 1 clicked")}
  />;
const Productpage: React.FC<ProductpageProps>  = ({query}) => {
  console.log("Query received in Productpage:", query);
  /*
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    // Fetch products based on the query
    fetch(`/api/products?search=${query}`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [query]);
*/
  return (
  <div>
    {card1}
  </div>
  );
}

export default Productpage;