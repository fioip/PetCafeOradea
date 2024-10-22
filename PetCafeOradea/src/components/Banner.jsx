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
  let weekendDays;
  let hours;
  let weekendHours;
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
      days = "Luni - Vineri";
      hours = "07:00 - 21:30";
      weekendDays = "Sâmbătă - Duminică";
      weekendHours = "10:00 - 21:30";
      break;

    case "/meniu":
      imgURL = imageMeniu;
      title = "Welcome to";
      cafe = "Pet Cafe";
      motto = "Meniu";
      days = "Luni - Vineri";
      hours = "07:00 - 21:30";
      weekendDays = "Sâmbătă - Duminică";
      weekendHours = "10:00 - 21:30";
      break;

    case "/galerie":
      imgURL = imageGalerie;
      title = "Welcome to";
      cafe = "Pet Cafe";
      motto = "Galerie";
      days = "Luni - Vineri";
      hours = "07:00 - 21:30";
      weekendDays = "Sâmbătă - Duminică";
      weekendHours = "10:00 - 21:30";
      break;

    case "/contact":
      imgURL = imageContact;
      title = "Welcome to";
      cafe = "Pet Cafe";
      motto = "Contact";
      days = "Luni - Vineri";
      hours = "07:00 - 21:30";
      weekendDays = "Sâmbătă - Duminică";
      weekendHours = "10:00 - 21:30";
      break;

    case "/galerie/mira":
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
      days = "Luni - Vineri";
      hours = "07:00 - 21:30";
      weekendDays = "Sâmbătă - Duminică";
      weekendHours = "10:00 - 21:30";
      break;
  }

  return (
    <div className="relative w-full h-screen sm:mr-1">
      <img
        src={imgURL}
        alt="Banner"
        className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1] xl:w-1/2"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute top-0 bottom-0 right-0 bg-[#633404]/90 text-[#FEF2DA] p-6 w-full sm:w-1/2 backdrop-blur-md flex flex-col justify-between
           lg:backdrop-blur-lg lg:shadow-2xl"
          style={{ textShadow: "4px 4px 9px rgba(0, 0, 0, 1)" }}
        >
          <div className="mt-12 md:-mt-8">
            <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-center mt-[40px] sm:mt-[60px]">
              {title}
            </h1>
            <div className="flex flex-row justify-center items-center gap-4 mt-8">
              <PiPawPrintFill
                className="text-5xl sm:text-4xl md:text-4xl lg:text-6xl text-[#EF7F00]"
                style={{ transform: "rotate(340deg)" }}
              />
              <h1 className="text-[40px] sm:text-4xl md:text-[33px] lg:text-6xl font-bold text-center">
                {cafe}
              </h1>
              <PiPawPrintFill
                className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl text-[#EF7F00]"
                style={{ transform: "rotate(20deg)" }}
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center ">
            <h2 className="text-4xl lg:text-5xl xl:text-4xl text-center leading-[50px] lg:leading-[70px] xl:leading-[50px]">{motto}</h2>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="text-center mt-auto mb-[20px] mr-20">
              {/* Afișare pe desktop-uri */}
              <h2 className="text-2xl hidden xl:block">{days}</h2>
              <h2 className="text-2xl hidden xl:block">{hours}</h2>

              {/* Afișare pe tablete mari */}
              <div className="hidden md:flex md:flex-col md:items-center xl:hidden lg:gap-3 xl:gap-0">
                <h2 className="text-2xl lg:text-3xl xl:text-2xl">
                  {days
                    .split(" ")
                    .map((day) => day[0])
                    .join(" ")}
                </h2>
                <div className="text-2xl flex flex-col items-center ">
                  <h2 className="text-xl lg:text-3xl xl:text-xl">07:00</h2>
                  <span className="text-xl lg:text-3xl xl:text-xl">-</span>
                  <h2 className="text-xl lg:text-3xl xl:text-xl">21:30</h2>
                </div>
              </div>

              {/* Afișare pe mobile */}
              <div className="xl:hidden md:hidden flex flex-col items-center">
                <h2 className="text-2xl ">
                  {days
                    .split(" ")
                    .map((day) => day[0])
                    .join("  ")}
                </h2>
                <h2 className="text-[18px]">{hours}</h2>
              </div>
            </div>

            <div className="text-center mt-auto mb-[20px]">
              {/* Afișare pe desktop-uri */}
              <h2 className="text-2xl hidden xl:block">{weekendDays}</h2>
              <h2 className="text-2xl hidden xl:block">{weekendHours}</h2>

              {/* Afișare pe tablete mari */}
              <div className="hidden md:flex md:flex-col md:items-center xl:hidden lg:gap-3 xl:gap-0">
                <h2 className="text-2xl lg:text-3xl xl:text-xl">
                  {weekendDays
                    .split(" ")
                    .map((day) => day[0])
                    .join(" ")}
                </h2>
                <div className="text-2xl flex flex-col items-center">
                  <h2 className="text-xl lg:text-3xl xl:text-xl">10:00</h2>
                  <span className="text-xl lg:text-3xl xl:text-xl">-</span>
                  <h2 className="text-xl lg:text-3xl xl:text-xl">21:30</h2>
                </div>
              </div>

              {/* Afișare pe mobile */}
              <div className="xl:hidden md:hidden flex flex-col items-center">
                <h2 className="text-2xl">
                  {weekendDays
                    .split(" ")
                    .map((day) => day[0])
                    .join("  ")}
                </h2>
                <h2 className="text-[18px]">{weekendHours}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
