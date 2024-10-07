import React, { useState } from 'react';
import Logo from './Logo';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full h-[72px] px-4 md:px-8 lg:px-16">
      <Logo />

      {/* Mobile Menu Button */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <MenuItems />

      {/* Login Button for Large Screens */}
      <button className="hidden lg:block h-[31px] w-[75px] text-[16px] text-white bg-red-600 hover:bg-red-700">
        Login
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
