import Banner from "./Banner";
import { IoRemoveOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import imageHome from "../assets/photos/ash.jpeg";


function Home() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full bg-[#FFF8EA]">
      <Banner />

      <div className="mt-12 mx-6 md:mt-16 md:ml-16 lg:mt-20 lg:ml-20">
        <div className="flex flex-col items-center md:items-start md:ml-12 lg:ml-24">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#633404]">
            Despre Noi
          </h1>
          <IoRemoveOutline className="text-6xl md:text-7xl lg:text-8xl -mt-5 md:-mt-6 lg:-mt-7 ml-0 md:ml-8 lg:ml-11 text-[#EF7F00] w-14 md:w-16 lg:w-20" />
          </div>
          <h2 className="text-justify leading-7 md:leading-relaxed lg:leading-10 sm:leading-6 text-lg md:text-3xl lg:text-2xl mt-6 md:mt-4 lg:mt-0 md:mr-12 lg:mr-16 text-[#633404] font-medium ">
            În inima Oradei, Pet Cafe Oradea este o oază de liniște și bucurie
            pentru iubitorii de animale și cafea. Aici, într-o atmosferă caldă și
            primitoare, te poți relaxa savurând o cafea aromată, în timp ce te
            joci cu prietenii blănoși ai cafenelei. Decorul cozy și personalul
            prietenos te fac să te simți ca acasă, iar compania pisicilor și
            câinilor adaugă o notă de veselie și confort fiecărui moment petrecut
            aici.
          </h2>
          <div className="flex justify-center items-center">
            <button
              className="flex flex-row mt-10 bg-[#EF7F00] items-center justify-center p-4 rounded-full border-4 border-white pl-8 pr-5 pt-3 pb-3 md:pl-12 md:pr-8 text-lg md:text-xl text-[#FEF2DA] font-bold transition-all duration-300 ease-in-out transform hover:bg-[#D96E00] hover:scale-105"
              style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}
            >
              Mai multe <MdOutlineKeyboardArrowRight className=" text-3xl" style={{ fontWeight: '900' }}/>
            </button>
          </div>
        </div>

        <div className="mt-14 mx-6 md:mt-16 lg:mt-32">
          <div className="flex flex-col items-center md:items-start md:ml-12 lg:ml-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#633404]">Animăluțele Noastre</h1>
            <div className="text-[#EF7F00] text-6xl md:text-7xl lg:text-8xl -mt-5 md:-mt-6 lg:-mt-7 w-14 md:w-16 lg:w-20">
            <IoRemoveOutline className="text-6xl md:text-7xl lg:text-8xl md:-mt-6 ml-0 md:ml-8 lg:ml-11 text-[#EF7F00] w-14 md:w-16 lg:w-20" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
              <div className="flex flex-col items-center">
                <img src={imageHome} alt="Tiramisu" className="rounded-full w-24 h-24 lg:w-28 lg:h-28" />
                <h2 className="mt-4 text-xl font-semibold">Tiramisu</h2>
              </div>

              <div className="flex flex-col items-center">
                <img src={imageHome} alt="Kira" className="rounded-full w-24 h-24 lg:w-28 lg:h-28" />
                <h2 className="mt-4 text-xl font-semibold">Kira</h2>
              </div>

              <div className="flex flex-col items-center">
                <img src={imageHome} alt="Mira" className="rounded-full w-24 h-24 lg:w-28 lg:h-28" />
                <h2 className="mt-4 text-xl font-semibold">Mira</h2>
              </div>

              <div className="flex flex-col items-center">
                <img src={imageHome} alt="Ash" className="rounded-full w-24 h-24 lg:w-28 lg:h-28" />
                <h2 className="mt-4 text-xl font-semibold">Ash</h2>
              </div>

              <div className="flex flex-col items-center">
                <img src={imageHome} alt="Wendy" className="rounded-full w-24 h-24 lg:w-28 lg:h-28" />
                <h2 className="mt-4 text-xl font-semibold">Wendy</h2>
              </div>

              <div className="flex flex-col items-center">
                <img src={imageHome} alt="Daisy" className="rounded-full w-24 h-24 lg:w-28 lg:h-28" />
                <h2 className="mt-4 text-xl font-semibold">Daisy</h2>
              </div>

              <div className="flex flex-col items-center">
                <img src={imageHome} alt="Winnie" className="rounded-full w-24 h-24 lg:w-28 lg:h-28" />
                <h2 className="mt-4 text-xl font-semibold">Winnie</h2>
              </div>
            </div>
          </div>
        </div>

      
    </div>
  );
}

export default Home;
