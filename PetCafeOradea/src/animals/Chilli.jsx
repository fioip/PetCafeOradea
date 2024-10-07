import React from 'react';
import AnimalPage from './AnimalPage';
import { Chilli } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const ChilliPage = () => {
  const chilliData = Chilli[0];

  return (
    <AnimalPage
      animalTitle={chilliData.animalTitle}
      imgURL={chilliData.imgURL}
      denumire={chilliData.denumire}
      additionalImages={chilliData.additionalImages}
    />
  );
};

export default ChilliPage;
