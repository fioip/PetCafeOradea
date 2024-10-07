import React from 'react';
import { useParams } from 'react-router-dom';
import { Mira, Kira, Tiramisu, Ash, Pisu1, Pisu2, Daisy, Chilli, Wendy, Winnie } from '../constants/AnimalDescription';

const AnimalPage = () => {
  const { animal } = useParams();  // Extrage parametrul :animal din URL

  // Obiect pentru stocarea datelor animalelor
  const animalsData = {
    mira: Mira,
    kira: Kira,
    tiramisu: Tiramisu,
    ash: Ash,
    pisu1: Pisu1,
    pisu2: Pisu2,
    daisy: Daisy,
    chilli: Chilli,
    wendy: Wendy,
    winnie: Winnie,
  };

  // Transformăm parametrul în litere mici pentru a fi sigur că găsim cheia corectă
  const selectedAnimal = animalsData[animal.toLowerCase()]?.[0];

  // Verificăm dacă există date pentru animalul respectiv
  if (!selectedAnimal) {
    return <p className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full">Animalul nu a fost găsit.</p>;
  }

  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full">
      <h1>{selectedAnimal.animalTitle}</h1>
      <img src={selectedAnimal.imgURL} alt={selectedAnimal.animalTitle} style={{ width: "300px", height: "300px" }} />
      <p>Denumire:</p>
      <p>{selectedAnimal.denumire}</p>
      <div>
        <h3>Mai multe poze:</h3>
        <div className="flex gap-10">
          {selectedAnimal.additionalImages?.length > 0 ? (
            selectedAnimal.additionalImages.map((image, index) => (
              <img key={index} src={image} alt={`${selectedAnimal.animalTitle} ${index + 1}`} className="w-[100px] h-[100px]" />
            ))
          ) : (
            <p>Nu există poze suplimentare disponibile.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalPage;
