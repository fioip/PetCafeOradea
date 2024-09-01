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

function Meniu() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-screen bg-[#FFF8EA] p-4 overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#FFF8EA]">
        {/* Category 1: Cafea de specialitate */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Cafea de specialitate
          </h1>
          <img
            src={coffee}
            alt="cafea"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />

          {CAFEA.map((cafea, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{cafea.denumire}</p>
              <span className="text-[#633404] font-bold">{cafea.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 2: Ceai de specialitate */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Ceai de specialitate
          </h1>
          <img
            src={ceai}
            alt="ceai"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {CEAI.map((ceai, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{ceai.denumire}</p>
              <span className="text-[#633404] font-bold">{ceai.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 3: Arome */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Arome
          </h1>
          <img
            src={arome}
            alt="arome"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {AROME.map((arome, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{arome.denumire}</p>
              <span className="text-[#633404] font-bold">{arome.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 4: Ciocolata calda */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Ciocolată caldă
          </h1>
          <img
            src={cioco}
            alt="ciocolata calda"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {CIOCOLATA.map((ciocolata, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{ciocolata.denumire}</p>
              <span className="text-[#633404] font-bold">{ciocolata.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 5: Racoritoare */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Răcoritoare
          </h1>
          <img
            src={racoritoare}
            alt="racoritoare"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {RACORITOARE.map((racoritoare, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">
                {racoritoare.denumire}
              </p>
              <span className="text-[#633404] font-bold">
                {racoritoare.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Category 6: Ice Tea */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Ice Tea
          </h1>
          <img
            src={iceTea}
            alt="ice tea"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {ICE_TEA.map((iceTea, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{iceTea.denumire}</p>
              <span className="text-[#633404] font-bold">{iceTea.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 7: Limonada */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Limonadă
          </h1>
          <img
            src={limonada}
            alt="limonada"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {LIMONADA.map((limonada, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{limonada.denumire}</p>
              <span className="text-[#633404] font-bold">{limonada.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 8: Fresh */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Fresh
          </h1>
          <img
            src={fresh}
            alt="fresh"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {FRESH.map((fresh, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{fresh.denumire}</p>
              <span className="text-[#633404] font-bold">{fresh.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 9: Bere si vin */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Bere & Vin
          </h1>
          <img
            src={bereVin}
            alt="bere & vin"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {BERE_VIN.map((bereVin, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{bereVin.denumire}</p>
              <span className="text-[#633404] font-bold">{bereVin.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 10: Cocktails */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Cocktails
          </h1>
          <img
            src={cocktails}
            alt="cocktails"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {COCKTAILS.map((cocktails, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{cocktails.denumire}</p>
              <span className="text-[#633404] font-bold">{cocktails.pret}</span>
            </div>
          ))}
        </div>

        {/* Category 11: Gustari */}
        <div className="relative flex flex-col p-4">
          <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
            Gustări
          </h1>
          <img
            src={gustari}
            alt="gustari"
            width={700}
            height={300}
            className="rounded-3xl mt-12"
          />
          {GUSTARI.map((gustari, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-4"
            >
              <p className="text-[#633404] font-normal">{gustari.denumire}</p>
              <span className="text-[#633404] font-bold">{gustari.pret}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meniu;
