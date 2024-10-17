function Footer() {
  return (
    <div className="bg-[#EF7F00] w-full overflow-x-hidden">
      <div
        className="flex flex-col justify-center items-center space-y-6
                      md:space-y-8 
                      lg:flex-row lg:space-y-0 lg:space-x-16
                      xl:space-x-28 pt-6 pb-6 lg:pt-8 lg:pb-8 border-b-2 border-[#FFF8EA] w-full max-w-screen"
      >
        {/* Email Section */}
        {/* <div
          className="flex flex-col justify-center items-center
                      space-y-2 md:space-y-1 md:space-x-5"
        >
          <p
            className="font-medium text-xl
                        md:text-2xl
                        lg:text-2xl text-[#633404]"
          >
            Email
          </p>

          <p
            className="font-medium text-base
                          md:text-lg
                          lg:text-lg  text-[#FFF8EA]"
          >
            pet.cafe@yahoo.com
          </p>
        </div> */}

        {/* Facebook Section */}
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
          <p
            className="font-medium text-xl
                        md:text-2xl
                        lg:text-2xl text-[#633404]"
          >
            Facebook
          </p>

          <p
            className="font-medium text-base
                          md:text-lg
                          lg:text-lg  text-[#FFF8EA]"
          >
            Pet Cafe Oradea
          </p>
        </div>

        {/* Instagram Section */}
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
          <p
            className="font-medium text-xl
                        md:text-2xl
                        lg:text-2xl text-[#633404]"
          >
            Instagram
          </p>

          <p
            className="font-medium text-base
                          md:text-lg
                          lg:text-lg  text-[#FFF8EA]"
          >
            petcafeoradea
          </p>
        </div>

        {/* TikTok Section */}
        <div className="flex flex-col justify-center items-center space-y-2 md:space-y-1">
          <p
            className="font-medium text-xl
                        md:text-2xl
                        lg:text-2xl text-[#633404]"
          >
            Tik Tok
          </p>

          <p
            className="font-medium text-base
                          md:text-lg
                          lg:text-lg  text-[#FFF8EA]"
          >
            petcafeoradea
          </p>
        </div>
      </div>

      {/* Address and Footer Info */}
      <div className="flex flex-col justify-center items-center pt-6 pb-6 lg:pt-8 lg:pb-8 w-full max-w-screen">
        <div className="flex flex-col justify-center items-center space-y-2">
          <p
            className="font-medium text-base
                        md:text-lg
                        lg:text-xl text-[#633404] text-center"
          >
            Piața 1 Decembrie, Nr. 12, Oradea
          </p>
        </div>
        <p
          className="font-medium text-base
                       md:text-lg
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
