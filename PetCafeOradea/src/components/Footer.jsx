import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Footer() {
  return (
    <>
      <Helmet>
        {/* Add structured data for local business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Pet Cafe Oradea",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Piața 1 Decembrie, Nr. 12",
                "addressLocality": "Oradea",
                "addressCountry": "RO"
              },
              "url": "https://petcafeoradea.com",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61561317749365",
                "https://www.instagram.com/petcafeoradea/",
                "https://www.tiktok.com/@petcafeoradea"
              ]
            }
          `}
        </script>
      </Helmet>
      <footer className="bg-[#EF7F00] w-full overflow-x-hidden" aria-label="Site Footer">
        <div
          className="flex flex-col justify-center items-center space-y-6
                      md:space-y-8 
                      lg:flex-row lg:space-y-0 lg:space-x-16
                      xl:space-x-28 pt-6 pb-6 lg:pt-8 lg:pb-8 border-b-2 border-[#FFF8EA] w-full max-w-screen"
        >
          {/* Instagram Section */}
          <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
            <h2
              className="font-medium text-xl
                        md:text-3xl
                        lg:text-3xl
                        xl:text-2xl text-[#633404]"
            >
              Instagram
            </h2>

            <Link 
              to={`https://www.instagram.com/petcafeoradea/`} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Urmărește-ne pe Instagram"
            >
              <p className="font-semibold underline text-2xl md:text-2xl lg:text-2xl xl:text-xl text-[#FFF8EA] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
                petcafeoradea
              </p>
            </Link>
          </div>

          {/* Facebook Section */}
          <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
            <h2
              className="font-medium text-xl
                        md:text-3xl
                        lg:text-3xl
                        xl:text-2xl text-[#633404]"
            >
              Facebook
            </h2>

            <Link
              to={`https://www.facebook.com/profile.php?id=61561317749365`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Urmărește-ne pe Facebook"
            >
              <p className="font-semibold underline text-2xl md:text-2xl lg:text-2xl xl:text-xl text-[#FFF8EA] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
                Pet Cafe Oradea
              </p>
            </Link>
          </div>

          {/* TikTok Section */}
          <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
            <h2
              className="font-medium text-xl
                        md:text-3xl
                        lg:text-3xl
                        xl:text-2xl text-[#633404]"
            >
              Tik Tok
            </h2>

            <Link 
              to={`https://www.tiktok.com/@petcafeoradea`} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Urmărește-ne pe TikTok"
            >
              <p className="font-semibold underline text-2xl md:text-2xl lg:text-2xl xl:text-xl text-[#FFF8EA] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
                petcafeoradea
              </p>
            </Link>
          </div>
        </div>

        {/* Address and Footer Info */}
        <div className="flex flex-col justify-center items-center pt-6 pb-6 lg:pt-8 lg:pb-8 w-full max-w-screen">
          <div className="flex flex-col justify-center items-center space-y-2">
            <address
              className="font-medium text-base
                        md:text-xl
                       lg:text-3xl
                        xl:text-2xl text-[#633404] text-center not-italic"
            >
              Piața 1 Decembrie, Nr. 12, Oradea
            </address>
          </div>
          <p
            className="font-medium text-base
                       md:text-2xl
                       lg:text-2xl
                       xl:text-2xl text-[#FFF8EA] text-center mt-4"
          >
            © {new Date().getFullYear()} Pet Cafe | Toate drepturile rezervate
          </p>

          <p
            className="text-sm text-center
                        md:text-lg
                        lg:text-lg
                        xl:text-xl text-[#FFF8EA]/70 italic mt-2"
          >
            Created by Iuhasz P. Fiona & Oros Răzvan
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;