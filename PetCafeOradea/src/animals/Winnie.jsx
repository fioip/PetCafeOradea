import React from 'react';
import AnimalPage from './AnimalPage';
import { Winnie } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const WinniePage = () => {
  const winnieData = Winnie[0];

  return (
    <AnimalPage
      animalTitle={winnieData.animalTitle}
      imgURL={winnieData.imgURL}
      denumire={winnieData.denumire}
      additionalImages={winnieData.additionalImages}
    />
  );
};

export default WinniePage;
