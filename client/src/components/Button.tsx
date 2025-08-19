import React  from 'react';

interface ButtonProps {
    className?: string;
    color: "black" | "white";
    children?: React.ReactNode;
    size: "small" | "medium" | "large";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    className,
    color,
    children,
    size,
    onClick,
}) => {
    let height, width, fontSize;

    switch (size) {
        case "small":
            height = "10px";
            width = "30px";
            fontSize = "10px";
            break;
        case "medium":
            height = "14px";
            width = "40px";
            fontSize = "14px";
            break;
        case "large":
            height = "20px";
            width = "50px";
            fontSize = "20px";
            break;
        default:
            height = "40px";
            width = "100px";
            fontSize = "14px";
    }

    return (
        <button
            className={`button ${className} flex items-center justify-center`}
            style={{
                backgroundColor: color,
                color: color === "black" ? "white" : "gray",
                border: color === "white" ? "solid 1px gray" : "none",
                borderRadius: "4px",
                fontSize: fontSize,
                margin: "8px",
                padding: height + " " + width,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
