import React from 'react';
import Logo from '../../Symbols/Logo';
import { FiShoppingCart } from 'react-icons/fi';
import SearchBar from '../Search-bar';

const Navbar: React.FC = () => {
  return (
    <nav className="hidden md:flex navbar-desktop h-20 w-full navbar-colour absolute items-center justify-between px-4 top-0">
      <a href="/"><Logo size={40} className="cursor-pointer" /></a>
      <a href="/men"><p>Men</p></a>
      <a href="/women"><p>Women</p></a>
      <a href="/kids"><p>Kids</p></a>
      <a href="/sale"><p>Sale</p></a>
      <SearchBar placeholder='Search for products...' onSearch={() => {}} /> {/* Placeholder for search functionality */}
      <FiShoppingCart size={30} className="color-text cursor-pointer hover-highlight transition duration-300" />
    </nav>
  );
};

export default Navbar;
