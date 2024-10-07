import React from 'react';
import AnimalPage from './AnimalPage';
import { Kira } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const KiraPage = () => {
  const kiraData = Kira[0];

  return (
    <AnimalPage
      animalTitle={kiraData.animalTitle}
      imgURL={kiraData.imgURL}
      denumire={kiraData.denumire}
      additionalImages={kiraData.additionalImages}
    />
  );
};

export default KiraPage;
