/**
 * Name: Card
 * Description: This component represents a product card in the application.
*/

import React, { useState } from "react";

interface CardProps {
	className?: string;
	image: string;
	transformImage?: string;
	title: string;
	price: string;
	onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ className, image, transformImage, title, price, onButtonClick }) => {
	const [isHovered, setIsHovered] = useState(false);

  	const handleMouseEnter = () => setIsHovered(true);
  	const handleMouseLeave = () => setIsHovered(false);

	return (
		<button
			className={`rounded-xl overflow-hidden bg-white ${className}`}
			onClick={onButtonClick}
		>
			{isHovered && transformImage ? 
			<img 
				className="w-full h-full object-cover" 
				src={transformImage} 
				alt={title} 
				onMouseEnter={handleMouseEnter}
      			onMouseLeave={handleMouseLeave}
				draggable={false}
			/> : <img 
				className="w-full h-full object-cover" 
				src={image} 
				alt={title}
				onMouseEnter={handleMouseEnter}
      			onMouseLeave={handleMouseLeave}
				draggable={false}
			/>}
			
			<div className="">
				<p className="font-bold my-2 text-xl text-left">{price}</p>
				<h2 className="text-xl mb-2 text-left">{title}</h2>
			</div>
		</button>
	);
};

export default Card;
