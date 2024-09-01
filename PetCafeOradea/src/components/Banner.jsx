import { useLocation } from "react-router-dom";
import imageHome from "../assets/photos/ash.jpeg";
import imageMeniu from "../assets/photos/mira.jpeg";
import imageGalerie from "../assets/photos/kira.jpeg";
import imageContact from "../assets/photos/tiramisu.jpeg";
import { PiPawPrintFill } from "react-icons/pi";

function Banner() {
  const location = useLocation();

  let title;
  let cafe;
  let imgURL;
  let motto;
  let days;
  let hours;
  switch (location.pathname) {
    case "/":
      imgURL = imageHome;
      title = "Welcome to";
      cafe = "Pet Cafe";
      motto = (
        <>
          "Where <span className="text-[#EF7F00]">Paws</span> &{" "}
          <span className="text-[#EF7F00]">People</span> meet for a{" "}
          <span className="text-[#EF7F00]">Treat</span>!"
        </>
      );
      days = "Luni - Duminca";
      hours = "09:00 - 21:30";
      break;

    case "/meniu":
      imgURL = imageMeniu;
      title = "Welcome to Pet Cafe";
      motto = "Meniu";
      days = "Luni - Duminca";
      hours = "09:00 - 21:30";
      break;

    case "/galerie":
      imgURL = imageGalerie;
      title = "Welcome to Pet Cafe";
      motto = "Galerie";
      days = "Luni - Duminca";
      hours = "09:00 - 21:30";
      break;

    case "/contact":
      imgURL = imageContact;
      title = "Welcome to Pet Cafe";
      motto = "Contact";
      days = "Luni - Duminca";
      hours = "09:00 - 21:30";
      break;
  }

  return (
    <div className="relative w-full h-screen sm:mr-1">
      <img
        src={imgURL}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object cover scale-x-[-1]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute top-0 bottom-0 right-0 bg-[#633404]/50 text-[#FEF2DA] p-6 w-full sm:w-1/2 backdrop-blur-md"
          style={{ textShadow: "5px 6px 4px rgba(0, 0, 0, 0.6)" }}
        >
          <h1 className="text-5xl md:text-5xl lg:text-5xl sm:text-5xl font-bold mb-4 text-center mt-16 lg:mt-16 md:mt-32 sm:mt-16 ">
            {title}
          </h1>
          <div className="flex flex-row justify-center items-center gap-10 mt-8 lg:gap-5 md:gap-5 sm:gap-10">
            <PiPawPrintFill
              className="text-6xl lg:text-6xl sm:text-6xl md:text-4xl -mt-6 text-[#EF7F00]"
              style={{ transform: "rotate(340deg)" }}
            />
            <h1 className="text-5xl sm:text-5xl md:text-4xl lg:text-6xl font-bold mb-4 text-center">
              {cafe}
            </h1>
            <PiPawPrintFill
              className="text-6xl lg:text-6xl sm:text-6xl md:text-4xl -mt-6 text-[#EF7F00]"
              style={{ transform: "rotate(20deg)" }}
            />
          </div>
          <h2 className="text-4xl text-center mt-56 sm:mt-56 md:mt-80 lg:mt-36 leading-[50px]">
            {motto}
          </h2>
          <h2 className="text-2xl text-center mt-56 sm:mt-56 md:mt-80 lg:mt-40">
            {days}
          </h2>
          <h2 className="text-2xl text-center mb-10">{hours}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;
