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
          Where <span className="text-[#EF7F00]">Paws</span> &{" "}
          <span className="text-[#EF7F00]">People</span> meet for a{" "}
          <span className="text-[#EF7F00]">Treat</span>!
        </>
      );
      days = "Luni - Dumincă";
      hours = "09:00 - 21:30";
      break;

    case "/meniu":
      imgURL = imageMeniu;
      title = "Welcome to Pet Cafe";
      motto = "Meniu";
      days = "Luni - Dumincă";
      hours = "09:00 - 21:30";
      break;

    case "/galerie":
      imgURL = imageGalerie;
      title = "Welcome to Pet Cafe";
      motto = "Galerie";
      days = "Luni - Dumincă";
      hours = "09:00 - 21:30";
      break;

    case "/contact":
      imgURL = imageContact;
      title = "Welcome to Pet Cafe";
      motto = "Contact";
      days = "Luni - Dumincă";
      hours = "09:00 - 21:30";
      break;
  }

  return (
    <div className="relative w-full h-screen sm:mr-1">
      <img
        src={imgURL}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1] lg:w-1/2"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute top-0 bottom-0 right-0 bg-[#633404]/90 text-[#FEF2DA] p-6 w-full sm:w-1/2 backdrop-blur-md flex flex-col justify-between
           lg:backdrop-blur-lg lg:shadow-2xl"
          style={{ textShadow: "4px 4px 9px rgba(0, 0, 0, 1)" }}
        >
          <h1 className="text-5xl font-bold text-center mt-[40px] sm:mt-[60px]">
            {title}
          </h1>
          <div className="flex flex-row justify-center items-center gap-4 mt-8">
            <PiPawPrintFill
              className="text-6xl sm:text-6xl md:text-4xl lg:text-6xl text-[#EF7F00]"
              style={{ transform: "rotate(340deg)" }}
            />
            <h1 className="text-5xl sm:text-5xl md:text-4xl lg:text-6xl font-bold text-center">
              {cafe}
            </h1>
            <PiPawPrintFill
              className="text-6xl sm:text-6xl md:text-4xl lg:text-6xl text-[#EF7F00]"
              style={{ transform: "rotate(20deg)" }}
            />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <h2 className="text-4xl text-center leading-[50px]">
              {motto}
            </h2>
          </div>
          <div className="text-center mt-auto mb-[20px]">
            <h2 className="text-2xl">{days}</h2>
            <h2 className="text-2xl">{hours}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
