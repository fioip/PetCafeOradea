import Banner from "./Banner";

import Footer from "./Footer";

import { FaPhone } from "react-icons/fa6";

import { IoMdMail } from "react-icons/io";

import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-screen">
      <Banner />

      <div>
        <div className="flex flex-row space-x-52 justify-center items-center">
          <div className="flex flex-col mt-10 ml-10 justify-center items-center space-y-4">
            <FaPhone className="text-[#633404] text-6xl" />

            <p className="border-b-4 border-[#EF7F00] pb-4 lg:text-3xl font-medium text-[#633404]">
              Telefon
            </p>

            <p className="font-semibold text-2xl text-[#EF7F00]">
              0712 123 123
            </p>
          </div>

          <div className="flex flex-col mt-10 ml-10 justify-center items-center space-y-4">
            <IoMdMail className="text-[#633404] text-6xl" />

            <p className="border-b-4 border-[#EF7F00] pb-4 lg:text-3xl font-medium text-[#633404]">
              Mail
            </p>

            <p className="font-semibold text-2xl text-[#EF7F00]">
              pet.cafe@yahoo.com
            </p>
          </div>

          <div className="flex flex-col mt-10 ml-10 justify-center items-center space-y-4">
            <FaLocationDot className="text-[#633404] text-6xl" />

            <p className="border-b-4 border-[#EF7F00] pb-4 lg:text-3xl font-medium text-[#633404]">
              Locație
            </p>

            <p className="font-semibold text-2xl text-[#EF7F00] flex flex-col text-center">
              Piața 1 Decembrie
              <span>Nr. 12, Oradea</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 mb-10">
        <iframe
          className="w-full h-[500px] "
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pet%20Cafe,%20Oradea,%20%20Bihor+(Pet%20Cafe)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
