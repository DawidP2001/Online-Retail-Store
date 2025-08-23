import React from 'react';
import Logo from '../../Symbols/Logo';
import { FiShoppingCart } from 'react-icons/fi';
import SearchBar from '../Search-bar';

type NavbarProps = {
  setIsMegaMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMegaMenuSection: React.Dispatch<React.SetStateAction<'mens' | 'womens' | 'kids' | 'sale'>>;
};

const Navbar: React.FC<NavbarProps> = ({ setIsMegaMenuOpen, setMegaMenuSection }) => {
  
  return (
    <nav 
      className="hidden fixed top-0 md:flex navbar-desktop w-full h-auto navbar-colour absolute top-0 left-0 z-50 items-center justify-between px-4"
      onClick={e => e.stopPropagation()} // Prevent closing mega menu when clicking inside navbar
    >
      <div className='flex'>
        <a href="/"><Logo size={40} className="cursor-pointer px-5" /></a>
        <div className='flex justify-start items-center space-x-10 mx-10'>
          <button onClick={() => {setIsMegaMenuOpen(true);setMegaMenuSection('mens');}}><p className='text-xl hover:underline'>Men</p></button>
          <button onClick={() => {setIsMegaMenuOpen(true);setMegaMenuSection('womens');}}><p className='text-xl hover:underline'>Women</p></button>
          <button onClick={() => {setIsMegaMenuOpen(true);setMegaMenuSection('kids');}}><p className='text-xl hover:underline'>Kids</p></button>
          <button onClick={() => {setIsMegaMenuOpen(true);setMegaMenuSection('sale');}}><p className='text-xl hover:underline'>Sale</p></button>
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
