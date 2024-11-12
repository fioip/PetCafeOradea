import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPaw, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import {
  Mira,
  Kira,
  Tiramisu,
  Ash,
  Plawan,
  Baghera,
  Daisy,
  Chilli,
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
    plawan: Plawan,
    baghera: Baghera,
    daisy: Daisy,
    chilli: Chilli,
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
  const [lightboxImage, setLightboxImage] = useState("");

  // Funcția pentru selectarea unei imagini din thumbnails
  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Funcții pentru a naviga între imagini
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? selectedAnimal.additionalImages.length - 1
        : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedAnimal.additionalImages.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  // Deschidere lightbox
  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  // Închidere lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

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
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full">
      <div className="flex flex-col items-center bg-[#FFF8EA] min-h-screen py-8 px-4">
        <div className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl relative overflow-hidden lg:max-w-5xl">
          {/* Background Circle Decoration */}
          <div className="absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-r from-[#FFF8EA] to-[#633404] rounded-full opacity-20 z-0 lg:w-80 lg:h-80"></div>

          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Coloana stânga - Info animal */}
            <div className="flex flex-col justify-between">
              <div className="text-left">
                {/* Titlu - AnimalTitle */}
                <Link to={`/galerie`}>
                  <button
                    onClick={handlePrevClick}
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

                {/* Descrierea detaliată */}
                <p className="text-sm text-[#633404] text-justify leading-relaxed mb-6 lg:text-lg">
                  Acesta este un animal cu trăsături unice și fascinante.
                  Descoperă mai multe detalii despre habitatul său și modul său
                  de viață. Explorează comportamentul și alte caracteristici
                  care îl fac atât de special.
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
        <div className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl relative overflow-hidden lg:max-w-5xl mt-14">
          <h2 className="text-3xl font-bold text-[#EF7F00] mb-8 text-center lg:text-4xl">
            Galerie
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {selectedAnimal.additionalImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(image)}
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

      {/* Lightbox pentru vizualizarea imaginii mari */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-3xl p-2 hover:text-[#EF7F00]"
            >
              <FaTimes />
            </button>
            <img
              src={lightboxImage}
              alt="Lightbox"
              className="w-auto max-h-[80vh] rounded-lg shadow-2xl"
            />
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
