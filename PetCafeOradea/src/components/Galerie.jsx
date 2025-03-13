import {
  Mira,
  Kira,
  Tiramisu,
  Ash,
  Misu,
  Baghera,
  Daisy,
  Chili,
  Wendy,
  Winnie,
} from "../constants/AnimalDescription";
import miraPhoto from "../assets/photos/mira/mira.jpg";
import kiraPhoto from "../assets/photos/kira/kira.jpg";
import tiramisuPhoto from "../assets/photos/tiramisu/tiramisu.jpg";
import ashPhoto from "../assets/photos/ash/ash.jpeg";
import misuPhoto from "../assets/photos/misu/misu.jpg";
import bagheraPhoto from "../assets/photos/baghera/baghera.jpg";
import daisyPhoto from "../assets/photos/daisy/daisy.jpeg";
import chiliPhoto from "../assets/photos/chili/chili.jpg";
import wendyPhoto from "../assets/photos/wendy/wendy.jpeg";
import winniePhoto from "../assets/photos/winnie/winnie.jpeg";
import Banner from "./Banner";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Galerie() {
  return (
    <div>
      <Helmet>
        <title>Galerie Animale de Companie | Adoptă un Prieten Loial</title>
        <meta name="description" content="Descoperă galeria noastră cu animale de companie disponibile pentru adopție. Fiecare animal are propria poveste și așteaptă cu nerăbdare să-și găsească o familie iubitoare." />
        <meta name="keywords" content="adopție animale, pisici, câini, animale de companie, adopție, salvare animale" />
        <link rel="canonical" href="https://petcafeoradea.com/galerie" />
        <meta property="og:title" content="Galerie Animale de Companie | Adoptă un Prieten Loial" />
        <meta property="og:description" content="Descoperă galeria noastră cu animale de companie disponibile pentru adopție. Fiecare animal are propria poveste și așteaptă cu nerăbdare să-și găsească o familie iubitoare." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://petcafeoradea.com/galerie" />
        <meta property="og:image" content="https://petcafeoradea.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Banner />
      <main>       
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 bg-[#FDF6EC]">
          {/* Mira */}
          {Mira.map((mira, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 mt-20 justify-center"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={miraPhoto}
                  alt={`${mira.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {mira.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {mira.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${mira.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${mira.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Kira */}
          {Kira.map((kira, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 md:mt-20"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={kiraPhoto}
                  alt={`${kira.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {kira.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {kira.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${kira.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${kira.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Tiramisu */}
          {Tiramisu.map((tiramisu, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 xl:mt-20"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={tiramisuPhoto}
                  alt={`${tiramisu.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {tiramisu.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {tiramisu.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${tiramisu.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${tiramisu.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Ash */}
          {Ash.map((ash, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={ashPhoto}
                  alt={`${ash.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {ash.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {ash.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${ash.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${ash.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Misu */}
          {Misu.map((misu, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={misuPhoto}
                  alt={`${misu.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {misu.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {misu.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${misu.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${misu.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Baghera */}
          {Baghera.map((baghera, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={bagheraPhoto}
                  alt={`${baghera.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {baghera.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {baghera.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${baghera.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${baghera.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Daisy */}
          {Daisy.map((daisy, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={daisyPhoto}
                  alt={`${daisy.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {daisy.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {daisy.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${daisy.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${daisy.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Chili */}
          {Chili.map((chili, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={chiliPhoto}
                  alt={`${chili.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {chili.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {chili.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${chili.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${chili.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Wendy */}
          {Wendy.map((wendy, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 md:mb-20 xl:mb-0"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={wendyPhoto}
                  alt={`${wendy.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {wendy.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {wendy.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${wendy.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${wendy.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}

          {/* Winnie */}
          {Winnie.map((winnie, index) => (
            <article
              key={index}
              className="relative flex flex-col bg-white rounded-3xl shadow-lg overflow-hidden p-6 transition-transform hover:scale-105 mb-20"
            >
              {/* Imaginea animalului */}
              <div className="relative flex justify-center items-center">
                <img
                  src={winniePhoto}
                  alt={`${winnie.animalTitle} - animal disponibil pentru adopție`}
                  className="w-full h-[300px] object-cover rounded-3xl md:h-[200px] lg:h-[300px]"
                  loading="lazy"
                />
                {/* Overlay pentru titlu */}
                <h2 className="absolute inset-0 flex justify-center items-center text-5xl md:text-3xl lg:text-4xl font-bold text-[#FDF6EC] bg-black/40 rounded-3xl p-4">
                  {winnie.animalTitle}
                </h2>
              </div>

              {/* Text descriptiv */}
              <div className="flex flex-col justify-between flex-grow mt-10">
                <p className="text-[#633404] font-normal text-lg xl:text-lg lg:text-2xl text-justify leading-relaxed">
                  {winnie.smallText}
                </p>
              </div>

              {/* Button */}
              <div className="mt-10 mx-auto">
                <Link to={`/animal/${winnie.animalTitle.toLowerCase()}`} aria-label={`Află mai multe despre ${winnie.animalTitle}`}>
                  <button
                    className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                    style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
                  >
                    Vezi mai multe &gt;
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Galerie;