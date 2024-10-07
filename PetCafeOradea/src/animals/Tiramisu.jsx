import React from 'react';
import AnimalPage from './AnimalPage';
import { Tiramisu } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const TiramisuPage = () => {
  const tiramisuData = Tiramisu[0];

  return (
    <AnimalPage
      animalTitle={tiramisuData.animalTitle}
      imgURL={tiramisuData.imgURL}
      denumire={tiramisuData.denumire}
      additionalImages={tiramisuData.additionalImages}
    />
  );
};

export default TiramisuPage;
