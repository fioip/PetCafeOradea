import {
  Mira,
  Kira,
  Tiramisu,
  Ash,
  Plawan,
  Baghera,
  Daisy,
  Chilli,
  Wendy,
  Winnie,
} from "../constants/AnimalDescription";
import miraPhoto from "../assets/photos/mira.jpeg";
import kiraPhoto from "../assets/photos/kira.jpeg";
import tiramisuPhoto from "../assets/photos/tiramisu.jpeg";
import ashPhoto from "../assets/photos/ash.jpeg";
import bagheraPhoto from "../assets/photos/baghera.jpeg";
import daisyPhoto from "../assets/photos/daisy.jpeg";
import chilliPhoto from "../assets/photos/chilli.jpeg";
import wendyPhoto from "../assets/photos/wendy.jpeg";
import winniePhoto from "../assets/photos/winnie.jpeg";
import Banner from "./Banner";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Galerie() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%]">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 bg-[#FDF6EC] ">
        {/* Mira */}
        {Mira.map((mira, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 mt-20 justify-center"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={miraPhoto}
                alt={mira.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {mira.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {mira.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${mira.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Kira */}
        {Kira.map((kira, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 md:mt-20"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={kiraPhoto}
                alt={kira.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {kira.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {kira.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${kira.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Tiramisu */}
        {Tiramisu.map((tiramisu, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 xl:mt-20"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={tiramisuPhoto}
                alt={tiramisu.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {tiramisu.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {tiramisu.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${tiramisu.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Ash */}
        {Ash.map((ash, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={ashPhoto}
                alt={ash.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {ash.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {ash.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${ash.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Plawan */}
        {Plawan.map((plawan, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={miraPhoto}
                alt={plawan.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {plawan.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {plawan.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${plawan.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Baghera */}
        {Baghera.map((baghera, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={bagheraPhoto}
                alt={baghera.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {baghera.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {baghera.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${baghera.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Daisy */}
        {Daisy.map((daisy, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={daisyPhoto}
                alt={daisy.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {daisy.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {daisy.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${daisy.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Chilli */}
        {Chilli.map((chilli, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={chilliPhoto}
                alt={chilli.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {chilli.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {chilli.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${chilli.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Wendy */}
        {Wendy.map((wendy, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 md:mb-20 xl:mb-0"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={wendyPhoto}
                alt={wendy.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {wendy.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-grow mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {wendy.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${wendy.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Winnie */}
        {Winnie.map((winnie, index) => (
          <div
            key={index}
            className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 mb-20"
          >
            {/* Imaginea animalului */}
            <div className="relative flex justify-center items-center">
              <img
                src={winniePhoto}
                alt={winnie.animalTitle}
                className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
              />
              {/* Overlay pentru titlu */}
              <h1 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                {winnie.animalTitle}
              </h1>
            </div>

            {/* Text descriptiv */}
            <div className="flex flex-col justify-between flex-growmt-10 mt-10">
              <p className="text-[#633404] font-normal text-lg text-justify leading-relaxed">
                {winnie.smallText}
              </p>
            </div>

            {/* Button */}
            <div className="mt-10 mx-auto">
              <Link to={`/animal/${winnie.animalTitle.toLowerCase()}`}>
                <button
                  className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                >
                  Vezi mai multe &gt;
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Galerie;
