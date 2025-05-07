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
import { Helmet } from "react-helmet-async";

function Meniu() {
  return (
    <>
      <Helmet>
        <title>Meniu Pet Cafe Oradea - Băuturi și Gustări</title>
        <meta name="description" content="Descoperă meniul Pet Cafe Oradea cu o varietate de cafea de specialitate, ceaiuri, limonade, cocktailuri și gustări delicioase, într-un ambient plăcut alături de animăluțe." />
        <meta name="keywords" content="Pet Cafe Oradea, meniu, cafea specialitate, ceai specialitate, limonada, cocktails, gustari, animal cafe" />
        <link rel="canonical" href="https://petcafeoradea.com/meniu" />
        <meta property="og:title" content="Meniu Pet Cafe Oradea" />
        <meta property="og:description" content="Descoperă varietatea de băuturi și gustări din meniul Pet Cafe Oradea - un loc special unde te poți relaxa alături de animăluțe." />
        <meta property="og:url" content="https://petcafeoradea.com/meniu" />
        <meta property="og:type" content="website" />
        <html lang="ro" />
      </Helmet>
      
      <div className="bg-[#FFF8EA]">
        <Banner />
        
        <h1 className="sr-only">Meniu Pet Cafe Oradea</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 bg-[#FFF8EA] mt-20 mb-20">
          {/* Cafea de specialitate */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Cafea de specialitate
              </h2>

              <img
                src={coffee}
                alt="cafea de specialitate"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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

          {/* Ceai de specialitate */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Ceai de specialitate
              </h2>

              <img
                src={ceai}
                alt="ceai de specialitate"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Arome
              </h2>

              <img
                src={arome}
                alt="arome"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Ice Tea
              </h2>

              <img
                src={iceTea}
                alt="ice tea"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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

          {/* Răcoritoare */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Răcoritoare
              </h2>

              <img
                src={racoritoare}
                alt="răcoritoare"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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


          {/* Limonadă */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Limonadă
              </h2>

              <img
                src={limonada}
                alt="limonadă"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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

          {/* Ciocolată caldă */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Ciocolată caldă
              </h2>

              <img
                src={cioco}
                alt="ciocolată caldă"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Fresh
              </h2>

              <img
                src={fresh}
                alt="fresh"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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

          {/* Bere */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Bere
              </h2>

              <img
                src={bere}
                alt="bere"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Cocktails
              </h2>

              <img
                src={cocktails}
                alt="cocktails"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
              />
            </div>

            {COCKTAILS.map((cocktail, index) => (
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
                    {cocktail.denumire}
                  </p>
                  {cocktail.gramaj && (
                    <span
                      className="italic font-normal text-base text-[#EF7F00]
                                  md:text-lg
                                  lg:text-xl
                                  xl:text-xl"
                    >
                      {cocktail.gramaj}
                    </span>
                  )}
                </div>
                <span
                  className="text-[#633404] font-semibold text-xl
                              md:text-2xl
                              lg:text-2xl"
                >
                  {cocktail.pret}
                </span>
              </div>
            ))}
          </div>

          {/* Vin */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Vin
              </h2>

              <img
                src={vin}
                alt="vin"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
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

          {/* Gustări */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Gustări
              </h2>

              <img
                src={gustari}
                alt="gustări"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
              />
            </div>

            {GUSTARI.map((gustare, index) => (
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
                    {gustare.denumire}
                  </p>
                  {gustare.gramaj && (
                    <span
                      className="italic font-normal text-base text-[#EF7F00]
                                  md:text-lg
                                  lg:text-xl
                                  xl:text-xl"
                    >
                      {gustare.gramaj}
                    </span>
                  )}
                </div>
                <span
                  className="text-[#633404] font-semibold text-xl
                              md:text-2xl
                              lg:text-2xl"
                >
                  {gustare.pret}
                </span>
              </div>
            ))}
          </div>

          {/* Extra */}
          <div className="relative flex flex-col p-4">
            <div className="relative flex justify-center items-center">
              <h2
                className="absolute flex justify-center items-center text-xl text-[#FEF2DA] font-bold bg-[#633404]/80 rounded-2xl p-3 w-4/5 max-w-full
                      sm:text-xl sm:p-3
                      md:text-4xl md:p-4
                      lg:text-3xl lg:p-4
                      xl:text-3xl xl:p-4"
                style={{ zIndex: 1 }}
              >
                Extra
              </h2>

              <img
                src={extras}
                alt="extra"
                width={700}
                height={300}
                className="rounded-3xl"
                loading="lazy"
              />
            </div>

            {EXTRA.map((extra, index) => (
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
                    {extra.denumire}
                  </p>
                  {extra.gramaj && (
                    <span
                      className="italic font-normal text-base text-[#EF7F00]
                                  md:text-lg
                                  lg:text-xl
                                  xl:text-xl"
                    >
                      {extra.gramaj}
                    </span>
                  )}
                </div>
                <span
                  className="text-[#633404] font-semibold text-xl
                              md:text-2xl
                              lg:text-2xl"
                >
                  {extra.pret}
                </span>
              </div>
            ))}
          </div>
          
        </div>
        
        <Footer />
      </div>
    </>
  );
}

export default Meniu;