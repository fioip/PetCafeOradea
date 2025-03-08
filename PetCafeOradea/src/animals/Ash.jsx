import AnimalPage from './AnimalPage';
import { Ash } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const AshPage = () => {
  const ashData = Ash[0];

  return (
    <AnimalPage
      animalTitle={ashData.animalTitle}
      imgURL={ashData.imgURL}
      denumire={ashData.denumire}
      additionalImages={ashData.additionalImages}
    />
  );
};

export default AshPage;
