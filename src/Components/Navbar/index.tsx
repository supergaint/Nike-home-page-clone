import React, { useState } from 'react';
import '../../App.css';
import Logo from '../../../src/images/brand_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full h-[72px] px-4 md:px-8 lg:px-16">
      <div>
        <img src={Logo} alt="logo" className="h-[46px] w-[76px]" />
      </div>

      {/* Mobile Menu Button */}
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menu Items for Large Screens */}
      <ul className="hidden lg:flex flex-row justify-around space-x-6 font-semibold text-[16px]">
        <li>
          <a href="#" className="hover:text-red-600">
            MENU
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-600">
            LOCATION
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-600">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-red-600">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Login Button for Large Screens */}
      <button className="hidden lg:block h-[31px] w-[75px] text-[16px] text-white bg-red-600 hover:bg-red-700">
        Login
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 lg:hidden font-semibold text-[16px]">
          <li>
            <a href="#" className="hover:text-red-600">
              MENU
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">
              LOCATION
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">
              CONTACT
            </a>
          </li>
          <li>
            <button className="h-[31px] w-[75px] text-[16px] text-white bg-red-600 hover:bg-red-700">
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
