/**
 * Name: Homepage
 * Description: This is the main homepage of the application.
 */

import React from 'react';
import CustomCarousel from '../../components/CustomCarousel';
import Card from '../../components/Card';
import Button from '../../components/Button';

const card1 = <Card
    image="/path/to/image1.jpg"
    title="Product 1"
    description="Description for Product 1"
    buttonText="View Product"
    onButtonClick={() => console.log("Product 1 clicked")}
/>;
const card2 = <Card
    image="/path/to/image2.jpg"
    title="Product 2"
    description="Description for Product 2"
    buttonText="View Product"
    onButtonClick={() => console.log("Product 2 clicked")}
 />;
 const card3 = <Card
    image="/path/to/image3.jpg"
    title="Product 3"
    description="Description for Product 3"
    buttonText="View Product"
    onButtonClick={() => console.log("Product 3 clicked")}
 />;
 const card4 = <Card
    image="/path/to/image4.jpg"
    title="Product 4"
    description="Description for Product 4"
    buttonText="View Product"
    onButtonClick={() => console.log("Product 4 clicked")}
 />;
const carouselItems = [
  { id: 1, content: card1 },
  { id: 2, content: card2 },
  { id: 3, content: card3 },
  { id: 4, content: card4 },
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
                className='m-20'
            />
        </div>
        <div className='flex items-center'>
            <p className='mr-4 text-2xl font-semibold m-10'>Featured Products</p>
            <Button color="black" size="large">
                Mens
            </Button>
            <Button color="black" size="large">
                Womens
            </Button>
            <Button color="black" size="large">
                Kids
            </Button>
        </div>
        <div className='flex justify-start space-x-4'>
            <Card
                image="/path/to/image1.jpg"
                title="Featured Product 1"
                description="Description for Featured Product 1"
                buttonText="Buy Now"
                onButtonClick={() => console.log("Featured Product 1 clicked")}
            />
            <Card
                image="/path/to/image2.jpg"
                title="Featured Product 2"
                description="Description for Featured Product 2"
                buttonText="Buy Now"
                onButtonClick={() => console.log("Featured Product 2 clicked")}
            />
        </div>
    </div>
  );
};

export default Homepage;
