function Footer() {
  return (
    <div className="bg-[#EF7F00] w-full">
      <div
        className="flex flex-col justify-center items-center space-y-8
  
                      lg:flex-row lg:space-y-0 lg:space-x-16
  
                      xl:space-x-28 mt-5 pt-8 pb-8 mb-4 border-b-2 border-[#FFF8EA]"
      >
        <div className="flex flex-col justify-center items-center md:space-x-5">
          <p
            className="font-medium text-xl
  
                           md:text-2xl
  
                           lg:text-3xl text-[#633404]"
          >
            Email
          </p>

          <p
            className="font-medium text-lg
  
                          md:text-xl
  
                          lg:text-2xl text-[#FFF8EA]"
          >
            pet.cafe@yahoo.com
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p
            className="font-medium text-xl
  
                          md:text-2xl
  
                          lg:text-3xl text-[#FFF8EA]"
          >
            Piața 1 Decembrie
          </p>

          <p
            className="font-medium text-xl
  
                          md:text-2xl
  
                          lg:text-3xl text-[#FFF8EA]"
          >
            Nr. 12, Oradea
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p
            className="font-medium text-xl
  
                          md:text-2xl
  
                          lg:text-3xl text-[#633404]"
          >
            Instagram
          </p>

          <p
            className="font-medium text-lg
  
                          md:text-xl
  
                          lg:text-2xl text-[#FFF8EA]"
          >
            petcafeoradea
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-8 pb-8">
        <p
          className="text-lg
  
                       md:text-2xl
  
                       lg:text-2xl
  
                       xl:text-3xl font-medium text-[#FFF8EA]"
        >
          © 2024 Pet Cafe | Toate drepturile rezervate
        </p>

        <p
          className="text-md text-justify
  
                        md:text-lg
  
                        lg:text-xl
  
                        xl:text-2xl text-[#FFF8EA]/70 italic"
        >
          Created by Iuhasz P. Fiona & Oros Răzvan
        </p>
      </div>
    </div>
  );
}
export default Footer;
