import AnimalPage from './AnimalPage';
import { Daisy } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const DaisyPage = () => {
  const daisyData = Daisy[0];

  return (
    <AnimalPage
      animalTitle={daisyData.animalTitle}
      imgURL={daisyData.imgURL}
      denumire={daisyData.denumire}
      additionalImages={daisyData.additionalImages}
    />
  );
};

export default DaisyPage;
