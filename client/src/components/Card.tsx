import React from "react";

interface CardProps {
	image: string;
	title: string;
	description: string;
	buttonText?: string;
	onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, onButtonClick }) => {
	return (
		<div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
			<img className="w-full h-48 object-cover" src={image} alt={title} />
			<div className="p-6">
				<h2 className="font-bold text-xl mb-2 text-gray-900">{title}</h2>
				<p className="text-gray-700 text-base mb-4">{description}</p>
				{buttonText && (
					<button
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
						onClick={onButtonClick}
					>
						{buttonText}
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
