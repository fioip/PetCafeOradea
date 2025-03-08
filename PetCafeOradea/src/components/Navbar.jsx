import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/PetCafeLogo.png";

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

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <div className="fixed left-0 top-0 min-h-screen lg:w-[280px] xl:w-[304px] bg-[#633404] text-[#FFF8EA]">
          <div className="flex flex-col items-center justify-between h-full py-8 lg:py-16">
            <div className="flex justify-center w-full mb-12 xl:mb-20">
              <img
                src={Logo}
                alt="Pet Cafe Logo"
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-[#FFF6E9]"
              />
            </div>

            <div className="flex flex-col space-y-8 xl:space-y-12 text-lg xl:text-2xl text-center flex-grow justify-center text-[#FFF8EA]">
              <Link
                to="/"
                className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
              >
                Home
              </Link>
              <Link
                to="/meniu"
                className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
              >
                Meniu
              </Link>
              <Link
                to="/galerie"
                className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
              >
                Galerie
              </Link>
              <Link
                to="/contact"
                className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
              >
                Contact
              </Link>
            </div>

            <div className="text-sm xl:text-base italic text-[#FFF8EA] absolute bottom-4">
              ! NOT PET FRIENDLY !
            </div>
          </div>
        </div>
        <div className="lg:ml-[280px] xl:ml-[304px]"></div>
      </div>

      {/* Tablet Navbar - New Design */}
      <div className="hidden sm:block xl:hidden">
        <div
          className={`fixed w-full top-0 z-50 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300`}
        >
          <div className="bg-[#633404] shadow-lg">
            <div className="max-w-3xl mx-auto px-4 py-4 lg:max-w-5xl">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-4">
                  <img
                    src={Logo}
                    alt="Pet Cafe Logo"
                    className="w-16 h-16 rounded-full bg-[#FFF6E9]"
                  />
                  <span className="text-[#FFF8EA] text-2xl lg:text-2xl font-bold">
                    Pet Cafe
                  </span>
                </Link>

                <div className="flex space-x-6">
                  <Link
                    to="/"
                    className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                  >
                    Home
                  </Link>
                  <Link
                    to="/meniu"
                    className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                  >
                    Meniu
                  </Link>
                  <Link
                    to="/galerie"
                    className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                  >
                    Galerie
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-24"></div>
      </div>

      {/* Mobile Navbar */}
      <div className="block sm:hidden">
        <div
          className={`fixed w-full top-0 z-50 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          } 
          transition-transform duration-300`}
        >
          <div className="flex justify-between items-center bg-[#633404] p-4">
            <img
              src={Logo}
              alt="Pet Cafe Logo"
              className="w-12 h-12 rounded-full bg-[#FFF6E9]"
            />
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>

          <div
            className={`fixed top-[64px] left-0 w-full bg-[#633404] transition-transform duration-300 
              ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex flex-col items-center space-y-6 p-8 text-[#FFF8EA]">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
              >
                Home
              </Link>
              <Link
                to="/meniu"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
              >
                Meniu
              </Link>
              <Link
                to="/galerie"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
              >
                Galerie
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
              >
                Contact
              </Link>
              <div className="text-sm italic text-[#FFF8EA] pt-4">
                ! NOT PET FRIENDLY !
              </div>
            </div>
          </div>
        </div>
        <div className="h-16"></div>
      </div>
    </>
  );
};

export default Navbar;
