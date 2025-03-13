import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { IoRemoveOutline } from "react-icons/io5";
import Footer from "./Footer";
import { Animals } from "../constants/AnimalsHomePage.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Pet Cafe Oradea - Cafenea cu animale pentru iubitorii de cafea și animale</title>
        <meta name="description" content="În inima Oradei, Pet Cafe Oradea este o oază de liniște și bucurie pentru iubitorii de animale și cafea. Vizitează-ne pentru a te relaxa cu o cafea în compania animalelor noastre prietenoase." />
        <meta name="keywords" content="pet cafe, pet cafe Oradea, cafe animale, cafenea pisici, cafenea câini, Oradea" />
        <link rel="canonical" href="https://petcafeoradea.com/" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            "name": "Pet Cafe Oradea",
            "description": "Cafenea prietenoasă cu animale în Oradea, unde te poți relaxa savurând o cafea în compania pisicilor și câinilor.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oradea",
              "addressRegion": "Bihor",
              "addressCountry": "Romania"
            },
            "image": {config.imgURL},
            "priceRange": "$$",
            "openingHours": "Lu-Du 10:00-22:00"
          }
        `}
        </script>
      </Helmet>
      <div className="bg-[#FFF8EA]">
        <Banner />

        {/* Despre noi component */}
        <div className="mt-20 mx-6 md:mt-16 lg:mt-20 lg:ml-20 z-50">
          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-center justify-center md:justify-items-center xl:-ml-16 lg:-ml-14">
              <h1 className="text-4xl md:text-4xl font-bold text-[#633404] text-center">
                Despre noi
              </h1>

              {/* Linia responsive sub titlu */}
              <div className="mt-2 md:mt-1 lg:mt-1">
                <IoRemoveOutline className="text-[#EF7F00] text-6xl md:text-7xl lg:text-8xl -mt-8 md:-mt-6 lg:-mt-10" />
              </div>
            </div>
          </div>
          <h2
            className="text-justify leading-relaxed md:leading-relaxed lg:leading-10 md:ml-6 lg:-ml-5 
          md:mr-6 lg:mr-8 xl:mr-8 text-lg md:text-3xl lg:text-3xl xl:text-2xl text-[#633404] font-medium "
          >
            În inima Oradei, <strong>Pet Cafe Oradea</strong> este o oază de liniște și bucurie
            pentru iubitorii de <em>animale și cafea</em>. Aici, într-o atmosferă caldă
            și primitoare, te poți relaxa savurând o cafea aromată, în timp ce
            te joci cu <em>prietenii blănoși</em> ai cafenelei. Decorul cozy și
            personalul prietenos te fac să te simți ca acasă, iar compania
            pisicilor și câinilor adaugă o notă de veselie și confort fiecărui
            moment petrecut aici.
          </h2>

          {/* Realizarea butonului */}
          <div className="flex justify-center items-center">
            <Link to="/contact" aria-label="Contactează-ne pentru mai multe informații">
              <button
                className="flex flex-row mt-10 bg-[#EF7F00] items-center justify-center p-4 rounded-full 
              border-4 border-white pl-6 pr-5 pt-3 pb-3 md:pl-10 md:pr-8 text-lg md:text-3xl xl:-ml-16 lg:-ml-[60px] text-white font-bold 
              transition-all duration-300 ease-in-out transform hover:bg-[#D96E00] hover:scale-105"
                style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
              >
                Mai multe &gt;
              </button>
            </Link>
          </div>
        </div>

        {/* Animalutele noastre component */}
        <div
          className="mt-14 mx-6 md:mt-16 lg:mt-32 bg-gradient-to-b from-[#FFF8EA] via-[#EF7F00] to-[#EF7F00] p-10 rounded-lg shadow-lg"
          style={{ boxShadow: "2px 8px 25px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex flex-col items-center md:items-center">
            <div className="flex flex-col items-center justify-center md:justify-items-center">
              <h2 className="text-4xl md:text-4xl font-bold text-[#633404] text-center">
                Animăluțele Noastre
              </h2>

              {/* Linia responsive sub titlu */}
              <div className="mt-2 md:mt-1 lg:mt-1">
                <IoRemoveOutline className="text-[#EF7F00] text-6xl md:text-7xl lg:text-8xl -mt-8 md:-mt-6 lg:-mt-10" />
              </div>
            </div>

            {/* Afisarea animalelor pe rand care au fost salvate intr-o constanta */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-24 md:gap-x-16 lg:gap-x-28 xl:gap-x-16 gap-y-8 md:gap-y-12 justify-items-center mx-auto mt-10 max-w-screen-xl px-4 lg:px-8">
              {Animals.map((animal, index) => (
                <Link
                  to={`/animal/${animal?.denumire?.toLowerCase() || ""}`}
                  key={index}
                  aria-label={`Vizitează pagina lui ${animal.denumire}, animal de companie la Pet Cafe Oradea`}
                >
                  <div key={index} className="flex flex-col items-center group">
                    <div
                      className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden 
                    transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 
                    group-hover:shadow-2xl group-hover:shadow-[#FFF8EA]"
                    >
                      <img
                        src={animal.imagine}
                        alt={`${animal.denumire} - animal de companie la Pet Cafe Oradea`}
                        className="w-full h-full object-cover rounded-full transition-transform 
                        duration-700 ease-out group-hover:scale-125 group-hover:rotate-6"
                        loading="lazy"
                      />
                    </div>
                    <h3
                      className="mt-2 mb-6 text-xl md:text-2xl font-semibold transition-transform 
                    duration-300 ease-in-out group-hover:scale-110 group-hover:text-[#633404]"
                    >
                      {animal.denumire}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Butonul de Galerie */}
        <div className="flex justify-center items-center">
          <Link to="/galerie" aria-label="Vizitează galeria noastră de imagini cu animale">
            <button
              className="flex flex-row mx-auto -my-8 bg-[#EF7F00] items-center justify-center p-4 
              rounded-full border-4 border-white pt-3 pb-3 md:pl-8 md:pr-8 text-lg md:text-3xl text-white font-bold 
              transition-all duration-300 ease-in-out transform hover:bg-[#D96E00] hover:scale-105"
              style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
            >
              Galerie &gt;
            </button>
          </Link>
        </div>

        {/* Regulament component */}
        <div className="mt-24 mx-6 md:mt-32 lg:mt-32">
          <div className="flex flex-col items-center md:items-center md:ml-6 xl:ml-24">
            <div className="flex flex-col items-center justify-center xl:-ml-24 lg:-ml-6">
              <h2 className="text-4xl md:text-4xl font-bold text-[#633404] text-center">
                Regulament
              </h2>

              {/* Linia responsive sub titlu */}
              <div className="mt-2 md:mt-1 lg:mt-1">
                <IoRemoveOutline className="text-[#EF7F00] text-6xl md:text-7xl lg:text-8xl -mt-8 md:-mt-6 lg:-mt-10" />
              </div>
            </div>
            <ul
              className="flex flex-col gap-6 mt-6 mb-20 text-[#633404] list-inside text-justify md:mr-6 lg:mr-10 lg:ml-6
            xl:mr-10 xl:-ml-14 text-lg md:text-3xl lg:text-3xl xl:text-2xl leading-7 md:leading-relaxed lg:leading-10 sm:leading-6 list-none"
            >
              <li>
                &bull; Atunci când un animal doarme, vă rugăm să nu îl treziți,
                e mai bine să îl lăsați să-și facă somnul de frumusețe!
              </li>
              <li>
                &bull; De asemenea, vă rugăm să nu luați animăluțele în brațe,
                în schimb să le lăsați pe ele să vină la voi!
              </li>
              <li>
                &bull; În cazul în care doriți să luați un animal în brațe,
                puteți chema o persoană din staff!
              </li>
              <li>
                &bull; Vă rugăm să nu stresați animalele, să nu le trageți de
                coadă sau de urechi, să nu le prindeți de bot, să nu faceți
                zgomot puternic lângă ele!
              </li>
              <li>
                &bull; Puteți face câte poze doriți cu ele, însă vă rugăm să fie
                fără bliț! (de asemenea, acceptăm orice poze făcute împreună cu
                animalele, pe pagina noastră de instagram)
              </li>
              <li>
                &bull; Copiii sub vârsta de 14 ani trebuie să fie supravegheați
                tot timpul de un adult, să nu alerge și să nu bruscheze
                animalele!
              </li>
              <li>
                &bull; Animăluțele noastre sunt obișnuite cu o anumită hrană,
                așa că vă rugăm să nu le oferiți un alt fel de mâncare și nici
                să nu le lăsați să bea din băutura voastră!
              </li>
              <li>
                &bull; Atât cățelușii cât și pisicuțele lasă păr, e inevitabil,
                așa că vă punem la dispoziție role pentru a vă curăța!
              </li>
              <li>
                &bull; Dacă observați pe cineva care încalcă una sau mai multe
                reguli menționate mai sus privind animalele noastre, vă rugăm să
                luați atitudine, fie anunțând personalul Pet Cafe, fie prin
                atragerea atenției persoanei care face asta!
              </li>
              <li>
                &bull; Oaspeții noștri sunt direct răspunzători pentru orice
                inconveniență legată de animale (animalele noastre sunt foarte
                blânde și jucăușe, iar zgârieturile sau mușcăturile sunt
                posibile doar în cazul în care sunt provocate)
              </li>
              <li>
                &bull; Consumația este obligatorie pentru fiecare persoană,
                inclusiv copiii cu vărsta de peste 7 ani!
              </li>
              <li>
                &bull; Animalele nu sunt ca oamenii, așa că e firesc să își facă
                nevoile în diferite locuri, iar dacă observați asta, vă rugăm să
                anunțați personalul Pet Cafe!
              </li>
              <li>
                &bull; Ne rezervăm dreptul de a ne selecta clientela. Toți
                iubitorii de animale sunt bineveniți!
              </li>

              <li>
                <strong className="underline text-xl xl:text-2xl lg:text-3xl">
                  Pentru siguranța animalelor noastre vă rugăm să țineți ușa
                  închisă pe toată perioada șederii!
                </strong>
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;