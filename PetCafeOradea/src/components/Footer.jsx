import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#EF7F00] w-full overflow-x-hidden">
      <div
        className="flex flex-col justify-center items-center space-y-6
                      md:space-y-8 
                      lg:flex-row lg:space-y-0 lg:space-x-16
                      xl:space-x-28 pt-6 pb-6 lg:pt-8 lg:pb-8 border-b-2 border-[#FFF8EA] w-full max-w-screen"
      >
        {/* Instagram Section */}
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
          <p
            className="font-medium text-xl
                        md:text-3xl
                        lg:text-2xl text-[#633404]"
          >
            Instagram
          </p>

          <Link to={`https://www.instagram.com/petcafeoradea/`} target="_blank">
            <p className="font-semibold underline text-2xl md:text-2xl lg:text-lg xl:text-xl text-[#FFF8EA] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
              petcafeoradea
            </p>
          </Link>
        </div>

        {/* Facebook Section */}
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
          <p
            className="font-medium text-xl
                        md:text-3xl
                        lg:text-2xl text-[#633404]"
          >
            Facebook
          </p>

          <Link
            to={`https://www.facebook.com/profile.php?id=61561317749365`}
            target="_blank"
          >
            <p className="font-semibold underline text-2xl md:text-2xl lg:text-lg xl:text-xl text-[#FFF8EA] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
              Pet Cafe Oradea
            </p>
          </Link>
        </div>

        {/* TikTok Section */}
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
          <p
            className="font-medium text-xl
                        md:text-3xl
                        lg:text-2xl text-[#633404]"
          >
            Tik Tok
          </p>

          <Link to={`https://www.tiktok.com/@petcafeoradea`} target="_blank">
            <p className="font-semibold underline text-2xl md:text-2xl lg:text-lg xl:text-xl text-[#FFF8EA] text-center hover:transition-transform transform hover:scale-110 hover:no-underline hover:cursor-pointer">
              petcafeoradea
            </p>
          </Link>
        </div>
      </div>

      {/* Address and Footer Info */}
      <div className="flex flex-col justify-center items-center pt-6 pb-6 lg:pt-8 lg:pb-8 w-full max-w-screen">
        <div className="flex flex-col justify-center items-center space-y-2">
          <p
            className="font-medium text-base
                        md:text-xl
                        lg:text-xl text-[#633404] text-center"
          >
            Piața 1 Decembrie, Nr. 12, Oradea
          </p>
        </div>
        <p
          className="font-medium text-base
                       md:text-2xl
                       lg:text-xl
                       xl:text-2xl text-[#FFF8EA] text-center mt-4"
        >
          © 2024 Pet Cafe | Toate drepturile rezervate
        </p>

        <p
          className="text-sm text-center
                        md:text-base
                        lg:text-lg
                        xl:text-xl text-[#FFF8EA]/70 italic mt-2"
        >
          Created by Iuhasz P. Fiona & Oros Răzvan
        </p>
      </div>
    </div>
  );
}

export default Footer;
