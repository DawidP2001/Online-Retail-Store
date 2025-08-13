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
    items: 4
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

const CustomCarousel: React.FC<CustomCarouselProps> = ({ items, className }) => {
  return (
    <div className={className}>
      <Carousel
        className='user-select-none'
        responsive={responsive}
        draggable={true}
        swipeable={true}
        customTransition="transform 300ms cubic-bezier(0.4, 0, 0.2, 1)"
        transitionDuration={300}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        keyBoardControl={true}
        // This enables mouse wheel scrolling
        additionalTransfrom={0}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item) => (
          <div key={item.id} className="h-full w-full pointer-events-auto">
            {item.content}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;