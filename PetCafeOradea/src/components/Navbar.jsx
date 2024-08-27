import { Link } from "react-router-dom";
import logo from "../assets/PetCafeLogo.png";

function Navbar() {
  return (
    <div className="flex flex-col h-screen w-1/4 bg-[#633404] lg:w-1/5">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-center items-center mt-9">
            <img src={logo} alt="logo" width={200} height={200} />
          </div>
          <div className="flex flex-col text-center justify-center text-[#FEF2DA] text-2xl mt-20">
            <ul className="flex flex-col gap-24">
              <li>
                <Link to="/" className="bg hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/meniu" className="hover:underline">
                  Meniu
                </Link>
              </li>
              <li>
                <Link to="/galerie" href="#" className="hover:underline">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="flex flex-col text-xl text-[#FEF2DA]/85 text-center mb-9 italic">
          Piața 1 Decembrie
          <span>nr.12, Oradea</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
