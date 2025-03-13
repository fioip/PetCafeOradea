import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/PetCafeLogo.png";
import { Helmet } from "react-helmet"; // Import pentru gestionarea metadatelor

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Date pentru pagina curentă pentru SEO
  const currentPath = window.location.pathname;
  
  // Configurare metadate în funcție de pagina curentă
  const getMetaData = () => {
    switch(currentPath) {
      case '/':
        return {
          title: "Pet Cafe | Cafeneaua Ta Preferată în București",
          description: "Descoperă Pet Cafe, o cafenea unică în București. Savurează băuturi delicioase și deserturi în atmosfera noastră primitoare. NOT PET FRIENDLY.",
          keywords: "pet cafe, cafenea bucurești, cafenea, deserturi, băuturi"
        };
      case '/meniu':
        return {
          title: "Meniu | Pet Cafe București",
          description: "Explorează meniul nostru variat de cafele, băuturi și deserturi delicioase la Pet Cafe București.",
          keywords: "meniu pet cafe, cafea, deserturi, băuturi, prețuri"
        };
      case '/galerie':
        return {
          title: "Galerie Foto | Pet Cafe București",
          description: "Privește galeria noastră foto și descoperă atmosfera unică din Pet Cafe București.",
          keywords: "galerie pet cafe, poze cafenea, interior pet cafe"
        };
      case '/contact':
        return {
          title: "Contact | Pet Cafe București",
          description: "Contactează-ne sau găsește locația Pet Cafe în București. Program, hartă și informații de contact.",
          keywords: "contact pet cafe, locație, program, rezervări"
        };
      default:
        return {
          title: "Pet Cafe | Cafeneaua din București",
          description: "Pet Cafe - O cafenea unică în București cu atmosferă plăcută și produse de calitate. NOT PET FRIENDLY.",
          keywords: "pet cafe, cafenea, bucurești"
        };
    }
  };

  const metaData = getMetaData();

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
      {/* SEO Optimization - Helmet pentru metadate */}
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={Logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {/* Desktop Navbar */}
      <div className="hidden xl:block">
        <div className="fixed left-0 top-0 min-h-screen lg:w-[280px] xl:w-[304px] bg-[#633404] text-[#FFF8EA]">
          <div className="flex flex-col items-center justify-between h-full py-8 lg:py-16">
            <div className="flex justify-center w-full mb-12 xl:mb-20">
              <img
                src={Logo}
                alt="Pet Cafe Logo - Cafenea în București"
                className="w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-[#FFF6E9]"
                width="144"
                height="144"
              />
            </div>

            <nav aria-label="Navigare principală">
              <div className="flex flex-col space-y-8 xl:space-y-12 text-lg xl:text-2xl text-center flex-grow justify-center text-[#FFF8EA]">
                <Link
                  to="/"
                  className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
                  aria-label="Pagina principală"
                >
                  Home
                </Link>
                <Link
                  to="/meniu"
                  className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
                  aria-label="Vezi meniul nostru"
                >
                  Meniu
                </Link>
                <Link
                  to="/galerie"
                  className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
                  aria-label="Explorează galeria foto"
                >
                  Galerie
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-orange-300 transition-colors px-4 xl:px-8 py-2"
                  aria-label="Informații de contact"
                >
                  Contact
                </Link>
              </div>
            </nav>

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
                <Link to="/" className="flex items-center space-x-4" aria-label="Pet Cafe - Pagina principală">
                  <img
                    src={Logo}
                    alt="Pet Cafe Logo - Cafenea în București"
                    className="w-16 h-16 rounded-full bg-[#FFF6E9]"
                    width="64"
                    height="64"
                  />
                  <span className="text-[#FFF8EA] text-2xl lg:text-2xl font-bold">
                    Pet Cafe
                  </span>
                </Link>

                <nav aria-label="Navigare principală">
                  <div className="flex space-x-6">
                    <Link
                      to="/"
                      className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                      aria-label="Pagina principală"
                    >
                      Home
                    </Link>
                    <Link
                      to="/meniu"
                      className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                      aria-label="Vezi meniul nostru"
                    >
                      Meniu
                    </Link>
                    <Link
                      to="/galerie"
                      className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                      aria-label="Explorează galeria foto"
                    >
                      Galerie
                    </Link>
                    <Link
                      to="/contact"
                      className="text-[#FFF8EA] hover:text-orange-300 transition-colors text-xl lg:text-2xl"
                      aria-label="Informații de contact"
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
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
            <Link to="/" aria-label="Pet Cafe - Pagina principală">
              <img
                src={Logo}
                alt="Pet Cafe Logo - Cafenea în București"
                className="w-12 h-12 rounded-full bg-[#FFF6E9]"
                width="48"
                height="48"
              />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl focus:outline-none"
              aria-label={open ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={open}
            >
              {open ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </button>
          </div>

          <nav
            className={`fixed top-[64px] left-0 w-full bg-[#633404] transition-transform duration-300 
              ${open ? "translate-x-0" : "-translate-x-full"}`}
            aria-hidden={!open}
            aria-label="Navigare mobilă"
          >
            <div className="flex flex-col items-center space-y-6 p-8 text-[#FFF8EA]">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
                aria-label="Pagina principală"
              >
                Home
              </Link>
              <Link
                to="/meniu"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
                aria-label="Vezi meniul nostru"
              >
                Meniu
              </Link>
              <Link
                to="/galerie"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
                aria-label="Explorează galeria foto"
              >
                Galerie
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="hover:text-orange-300 transition-colors text-xl w-full text-center"
                aria-label="Informații de contact"
              >
                Contact
              </Link>
              <div className="text-sm italic text-[#FFF8EA] pt-4">
                ! NOT PET FRIENDLY !
              </div>
            </div>
          </nav>
        </div>
        <div className="h-16"></div>
      </div>
    </>
  );
};

export default Navbar;