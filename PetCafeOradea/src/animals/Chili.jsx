import React from 'react';
import AnimalPage from './AnimalPage';
import { Chili } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const ChiliPage = () => {
  const chiliData = Chili[0];

  return (
    <AnimalPage
      animalTitle={chiliData.animalTitle}
      imgURL={chiliData.imgURL}
      denumire={chiliData.denumire}
      additionalImages={chiliData.additionalImages}
    />
  );
};

export default ChiliPage;
