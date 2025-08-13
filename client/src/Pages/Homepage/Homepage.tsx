/**
 * Name: Homepage
 * Description: This is the main homepage of the application.
 */

import React from 'react';
import CustomCarousel from '../../components/CustomCarousel';
import Card from '../../components/Card';
import Button from '../../components/Button';

const card1 = <Card
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

const Homepage: React.FC = () => {
  return (
    <div className="homepage w-screen">
        <div
            className="hero-page w-full h-screen mt-20 flex items-center justify-center"
            style={{ backgroundImage: "url('/hero3.jpg')", backgroundSize: "cover" }}
        >
            <h1 
                className='text-white text-4xl font-bold h-20 relative bottom-10'
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
            >
                Refined <span className="color-highlight">Luxury</span>, Dress the <span className="color-highlight">Legacy</span>
            </h1>
        </div>
        <div className="content">
            <h1 className="text-2xl font-bold mb-4">New in</h1>
            <CustomCarousel 
                items={carouselItems}
                className=''
            />
        </div>
        <div className='flex items-center'>
            <p className='mr-4 text-2xl font-semibold m-10'>Featured Products</p>
            <Button color="black" size="large">
                Mens
            </Button>
            <Button color="white" size="large">
                Womens
            </Button>
            <Button color="white" size="large">
                Kids
            </Button>
        </div>
        <div className='flex justify-start space-x-4'>
            <Card
                image="/path/to/image1.jpg"
                title="Featured Product 1"
                price="price for Featured Product 1"
                onButtonClick={() => console.log("Featured Product 1 clicked")}
            />
            <Card
                image="/path/to/image2.jpg"
                title="Featured Product 2"
                price="price for Featured Product 2"
                onButtonClick={() => console.log("Featured Product 2 clicked")}
            />
        </div>
    </div>
  );
};

export default Homepage;
