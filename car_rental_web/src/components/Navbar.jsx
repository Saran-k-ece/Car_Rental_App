import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="absolute top-3 left-0 w-full flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20 py-5 font-medium z-10">
     
      {/* Logo */}
      <Link to="/home">
        <p className="text-white text-3xl">Carspace</p>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-6 text-md text-white">
        <NavLink to="/home" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-10 border-none h-[3.5px] bg-red-700 rounded hidden"/>
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About us</p>
          <hr className="w-10 border-none h-[3.5px] bg-red-700 rounded hidden" />
        </NavLink>

        <NavLink to="/certified" className="flex flex-col items-center gap-1">
          <p>Certified Pre-Owned</p>
          <hr className="w-10 border-none h-[3.5px] bg-red-700 rounded hidden "/>
        </NavLink>
      </ul>

      <div className="flex items-center gap-2.5">
        <div className="hidden sm:flex sm:w-40 sm:h-12 px-5 py-3 text-center rounded text-sm text-white bg-red-500 items-center justify-center">
          <button>Compare Cars</button>
        </div>

      
        <div className="relative">
          <div 
            className="w-10 h-10 flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img 
              src={assets.cris} 
              alt="Profile" 
              className="w-full h-full object-contain rounded-full border border-gray-300 shadow-sm"
            />
          </div>

        
          {isOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-lg border border-gray-200 rounded-lg py-2 w-32 text-sm z-10">
              <button 
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={closeDropdown} 
              >
                Login
              </button>
              <hr className="w-auto" />
              <button 
                className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={closeDropdown} 
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
