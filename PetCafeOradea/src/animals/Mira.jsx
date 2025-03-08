import AnimalPage from './AnimalPage';
import { Mira } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const MiraPage = () => {
  const miraData = Mira[0];

  return (
    <AnimalPage
      animalTitle={miraData.animalTitle}
      imgURL={miraData.imgURL}
      denumire={miraData.denumire}
      additionalImages={miraData.additionalImages}
    />
  );
};

export default MiraPage;
