/**
 * Name: Homepage
 * Description: This is the main homepage of the application.
 */

import React from 'react';
import CustomCarousel from '../../components/CustomCarousel';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import BrandCard from '../../components/BrandCard';


const card1 = <ProductCard
    className="select-none"
    image="/Products/shoe.png"
    transformImage="/Products/shoe-2.png"
    title="On Running Cloudstratus"
    price="€85"
    onButtonClick={() => console.log("Product 1 clicked")}
  />;
const carouselItems = [
  { id: 1, content: card1 },
  { id: 2, content: card1 },
  { id: 3, content: card1 },
  { id: 4, content: card1 },
  { id: 5, content: card1 },
  { id: 6, content: card1 },
  { id: 7, content: card1 },
  { id: 8, content: card1 },
  { id: 9, content: card1 },
  { id: 10, content: card1 },
];
const maleCard = <ProductCard
                className="m-1"
                image="/Products/men1.webp"
                transformImage="/Products/men2.webp"
                title="On Running Cloudstratus"
                price="€85"
                onButtonClick={() => console.log("Product 1 clicked")}
            />;
const femaleCard = <ProductCard
                className="m-1"
                image="/Products/women1.webp"
                transformImage="/Products/Women2.webp"
                title="On Running Cloudstratus"
                price="€85"
                onButtonClick={() => console.log("Product 1 clicked")}
            />;
const kidsCard = <ProductCard
                className="m-1"
                image="/Products/shoe.png"
                transformImage="/Products/shoe-2.png"
                title="On Running Cloudstratus"
                price="€85"
                onButtonClick={() => console.log("Product 1 clicked")}
            />;


const Homepage: React.FC = () => {
    const [buttonClicked, setButtonClicked] = React.useState<string | null>('mens');
    let productCard = maleCard;
    if(buttonClicked === 'mens') {
        productCard = maleCard;
    } else if(buttonClicked === 'womens') {
        productCard = femaleCard;
    } else if(buttonClicked === 'kids') {
        productCard = kidsCard;
    }
const brandCard = <BrandCard 
    className="w-full h-full" 
    image='/Brands/New-Balance.webp'
    brandName='New Balance'
/>; 
  return (
    <div className="homepage w-screen">
        <div
            className="hero-page w-full h-screen mt-20 flex items-center justify-center bg-fixed px-4"
            style={{ backgroundImage: "url('/hero3.jpg')", backgroundSize: "cover" }}
        >
            <h1 
                className='text-white p-5 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center leading-tight'
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
                Refined <span className="color-highlight">Luxury</span>, Dress the <span className="color-highlight">Legacy</span>
            </h1>
        </div>
        <div className="mt-10">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold pl-8 md:mx-10 mb-4 text-left h-12">New in</div>
            <CustomCarousel 
                items={carouselItems}
                className=''
            />
        </div>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-start mt-10 space-y-4 md:space-y-0'>
            <div className='p-5 text-2xl md:text-3xl lg:text-4xl font-semibold mx-4 md:mx-10 mb-4 md:mb-0'>Featured Products</div>
            <div className='flex flex-wrap gap-2 mx-4 md:mx-0'>
                <Button color={buttonClicked === 'mens' ? "black" : "white"} size="large" onClick={() => setButtonClicked('mens')}>
                    Mens
                </Button>
                <Button color={buttonClicked === 'womens' ? "black" : "white"} size="large" onClick={() => setButtonClicked('womens')}>
                    Womens
                </Button>
                <Button color={buttonClicked === 'kids' ? "black" : "white"} size="large" onClick={() => setButtonClicked('kids')}>
                    Kids
                </Button>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 md:mx-10 mt-6'>
            {productCard}
            {productCard}
            {productCard}
            {productCard}   
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mx-4 md:mx-10'>
            {brandCard}
            {brandCard}
        </div>
    </div>
  );
};

export default Homepage;
