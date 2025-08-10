/**
 * Name: Homepage
 * Description: This is the main homepage of the application.
 */

import React from 'react';
import CustomCarousel from '../../components/Navbar/Carousel/CustomCarousel';

const carouselItems = [
  { id: 1, content: <div>Item 1</div> },
  { id: 2, content: <div>Item 2</div> },
  { id: 3, content: <div>Item 3</div> },
  { id: 4, content: <div>Item 4</div> },
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
            <CustomCarousel items={carouselItems} />
        </div>
        <div>
            <p>Featured Products</p>
        </div>
    </div>
  );
};

export default Homepage;
