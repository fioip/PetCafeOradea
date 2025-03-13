import Banner from "./Banner";
import Footer from "./Footer";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      {/* SEO Meta Tags - acestea nu afectează layout-ul */}
      <Helmet>
        <title>Contact Pet Cafe Oradea | Cafenea cu Animale de Companie</title>
        <meta name="description" content="Contactează Pet Cafe Oradea - prima cafenea cu animale din Oradea. Telefon, email, adresă și rețele sociale pentru a ne vizita sau a afla mai multe despre noi." />
        <meta name="keywords" content="Pet Cafe Oradea, contact pet cafe, cafenea cu animale Oradea, cat cafe Oradea, dog cafe, locație Pet Cafe" />
        <link rel="canonical" href="https://petcafeoradea.com/contact" />
      </Helmet>

      <div>
        <div className="bg-[#FFF8EA]">
          <Banner />

          <div className="flex flex-col items-center mt-20">
            <div className="bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl relative overflow-hidden lg:max-w-5xl xl:max-w-6xl mt-10 flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-14 justify-center items-start mt-16">
                {/* Phone Section */}
                <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6">
                  <FaPhone className="text-[#633404] text-6xl lg:text-7xl" />
                  <p className="border-b-4 border-[#EF7F00] pb-4 md:text-3xl text-2xl lg:text-3xl xl:text-4xl font-medium text-[#633404]">
                    Telefon
                  </p>
                  <a href="tel:0773747056" className="font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#EF7F00]">
                    0773 747 056
                  </a>
                </div>

                {/* Email Section */}
                <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6">
                  <IoMdMail className="text-[#633404] text-6xl lg:text-7xl" />
                  <p className="border-b-4 border-[#EF7F00] pb-4 md:text-3xl text-2xl lg:text-3xl xl:text-4xl font-medium text-[#633404]">
                    Mail
                  </p>
                  <a href="mailto:pet.cafe@yahoo.com" className="font-semibold text-2xl md:text-[23px] lg:text-2xl xl:text-3xl text-[#EF7F00]">
                    pet.cafe@yahoo.com
                  </a>
                </div>

                {/* Location Section */}
                <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6">
                  <FaLocationDot className="text-[#633404] text-6xl lg:text-7xl" />
                  <p className="border-b-4 border-[#EF7F00] pb-4 md:text-3xl text-2xl lg:text-3xl xl:text-4xl font-medium text-[#633404]">
                    Locație
                  </p>
                  <a href="https://maps.google.com/maps?q=Pet%20Cafe,%20Piața%201%20Decembrie%20Nr.%2012,%20Oradea" target="_blank" rel="noopener noreferrer" className="font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#EF7F00] flex flex-col text-center">
                    Piața 1 Decembrie
                    <span>Nr. 12, Oradea</span>
                  </a>
                </div>

                {/* Instagram Section */}
                <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6">
                  <FaInstagram className="text-[#633404] text-6xl lg:text-7xl" />
                  <p className="border-b-4 border-[#EF7F00] pb-4 md:text-3xl text-2xl lg:text-3xl xl:text-4xl font-medium text-[#633404]">
                    Instagram
                  </p>
                  <Link
                    to="https://www.instagram.com/petcafeoradea/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="font-semibold underline text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#EF7F00] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
                      petcafeoradea
                    </p>
                  </Link>
                </div>

                {/* Facebook Section */}
                <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6">
                  <FaFacebook className="text-[#633404] text-6xl lg:text-7xl" />
                  <p className="border-b-4 border-[#EF7F00] pb-4 md:text-3xl text-2xl lg:text-3xl xl:text-4xl font-medium text-[#633404]">
                    Facebook
                  </p>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61561317749365"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="font-semibold underline text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#EF7F00] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
                      Pet Cafe Oradea
                    </p>
                  </Link>
                </div>

                {/* Tik Tok Section */}
                <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6">
                  <FaTiktok className="text-[#633404] text-6xl lg:text-7xl" />
                  <p className="border-b-4 border-[#EF7F00] pb-4 md:text-3xl text-2xl lg:text-3xl xl:text-4xl font-medium text-[#633404]">
                    Tik Tok
                  </p>
                  <Link
                    to="https://www.tiktok.com/@petcafeoradea"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="font-semibold underline text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-[#EF7F00] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
                      petcafeoradea
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cafe description */}
          <div className="mt-12">
            <h2
              className="text-justify leading-relaxed md:leading-relaxed lg:leading-10 ml-6 lg:ml-8 xl:ml-8
              mr-6 lg:mr-8 xl:mr-8 text-lg md:text-3xl lg:text-3xl xl:text-2xl text-[#633404] font-medium "
            >
              Pet Cafe este un concept nou în Oradea, inspirat din cultura
              asiatică, unde animalele sunt considerate parte din familie. În
              localul nostru puteți savura diferite băuturi pe bază de cafea dar
              nu numai, alături bineînțeles de patrupezi foarte gingași și
              prietenoși. Cafeneaua noastră are două zone predestinate consumului,
              una dintre ele fiind împânzită de cățeluși simpatici și energici,
              iar a doua zonă este păzită de feline blănoase și jucăușe. Orice
              client e liber să aleagă în care zonă dorește să se așeze, urmând
              să-i fie aduse la cunoștință regulile de ordine interioară legate de
              animăluțe, aceste reguli aflându-se pe fiecare masă pentru ca orice
              client să fie informat legat de acestea. Odată ce pășești în
              interior, te întâmpină o atmosferă caldă și primitoare, unde decorul
              cozy, cu mobilier confortabil și detalii prietenoase, te face să te
              simți imediat ca acasă. Luminile moi și muzica de fundal adaugă o
              notă de intimitate, invitându-te să te așezi și să te bucuri de
              momentele petrecute aici. Personalul dedicat și prietenos este mereu
              gata să te ajute să alegi cea mai bună cafea dintr-o selecție
              variată de băuturi, de la espresso-uri intense la latte-uri
              cremoase. Fiecare ceașcă de cafea este preparată cu grijă, astfel
              încât fiecare înghițitură să fie o explozie de arome, perfectă
              pentru a însoți momentele de joacă și interacțiune cu prietenii
              blănoși ai cafenelei.
            </h2>
          </div>

          {/* Google Maps iframe */}
          <div className="w-full mt-10 mb-10 flex justify-center px-4 md:px-8 lg:px-0">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mb-20">
              <iframe
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ro&amp;q=Pet%20Cafe,%20Piața%201%20Decembrie%20Nr.%2012,%20Oradea,%20%20Bihor+(Pet%20Cafe)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația Pet Cafe Oradea pe Google Maps"
              ></iframe>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;