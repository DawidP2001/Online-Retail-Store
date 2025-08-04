import React from "react";

type LogoProps = {
  size?: number;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ size = 40, className }) => {
  return (
    <div className={`logo ${className}`} style={{ fontSize: size, fontFamily: "Brush Script MT, sans-serif" }}>
      I&A
    </div>
  );
};

export default Logo;
