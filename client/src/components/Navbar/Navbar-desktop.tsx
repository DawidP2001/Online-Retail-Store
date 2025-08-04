import React from 'react';

type NavbarProps = {
    title: string;
    dropdowns?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ title, dropdowns }) => {
  return (
    <nav>
      <h1>{title}</h1>
      <h1>{dropdowns}</h1>
    </nav>
  );
};

export default Navbar;
