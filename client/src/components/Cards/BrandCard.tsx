/**
 * Name: BrandCard
 * Description: This component represents a brand card in the application.
*/

import React, { useState } from "react";

interface BrandCardProps {
  className?: string;
  image: string;
  transformImage?: string;
  brandName: string;
  onButtonClick?: () => void;
}

const BrandCard: React.FC<BrandCardProps> = ({
  className,
  image,
  transformImage,
  brandName,
  onButtonClick
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return ( 
    <div 
      className={`${className} rounded-xl overflow-hidden bg-white flex flex-col items-start p-4 cursor-pointer`}
      onClick={onButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-square mb-2">
        <img 
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" 
          src={isHovered && transformImage ? transformImage : image}
          alt={brandName} 
          draggable={false}
        />
        {transformImage && (
          <img 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" 
            src={transformImage}
            alt={brandName} 
            draggable={false}
          />
        )}
      </div>
      <h2 className="text-lg font-bold text-left">{brandName}</h2>
    </div>
  );
};

export default BrandCard;