import { Link } from "react-router-dom";
import logo from "../assets/PetCafeLogo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const Menu = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* Hamburger Meniu */}
      <button className="text-[#FEF2DA] focus:outline-none md:hidden absolute top-4 left-4 z-50" onClick={Menu} >
        <GiHamburgerMenu  className="w-8 h-8"/>
      </button>

      {/* Navbar */}
      <div className={`fixed top-0 left-0 h-screen w-full bg-[#633404] ${ open ? "translate-x-0"	: "-translate-x-full"} md-relative md:flex md:flex-col md:w-1/4 md:translate-x-0 lg:w-1/4 xl:w-1/5`}>
        <div className="flex justify-center items-center mt-9">
          <img src={logo} alt="logo" className="w-24 h-24 md:w-40 md:h-40"/>
        </div>

        <div className={`flex flex-col justify-center text-[#FEF2DA] ${ open ? "mt-10 mb-20" : "-mt-3 mb-0"} h-full`}>
          <ul className={`flex flex-col gap-4 md:gap-14 justify-center items-center ${ open ? "-mt-72 gap-16 text-3xl md:text-4xl" : "text-2xl"}`}>
            <li>
              <Link to="/" className="bg hover:underline" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/meniu" className="hover:underline" onClick={() => setOpen(false)}>
                Meniu
              </Link>
            </li>
            <li>
              <Link to="/galerie" href="#" className="hover:underline" onClick={() => setOpen(false)}>
                Galerie
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <p className={`text-lg md:text-xl text-[#FEF2DA]/85 text-center italic ${ open ? "absolute bottom-8 left-0 right-0" : "hidden"} md:block md:mt-auto md:mb-4`}>
          Piața 1 Decembrie
          <span className="flex flex-col">nr.12, Oradea</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
