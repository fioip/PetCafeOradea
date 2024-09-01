import Banner from "./Banner";
import { IoRemoveOutline } from "react-icons/io5";


function Home() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full">
      <Banner />

      <div className="mt-20 ml-20">
        <div className="flex flex-col ml-24">
          <h1 className="text-3xl font-bold text-[#633404]">Despre Noi</h1>
          <IoRemoveOutline className="text-7xl -mt-7 ml-11 text-[#EF7F00] w-20"/>
        </div>
        <h2 className="text-justify text-xl mr-16 text-[#633404] font-medium">
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
