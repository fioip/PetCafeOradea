import {
  AROME,
  BERE,
  CAFEA,
  CEAI,
  CIOCOLATA,
  COCKTAILS,
  EXTRA,
  FRESH,
  GUSTARI,
  ICE_TEA,
  LIMONADA,
  RACORITOARE,
  VIN,
} from "../constants/MenuItems";
import arome from "../assets/photos/arome.jpg";
import ceai from "../assets/photos/ceai.jpg";
import cioco from "../assets/photos/cioco.jpg";
import cocktails from "../assets/photos/cocktails.jpg";
import coffee from "../assets/photos/coffee.jpg";
import fresh from "../assets/photos/fresh.jpg";
import gustari from "../assets/photos/gustari.jpg";
import iceTea from "../assets/photos/iceTea.jpg";
import limonada from "../assets/photos/limonada.jpg";
import racoritoare from "../assets/photos/racoritoare.jpg";
import bere from "../assets/photos/beer.jpg";
import extras from "../assets/photos/milk.jpg";
import vin from "../assets/photos/wine.jpg";

import Banner from "./Banner";
import Footer from "./Footer";

function Meniu() {
  return (
    <div className="bg-[#FFF8EA] overflow-auto">
      <div>
        <Banner />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 bg-[#FFF8EA] mt-20 mb-20">
        {/*Cafea de specialitate */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                    sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Cafea de specialitate
            </h1>

            <img
              src={coffee}
              alt="cafea"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {CAFEA.map((cafea, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {cafea.denumire}
                </p>
                {cafea.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {cafea.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {cafea.pret}
              </span>
            </div>
          ))}
        </div>

        {/*  Ceai de specialitate */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                 sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Ceai de specialitate
            </h1>

            <img
              src={ceai}
              alt="ceai"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {CEAI.map((ceai, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {ceai.denumire}
                </p>
                {ceai.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {ceai.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {ceai.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Arome */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                  sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Arome
            </h1>

            <img
              src={arome}
              alt="arome"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {AROME.map((arome, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {arome.denumire}
                </p>
                {arome.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {arome.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {arome.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Ice Tea */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Ice Tea
            </h1>

            <img
              src={iceTea}
              alt="iceTea"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {ICE_TEA.map((iceTea, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {iceTea.denumire}
                </p>
                {iceTea.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {iceTea.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {iceTea.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Racoritoare */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Răcoritoare
            </h1>

            <img
              src={racoritoare}
              alt="racoritoare"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {RACORITOARE.map((racoritoare, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {racoritoare.denumire}
                </p>
                {racoritoare.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {racoritoare.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {racoritoare.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Limonada */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Limonadă
            </h1>

            <img
              src={limonada}
              alt="limonada"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {LIMONADA.map((limonada, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {limonada.denumire}
                </p>
                {limonada.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {limonada.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {limonada.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Ciocolata calda */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Ciocolată Caldă
            </h1>

            <img
              src={cioco}
              alt="ciocolata calda"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {CIOCOLATA.map((ciocolata, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {ciocolata.denumire}
                </p>
                {ciocolata.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {ciocolata.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {ciocolata.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Fresh */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Fresh
            </h1>

            <img
              src={fresh}
              alt="fresh"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {FRESH.map((fresh, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {fresh.denumire}
                </p>
                {fresh.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {fresh.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {fresh.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Bere*/}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Bere
            </h1>

            <img
              src={bere}
              alt="bere"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {BERE.map((bere, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {bere.denumire}
                </p>
                {bere.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {bere.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {bere.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Cocktails */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Cocktails
            </h1>

            <img
              src={cocktails}
              alt="cocktails"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {COCKTAILS.map((cocktails, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6 items-start"
            >
              <div className="max-w-[80%]">
                {" "}
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {cocktails.denumire}
                </p>
                {cocktails.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {cocktails.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl
                            whitespace-nowrap ml-4"
              >
                {cocktails.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Vin */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Vin
            </h1>

            <img
              src={vin}
              alt="vin"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {VIN.map((vin, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {vin.denumire}
                </p>
                {vin.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {vin.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {vin.pret}
              </span>
            </div>
          ))}
        </div>

        {/* Gustari */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Gustări
            </h1>

            <img
              src={gustari}
              alt="gustari"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {GUSTARI.map((gustari, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {gustari.denumire}
                </p>
                {gustari.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {gustari.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {gustari.pret}
              </span>
            </div>
          ))}
        </div>

        {/* EXTRA */}
        <div className="relative flex flex-col p-4">
          <div className="relative flex justify-center items-center">
            <h1
              className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                sm:text-xl sm:p-3
                    md:text-4xl md:p-4
                    lg:text-3xl lg:p-4
                    xl:text-3xl xl:p-4"
              style={{ zIndex: 1 }}
            >
              Extra
            </h1>

            <img
              src={extras}
              alt="extras"
              width={700}
              height={300}
              className="rounded-3xl"
            />
          </div>

          {EXTRA.map((extras, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between mt-6"
            >
              <div>
                <p
                  className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
                >
                  {extras.denumire}
                </p>
                {extras.gramaj && (
                  <span
                    className="italic font-normal text-base text-[#EF7F00]
                                md:text-lg
                                lg:text-xl
                                xl:text-xl"
                  >
                    {extras.gramaj}
                  </span>
                )}
              </div>
              <span
                className="text-[#633404] font-semibold text-xl
                            md:text-2xl
                            lg:text-2xl"
              >
                {extras.pret}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Meniu;
