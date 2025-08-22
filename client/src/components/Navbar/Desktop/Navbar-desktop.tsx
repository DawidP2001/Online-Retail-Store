import React from 'react';
import Logo from '../../Symbols/Logo';
import { FiShoppingCart } from 'react-icons/fi';
import SearchBar from '../Search-bar';
import MegaMenu from './MegaMenu';

const Navbar: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);
  //const [megaMenuCategory, setMegaMenuCategory] = React.useState<string | null>('men');
  
  return (
    <nav className="hidden md:flex navbar-desktop w-full h-auto navbar-colour absolute top-0 left-0 z-50 items-center justify-between px-4">
      <div className='flex'>
        <a href="/"><Logo size={40} className="cursor-pointer px-5" /></a>
        <div className='flex justify-start items-center space-x-10 mx-10'>
          <button onClick={() => setIsMegaMenuOpen(true)}><p className='text-xl hover:underline'>Men</p></button>
          <button onClick={() => setIsMegaMenuOpen(true)}><p className='text-xl hover:underline'>Women</p></button>
          <button onClick={() => setIsMegaMenuOpen(true)}><p className='text-xl hover:underline'>Kids</p></button>
          <button onClick={() => setIsMegaMenuOpen(true)}><p className='text-xl hover:underline'>Sale</p></button>
        </div>
      </div>
      {isMegaMenuOpen ? <MegaMenu /> : null}
      <div className='flex items-center space-x-4'>
        <SearchBar placeholder='Search for products...' onSearch={() => {}} /> {/* Placeholder for search functionality */}
        <FiShoppingCart size={30} className="color-text cursor-pointer hover-highlight transition duration-300" />
      </div>
    </nav>
  );
};

export default Navbar;
