import React from 'react';
import AnimalPage from './AnimalPage';
import { Wendy } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const WendyPage = () => {
  const wendyData = Wendy[0];

  return (
    <AnimalPage
      animalTitle={wendyData.animalTitle}
      imgURL={wendyData.imgURL}
      denumire={wendyData.denumire}
      additionalImages={wendyData.additionalImages}
    />
  );
};

export default WendyPage;
