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
          title: "Pet Cafe Oradea - Cafenea cu animale pentru iubitorii de cafea și animale",
          description: "În inima Oradei, Pet Cafe Oradea este o oază de liniște și bucurie pentru iubitorii de animale și cafea. Vizitează-ne pentru a te relaxa cu o cafea în compania animalelor noastre prietenoase.",
          keywords: "pet cafe, pet cafe Oradea, cafe animale, cafenea pisici, cafenea câini, Oradea"
        };
      case '/meniu':
        return {
          title: "Meniu Pet Cafe Oradea - Băuturi și Gustări",
          description: "Descoperă meniul Pet Cafe Oradea cu o varietate de cafea de specialitate, ceaiuri, limonade, cocktailuri și gustări delicioase, într-un ambient plăcut alături de animăluțe.",
          keywords: "Pet Cafe Oradea, meniu, cafea specialitate, ceai specialitate, limonada, cocktails, gustari, animal cafe"
        };
      case '/galerie':
        return {
          title: "Galerie Pet Cafe Oradea - Galerie Animale de Companie<",
          description: "Descoperă galeria noastră cu animale de companie disponibile. Fiecare animal are propria poveste.",
          keywords: "pet cafe oradea, pisici, câini, animale de companie"
        };
      case '/contact':
        return {
          title: "Contact Pet Cafe Oradea - Cafenea cu Animale de Companie",
          description: "Contactează Pet Cafe Oradea - prima cafenea cu animale din Oradea. Telefon, email, adresă și rețele sociale pentru a ne vizita sau a afla mai multe despre noi.",
          keywords: "pet cafe, pet cafe Oradea, contact pet cafe, cafenea cu animale Oradea, locație Pet Cafe"
        };
      default:
        return {
          title: "Pet Cafe Oradea",
          description: "Pet Cafe Oradea - O cafenea unică în Oradea cu atmosferă plăcută și produse de calitate. NOT PET FRIENDLY.",
          keywords: "pet cafe, pet cafe Oradea, cafenea"
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