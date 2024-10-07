import {
  AROME,
  BERE_VIN,
  CAFEA,
  CEAI,
  CIOCOLATA,
  COCKTAILS,
  FRESH,
  GUSTARI,
  ICE_TEA,
  LIMONADA,
  RACORITOARE,
} from "../constants/MenuItems";
import arome from "../assets/photos/arome.jpg";
import bereVin from "../assets/photos/bereVin.jpg";
import ceai from "../assets/photos/ceai.jpg";
import cioco from "../assets/photos/cioco.jpg";
import cocktails from "../assets/photos/cocktails.jpg";
import coffee from "../assets/photos/coffee.jpg";
import fresh from "../assets/photos/fresh.jpg";
import gustari from "../assets/photos/gustari.jpg";
import iceTea from "../assets/photos/iceTea.jpg";
import limonada from "../assets/photos/limonada.jpg";
import racoritoare from "../assets/photos/racoritoare.jpg";
import Category from "./Category";

function Meniu() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-screen bg-[#FFF8EA] p-4 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#FFF8EA]">
        <Category
          title="Cafea de specialitate"
          imgURL={coffee}
          items={CAFEA}
        />
        <Category
          title="Ceai de specialitate"
          imgURL={ceai}
          items={CEAI}
        />
        <Category
          title="Arome"
          imgURL={arome}
          items={AROME}
        />
        <Category
          title="Ciocolată caldă"
          imgURL={cioco}
          items={CIOCOLATA}
        />
        <Category
          title="Răcoritoare"
          imgURL={racoritoare}
          items={RACORITOARE}
        />
        <Category
          title="Ice Tea"
          imgURL={iceTea}
          items={ICE_TEA}
        />
        <Category
          title="Limonadă"
          imgURL={limonada}
          items={LIMONADA}
        />
        <Category
          title="Fresh"
          imgURL={fresh}
          items={FRESH}
        />
        <Category
          title="Bere & Vin"
          imgURL={bereVin}
          items={BERE_VIN}
        />
        <Category
          title="Cocktails"
          imgURL={cocktails}
          items={COCKTAILS}
        />
        <Category
          title="Gustări"
          imgURL={gustari}
          items={GUSTARI}
        />
      </div>
    </div>
  );
}

export default Meniu;
