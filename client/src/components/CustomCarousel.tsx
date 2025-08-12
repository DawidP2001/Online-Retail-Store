/**
 * Name: CustomCarousel
 * Description: A custom carousel component built on top of react-multi-carousel.
 */

// Check out carousel from: https://www.npmjs.com/package/react-multi-carousel?activeTab=code
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface CustomCarouselProps {
  items: CarouselItem[];
  className?: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface CustomCarouselProps {
  items: CarouselItem[];
  className?: string;
}
const CustomCarousel: React.FC<CustomCarouselProps> = ({ items, className }) => {
  return (
    <div className={className}>
      <Carousel responsive={responsive}>
        {items.map((item) => (
          <div key={item.id}>
            {item.content}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;