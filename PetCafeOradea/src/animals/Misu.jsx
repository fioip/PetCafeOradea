import AnimalPage from './AnimalPage';
import { Misu } from '../constants/AnimalDescription'; // Asigură-te că calea este corectă

const MisuPage = () => {
  const misuData = Misu[0];

  return (
    <AnimalPage
      animalTitle={misuData.animalTitle}
      imgURL={misuData.imgURL}
      denumire={misuData.denumire}
      additionalImages={misuData.additionalImages}
    />
  );
};

export default MisuPage;
