import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase/FireBase';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); 
    } catch (error) {
      console.error("Logout Error: ", error);
    }
  };

  return (
    <div className="absolute top-3 left-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 md:py-5 font-medium z-10">
      
      <Link to="/home">
        <p className="text-white text-2xl md:text-3xl">Carspace</p>
      </Link>

      {/* Mobile Menu Button */}
      <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
        <span className="text-white text-xl">&#9776;</span>
      </div>

      {/* Sidebar Menu for Small Screens */}
      <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'w-64' : 'w-0'}`}>

        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setMenuOpen(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setMenuOpen(false)} className='py-2 pl-6 border uppercase' to='/home'>Home</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className='py-2 pl-6 border uppercase' to='/about'>About Us</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} className='py-2 pl-6 border uppercase' to='/certified'>Certified Pre-Owned</NavLink>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-4 md:gap-6 text-sm md:text-md text-white">
        <NavLink to="/home" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className='w-full h-1 bg-red-600 hidden' />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About us</p>
          <hr className='w-full h-1 bg-red-600 hidden' />
        </NavLink>
        <NavLink to="/certified" className="flex flex-col items-center gap-1">
          <p>Certified Pre-Owned</p>
          <hr className='w-full h-1 bg-red-600 hidden' />
        </NavLink>
      </ul>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="hidden sm:flex sm:w-32 md:w-40 sm:h-10 md:h-12 px-4 md:px-5 py-2 md:py-3 text-center rounded text-xs md:text-sm text-white bg-red-500 items-center justify-center">
          <button>Compare Cars</button>
        </div>

        <div className="relative">
          <div 
            className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <img 
              src={assets.cris} 
              alt="Profile" 
              className="w-full h-full object-contain rounded-full border border-gray-300 shadow-sm"
            />
          </div>

          {isOpen && (
            <div className="absolute right-0 top-10 md:top-12 bg-white shadow-lg border border-gray-200 rounded-lg py-2 w-28 md:w-32 text-xs md:text-sm z-10">
              <button 
                className="block w-full px-3 md:px-4 py-1 md:py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLogout} 
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
