import Banner from "./Banner";
import { IoRemoveOutline } from "react-icons/io5";

function Home() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full">
      <Banner />

      <div className="mt-12 mx-6 md:mt-16 md:ml-16 lg:mt-20 lg:ml-20">
        <div className="flex flex-col items-center md:items-start md:ml-12 lg:ml-24">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#633404]">
            Despre Noi
          </h1>
          <IoRemoveOutline className="text-6xl md:text-7xl lg:text-8xl -mt-5 md:-mt-6 lg:-mt-7 ml-0 md:ml-8 lg:ml-11 text-[#EF7F00] w-14 md:w-16 lg:w-20" />
        </div>
        <h2 className="text-justify text-lg md:text-xl lg:text-2xl mt-6 md:mt-4 lg:mt-0 md:mr-12 lg:mr-16 text-[#633404] font-medium">
          În inima Oradei, Pet Cafe Oradea este o oază de liniște și bucurie
          pentru iubitorii de animale și cafea. Aici, într-o atmosferă caldă și
          primitoare, te poți relaxa savurând o cafea aromată, în timp ce te
          joci cu prietenii blănoși ai cafenelei. Decorul cozy și personalul
          prietenos te fac să te simți ca acasă, iar compania pisicilor și
          câinilor adaugă o notă de veselie și confort fiecărui moment petrecut
          aici.
        </h2>
      </div>
    </div>
  );
}

export default Home;
