import React from 'react';
import Logo from '../../Symbols/Logo';
import { FiShoppingCart } from 'react-icons/fi';
import SearchBar from '../Search-bar';

const Navbar: React.FC = () => {
  return (
    <nav className="hidden md:flex navbar-desktop h-20 w-full navbar-colour fixed top-0 left-0 z-50 items-center justify-between px-4">
      <div className='flex'>
        <a href="/"><Logo size={40} className="cursor-pointer px-5" /></a>
        <div className='flex justify-start items-center space-x-10 mx-10'>
          <a href="/men"><p className='text-xl'>Men</p></a>
          <a href="/women"><p className='text-xl'>Women</p></a>
          <a href="/kids"><p className='text-xl'>Kids</p></a>
          <a href="/sale"><p className='text-xl'>Sale</p></a>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <SearchBar placeholder='Search for products...' onSearch={() => {}} /> {/* Placeholder for search functionality */}
        <FiShoppingCart size={30} className="color-text cursor-pointer hover-highlight transition duration-300" />
      </div>
    </nav>
  );
};

export default Navbar;
