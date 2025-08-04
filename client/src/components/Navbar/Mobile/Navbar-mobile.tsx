import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import Logo from "../../Symbols/Logo";

const NavbarMobile: React.FC = () => {
  return (
    <nav className="md:hidden navbar-mobile h-20 w-full navbar-colour absolute flex items-center justify-between px-4 top-0">
      <div className="flex items-center space-x-15">
        <FiAlignJustify 
          size={40} 
          id="mobile-menu-button" 
          className="color-text cursor-pointer hover-highlight transition duration-300"
        />
        <Logo size={30} className="cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <FiSearch size={30} className="color-text cursor-pointer hover-highlight transition duration-300" />
        <FiShoppingCart size={30} className="color-text cursor-pointer hover-highlight transition duration-300" />
      </div>
    </nav>
  );
};

export default NavbarMobile;
