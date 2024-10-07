import React from "react";
import {
  Mira,
  Kira,
  Tiramisu,
  Ash,
  Pisu1,
  Pisu2,
  Daisy,
  Chilli,
  Wendy,
  Winnie,
} from "../constants/AnimalDescription"

// Componentă reutilizabilă pentru afișarea unui animal
function AnimalPage({
  animalTitle,
  imgURL,
  additionalImages,
  denumire,
  image
}) {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-screen bg-[#FFF8EA] p-4 overflow-auto">
      <h1 className="text-3xl font-bold text-[#633404] mb-8">
        {animalTitle}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
        {/* Imaginea principală a animalului */}
        <div>
          <img
            src={imgURL}
            alt={animalTitle} 
            className="w-full h-64 object-cover object-center transition-transform duration-300 hover:scale-105 rounded-lg"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#633404] mb-4">Descriere</h2>
          <p className="text-gray-600 mb-6">{denumire}</p>

          {additionalImages && (
            <div className="grid grid-cols-3 gap-2">
              {additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${animalTitle} additional`} 
                  className="w-full h-24 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimalPage;
