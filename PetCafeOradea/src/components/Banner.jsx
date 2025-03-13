import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import imageHome from "../assets/photos/ash/ash.jpeg";
import imageMeniu from "../assets/photos/chili/chili13.jpg";
import imageGalerie from "../assets/photos/galerie.jpg";
import imageContact from "../assets/photos/misu/misu1.jpg";
import { PiPawPrintFill } from "react-icons/pi";

const Banner = () => {
  const location = useLocation();

  const getPageConfig = () => {
    const baseConfig = {
      title: "Welcome to",
      cafe: "Pet Cafe",
      days: "Luni - Duminică",
      hours: "10:00 - 20:00",
    };

    switch (location.pathname) {
      case "/":
      case "/galerie/mira":
        return {
          ...baseConfig,
          imgURL: imageHome,
          motto: (
            <>
              Where <span className="text-[#EF7F00]">Paws</span> &{" "}
              <span className="text-[#EF7F00]">People</span> meet for a{" "}
              <span className="text-[#EF7F00]">Treat</span>!
            </>
          ),
          pageTitle: "Pet Cafe - Where Paws & People meet for a Treat!",
          description: "Vizitați Pet Cafe, locul unde iubitorii de animale se pot bucura de băuturi și deserturi delicioase într-o atmosferă prietenoasă.",
          altText: "Pet Cafe - Imagine de bun venit cu atmosferă călduroasă"
        };
      case "/meniu":
        return {
          ...baseConfig,
          imgURL: imageMeniu,
          motto: "Meniul nostru",
          pageTitle: "Meniul nostru - Pet Cafe",
          description: "Explorați meniul nostru divers cu băuturi și deserturi pentru toate gusturile la Pet Cafe.",
          altText: "Pet Cafe - Imagine reprezentativă pentru meniul nostru"
        };
      case "/galerie":
        return {
          ...baseConfig,
          imgURL: imageGalerie,
          motto: "Galerie",
          pageTitle: "Galerie foto - Pet Cafe",
          description: "Vizualizați colecția noastră de fotografii din Pet Cafe, un loc special pentru iubitorii de animale.",
          altText: "Pet Cafe - Galerie de imagini cu momentele noastre preferate"
        };
      case "/contact":
        return {
          ...baseConfig,
          imgURL: imageContact,
          motto: "Contact",
          pageTitle: "Contact - Pet Cafe",
          description: "Găsiți informații de contact și programul Pet Cafe, locația perfectă pentru o pauză relaxantă.",
          altText: "Pet Cafe - Imagine reprezentativă pentru pagina de contact"
        };
      default:
        return {
          ...baseConfig,
          imgURL: imageHome,
          motto: "Welcome",
          pageTitle: "Pet Cafe - Experiență unică pentru iubitorii de animale",
          description: "Bun venit la Pet Cafe, locul ideal pentru relaxare și socializare.",
          altText: "Pet Cafe - Imagine de bun venit"
        };
    }
  };

  const config = getPageConfig();

  // Structurare pentru Schema.org JSON-LD
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Cafe",
    "name": "Pet Cafe",
    "image": config.imgURL,
    "description": config.description,
    "openingHours": "Mo-Su 10:00-20:00",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RO"
    }
  };

  return (
    <>
      <Helmet>
        <title>{config.pageTitle}</title>
        <meta name="description" content={config.description} />
        <meta property="og:title" content={config.pageTitle} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.imgURL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.pageTitle} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={config.imgURL} />
        <link rel="canonical" href={window.location.href} />
        <html lang="ro" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgData)}
        </script>
      </Helmet>

      <div className="relative w-full">
        {/* Mobile view */}
        <div className="sm:hidden h-screen">
          <img
            src={config.imgURL}
            alt={config.altText}
            className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute top-0 bottom-0 right-0 bg-[#633404]/90 text-[#FEF2DA] p-6 w-full backdrop-blur-md flex flex-col justify-between"
              style={{ textShadow: "4px 4px 9px rgba(0, 0, 0, 1)" }}
            >
              <div className="mt-12">
                <h1 className="text-5xl font-bold text-center mt-[40px]">
                  {config.title}
                </h1>
                <div className="flex flex-row justify-center items-center gap-4 mt-8">
                  <PiPawPrintFill
                    className="text-5xl text-[#EF7F00]"
                    style={{ transform: "rotate(340deg)" }}
                    aria-hidden="true"
                  />
                  <h1 className="text-[40px] font-bold text-center">
                    {config.cafe}
                  </h1>
                  <PiPawPrintFill
                    className="text-5xl text-[#EF7F00]"
                    style={{ transform: "rotate(20deg)" }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <h2 className="text-4xl text-center leading-[50px]">
                  {config.motto}
                </h2>
              </div>
              <div className="flex flex-row justify-center items-center gap-20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{config.days}</h3>
                  <p className="text-[18px]">{config.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet view */}
        <div className="relative w-full overflow-hidden hidden sm:block xl:hidden h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center bg-[#633404]/80"
            style={{
              backgroundImage: `url(${config.imgURL})`,
              backgroundBlendMode: "multiply",
            }}
            role="img"
            aria-label={config.altText}
          ></div>

          <div className="relative z-10 flex flex-col items-center justify-between h-full text-center text-[#FFF8EA] px-4 py-8 md:py-12">
            {/* Combined welcome title and Pet Cafe with reduced spacing */}
            <div className="w-full pt-16 md:pt-20 lg:pt-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                {config.title}
              </h1>
              
              {/* Reduced spacing between title and Pet Cafe */}
              <div className="flex items-center justify-center space-x-2 md:space-x-4 mt-1 md:mt-[40px]">
                <PiPawPrintFill
                  className="text-[#EF7F00] text-4xl md:text-5xl lg:text-6xl"
                  style={{ transform: "rotate(340deg)" }}
                  aria-hidden="true"
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFF8EA]">
                  {config.cafe}
                </h1>
                <PiPawPrintFill
                  className="text-[#EF7F00] text-4xl md:text-5xl lg:text-6xl"
                  style={{ transform: "rotate(20deg)" }}
                  aria-hidden="true"
                />
              </div>
            </div>
            
            {/* Motto section */}
            <div className="max-w-3xl px-4 mx-auto mt-8 md:mt-12 lg:mt-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-snug">
                {config.motto}
              </h2>
            </div>

            {/* Hours section */}
            <div className="bg-[#633404]/70 rounded-lg p-6 md:p-8 lg:p-10 w-full max-w-xs md:max-w-sm lg:max-w-md mt-6 md:mt-8">
              <div className="text-center text-[#FFF8EA]">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{config.days}</h3>
                <p className="text-xl md:text-2xl lg:text-3xl">{config.hours}</p>
              </div>
            </div>

            {/* Warning notice */}
            <div className="mt-6 md:mt-8 mb-4 md:mb-6">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold italic text-[#FFF8EA]">
                ! NOT PET FRIENDLY !
              </p>
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden xl:block h-screen">
          <img
            src={config.imgURL}
            alt={config.altText}
            className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1] xl:w-1/2"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute top-0 bottom-0 right-0 bg-[#633404]/90 text-[#FEF2DA] p-6 w-full xl:w-1/2 backdrop-blur-lg shadow-2xl flex flex-col justify-between"
              style={{ textShadow: "4px 4px 9px rgba(0, 0, 0, 1)" }}
            >
              <div className="mt-12 md:-mt-8">
                <h1 className="text-5xl font-bold text-center mt-[40px]">
                  {config.title}
                </h1>
                {/* Reduced spacing between title and Pet Cafe for desktop */}
                <div className="flex flex-row justify-center items-center gap-4 mt-[40px]">
                  <PiPawPrintFill
                    className="text-6xl text-[#EF7F00]"
                    style={{ transform: "rotate(340deg)" }}
                    aria-hidden="true"
                  />
                  <h1 className="text-6xl font-bold text-center">
                    {config.cafe}
                  </h1>
                  <PiPawPrintFill
                    className="text-6xl text-[#EF7F00]"
                    style={{ transform: "rotate(20deg)" }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <h2 className="text-4xl xl:text-4xl text-center leading-[50px]">
                  {config.motto}
                </h2>
              </div>
              <div className="text-center">
                <h3 className="text-2xl">{config.days}</h3>
                <p className="text-2xl">{config.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;