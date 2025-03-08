import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPaw, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import {
  Mira,
  Kira,
  Tiramisu,
  Ash,
  Misu,
  Baghera,
  Daisy,
  Chili,
  Wendy,
  Winnie,
} from "../constants/AnimalDescription";
import Footer from "../components/Footer";
import ScrollToTopButton from "./TopPageButton";

const AnimalPage = () => {
  const { animal } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  // Obiect pentru stocarea datelor animalelor
  const animalsData = {
    mira: Mira,
    kira: Kira,
    tiramisu: Tiramisu,
    ash: Ash,
    misu: Misu,
    baghera: Baghera,
    daisy: Daisy,
    chili: Chili,
    wendy: Wendy,
    winnie: Winnie,
  };

  // Transformăm parametrul în litere mici pentru a fi sigur că găsim cheia corectă
  const selectedAnimal = animalsData[animal?.toLowerCase()]?.[0];

  // Verificăm dacă există date pentru animalul respectiv
  if (!selectedAnimal) {
    return (
      <p className="text-center text-xl font-semibold text-gray-700 mt-20">
        Animalul nu a fost găsit.
      </p>
    );
  }

  // Starea pentru imaginea curentă
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Stare pentru lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  
  // For touch swipe detection
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50; // Minimum distance for a swipe to be registered

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null); // Reset touchEnd to avoid false swipes
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;
    
    if (isSwipe) {
      if (distance > 0) {
        // Swiped left - go to next image
        navigateLightbox('next');
      } else {
        // Swiped right - go to previous image
        navigateLightbox('prev');
      }
    }
    
    // Reset values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Funcția pentru selectarea unei imagini din thumbnails
  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Funcții pentru a naviga între imagini
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => {
      // If we're at the first image (index 0), go to the third image (index 2)
      if (prevIndex === 0) {
        return 2;
      }
      // Otherwise, go to the previous image
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => {
      // If we're at the third image (index 2), go back to the first image (index 0)
      if (prevIndex === 2) {
        return 0;
      }
      // Otherwise, go to the next image
      return prevIndex + 1;
    });
  };

  // Funcție pentru navigarea în lightbox
  const navigateLightbox = (direction) => {
    if (direction === 'next') {
      setLightboxImageIndex((prevIndex) =>
        prevIndex === selectedAnimal.additionalImages.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setLightboxImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedAnimal.additionalImages.length - 1 : prevIndex - 1
      );
    }
  };

  // Deschidere lightbox
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  // Închidere lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Manipulare click pentru a închide lightbox când se dă click în exterior
  const handleLightboxClick = (e) => {
    // Verificăm dacă click-ul a fost pe containerul lightbox și nu pe imagine
    if (e.target.classList.contains('lightbox-container')) {
      closeLightbox();
    }
  };

  // Adăugăm keyboard navigation pentru lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center bg-[#FFF8EA] w-full min-h-screen py-8">
        <div className="container mx-auto px-4 mt-24 md:mt-32 lg:mt-32 xl:mt-8">
          <div className="bg-white shadow-2xl rounded-3xl p-6 w-full relative overflow-hidden">
            {/* Background Circle Decoration */}
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-r from-[#FFF8EA] to-[#633404] rounded-full opacity-20 z-0 lg:w-80 lg:h-80"></div>

            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {/* Coloana stânga - Info animal */}
              <div className="flex flex-col justify-between">
                <div className="text-left">
                  {/* Titlu - AnimalTitle */}
                  <Link to={`/galerie`}>
                    <button
                      className="bg-[#EF7F00] text-white p-3 rounded-full shadow-md hover:bg-[#ffd684] transition-transform transform hover:scale-110"
                    >
                      <div className="flex flex-row justify-center items-center">
                        <FaArrowLeft />
                        <h1 className="text-xl ml-2">Galerie</h1>
                      </div>
                    </button>
                  </Link>
                  <h1 className="text-3xl font-bold text-[#EF7F00] mb-12 mt-10 justify-center flex items-center lg:text-5xl">
                    <FaPaw className="text-[#EF7F00] mr-2" />
                    {selectedAnimal.animalTitle}
                  </h1>

                  {/* Denumire */}
                  <p className="text-xl text-[#633404] text-justify mb-4 font-medium flex items-center gap-3 lg:text-2xl">
                    {selectedAnimal.denumire}
                  </p>
                </div>
              </div>

              {/* Carusel */}
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative">
                  {/* Imagine principală */}
                  <img
                    src={selectedAnimal.additionalImages[currentImageIndex]}
                    alt={`${selectedAnimal.animalTitle} ${currentImageIndex + 1}`}
                    className="w-48 h-48 object-cover rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
                  />
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center gap-2 mt-4 sm:gap-4 lg:mt-6">
                  {selectedAnimal.additionalImages
                    .slice(0, 3)
                    .map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedAnimal.animalTitle} thumbnail ${
                          index + 1
                        }`}
                        onClick={() => selectImage(index)}
                        className={`w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full cursor-pointer border-2 lg:w-20 lg:h-20 ${
                          currentImageIndex === index
                            ? "border-[#EF7F00]"
                            : "border-transparent hover:border-[#ffd684]"
                        } transition-all duration-200`}
                      />
                    ))}
                </div>

                {/* Butoane de navigare */}
                <div className="flex justify-center gap-6 mt-6">
                  <button
                    onClick={handlePrevClick}
                    className="bg-[#EF7F00] text-white p-3 rounded-full shadow-md hover:bg-[#ffd684] transition-transform transform hover:scale-110"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={handleNextClick}
                    className="bg-[#EF7F00] text-white p-3 rounded-full shadow-md hover:bg-[#ffd684] transition-transform transform hover:scale-110"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sectiunea pentru galerie */}
          <div className="bg-white shadow-2xl rounded-3xl p-6 w-full relative overflow-hidden mt-14">
            <h2 className="text-3xl font-bold text-[#EF7F00] mb-8 text-center lg:text-4xl">
              Galerie
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
              {selectedAnimal.additionalImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image}
                    alt={`Galerie ${index + 1}`}
                    className="w-full h-40 object-cover rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:rotate-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox pentru vizualizarea imaginii mari */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center lightbox-container"
          onClick={handleLightboxClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative max-w-screen-lg flex items-center justify-center">
            {/* Buton de închidere */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-3xl md:text-5xl lg:text-6xl xl:text-3xl p-2 hover:text-[#EF7F00] z-10"
            >
              <FaTimes />
            </button>
            
            {/* Buton navigare înapoi */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 text-white md:text-4xl xl:text-xs bg-black bg-opacity-50 p-3 rounded-full hover:bg-[#EF7F00] transform transition-transform hover:scale-110 z-10"
            >
              <FaArrowLeft />
            </button>
            
            {/* Imagine activă */}
            <img
              src={selectedAnimal.additionalImages[lightboxImageIndex]}
              alt={`Lightbox ${lightboxImageIndex + 1}`}
              className="w-auto max-h-[80vh] max-w-full rounded-lg shadow-2xl transition-transform duration-300"
            />
            
            {/* Buton navigare înainte */}
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 text-white md:text-4xl xl:text-xs bg-black bg-opacity-50 p-3 rounded-full hover:bg-[#EF7F00] transform transition-transform hover:scale-110 z-10"
            >
              <FaArrowRight />
            </button>
            
            {/* Indicator pagină curentă */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white md:text-4xl xl:text-xs bg-black bg-opacity-50 px-3 py-1 rounded-full">
              {lightboxImageIndex + 1} / {selectedAnimal.additionalImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Include butonul TopPage */}
      <ScrollToTopButton isVisible={isVisible} />

      <Footer />
    </div>
  );
};

export default AnimalPage;