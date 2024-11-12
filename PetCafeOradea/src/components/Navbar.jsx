import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import Logo from "../assets/PetCafeLogo.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      {/* Desktop and Tablet Navbar */}
      <div className="hidden sm:flex flex-col fixed left-0 min-h-screen md:w-[192px] lg:w-[304px] bg-[#633404] text-white">
        <div className="flex flex-col items-center justify-between h-full py-16">
          {/* Top section with logo */}
          <div className="flex justify-center w-full mb-20">
            <img src={Logo} alt="Pet Cafe Logo" className="w- h-36 rounded-full bg-[#FFF6E9]" />
          </div>
          
          {/* Middle section with navigation */}
          <div className="flex flex-col space-y-12 text-2xl text-center flex-grow justify-center">
            <Link to="/" className="hover:text-orange-300 transition-colors px-8 py-2">
              Home
            </Link>
            <Link to="/meniu" className="hover:text-orange-300 transition-colors px-8 py-2">
              Meniu
            </Link>
            <Link to="/galerie" className="hover:text-orange-300 transition-colors px-8 py-2">
              Galerie
            </Link>
            <Link to="/contact" className="hover:text-orange-300 transition-colors px-8 py-2">
              Contact
            </Link>
          </div>
          
          {/* Bottom section with warning */}
          <div className="text-base italic text-red-400 mt-auto">
            ! NOT PET FRIENDLY !
          </div>
        </div>
      </div>

      {/* Mobile Navbar (only for very small screens) */}
      <div className={`sm:hidden ${showNavbar ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
        <div className="flex justify-between items-center bg-[#633404] p-4">
          <img src={Logo} alt="Pet Cafe Logo" className="w-12 h-12 rounded-full bg-[#FFF6E9]" />
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl focus:outline-none"
          >
            {open ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute w-full bg-[#633404] transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col items-center space-y-6 p-8 text-white">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-orange-300 transition-colors text-xl">
              Home
            </Link>
            <Link to="/meniu" onClick={() => setOpen(false)} className="hover:text-orange-300 transition-colors text-xl">
              Meniu
            </Link>
            <Link to="/galerie" onClick={() => setOpen(false)} className="hover:text-orange-300 transition-colors text-xl">
              Galerie
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-orange-300 transition-colors text-xl">
              Contact
            </Link>
            <div className="text-sm italic text-red-400 pt-4">
              ! NOT PET FRIENDLY !
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;