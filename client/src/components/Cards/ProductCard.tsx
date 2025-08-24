/**
 * Name: ProudctCard
 * Description: This component represents a product card in the application.
*/

import React, { useState } from "react";

// You set the color option in another file before passing them as a CardProp
export interface ColorOption {
	  color: string;
	  image: string;
	  transformImage?: string;
}
interface CardProps {
	className?: string;
	image: string;
	transformImage?: string;
	title: string;
	price: string;
	colorPalette?: ColorOption[];
	onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ className, image, transformImage, title, price, colorPalette, onButtonClick }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [selectedColor, setSelectedColor] = useState<string | null>(null);
	const [imageState, setImageState] = useState<string>(image);
	const [transformImageState, setTransformImageState] = useState<string | undefined>(transformImage);
  	const handleMouseEnter = () => setIsHovered(true);
  	const handleMouseLeave = () => setIsHovered(false);

	return (
		<button
			className={`rounded-t-xl overflow-hidden bg-white ${className}`}
			onClick={onButtonClick}
		>
			{isHovered && transformImage ? 
			<img 
				className="w-full h-full object-cover" 
				src={transformImageState} 
				alt={title} 
				onMouseEnter={handleMouseEnter}
      			onMouseLeave={handleMouseLeave}
				draggable={false}
			/> : <img 
				className="w-full h-full object-cover" 
				src={imageState} 
				alt={title}
				onMouseEnter={handleMouseEnter}
      			onMouseLeave={handleMouseLeave}
				draggable={false}
			/>}
			
			<div className="">
				<p className="font-bold my-2 text-xl text-left">{price}</p>
				<h2 className="text-xl mb-2 text-left">{title}</h2>
			</div>

			{colorPalette && colorPalette.length > 0 ? (
				<div className="flex space-x-2 mt-2">
					{colorPalette.slice(0, 5).map((colorOption, idx) => (
					<div
						key={colorOption.color + idx}
						className="w-5 h-5 border border-gray-300"
						style={{ backgroundColor: colorOption.color }}
						onClick={(e) => {
							e.stopPropagation(); // Prevent triggering the card's onClick
							setSelectedColor(colorOption.color === selectedColor ? null : colorOption.color);
							setImageState(colorOption.image);
							if (colorOption.transformImage) {
								setTransformImageState(colorOption.transformImage);
							} else {
								setTransformImageState(undefined);
							}
						}}
					/>
					))}
				</div>
			) : null}
		</button>
	);
};

export default Card;
