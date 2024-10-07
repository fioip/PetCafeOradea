import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import image1 from "../assets/photos/ash.jpeg";
import image2 from "../assets/photos/tiramisu.jpeg";
import image3 from "../assets/photos/kira.jpeg";

const images = [image1, image2, image3];

function Mira() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full flex flex-col gap-20">
      <div className="bg-[#FFF8EA]">
        <Banner />
      </div>

      <div className="mt-20 flex flex-col">
        <h1 className="text-4xl text-[#633404] mx-auto font-bold mb-14">
          Mira
        </h1>
        <Carousel images={images} />
        <p className="mx-auto text-2xl mt-14 text-[#633404] ml-52 mr-52 text-justify">
          O pisică jucăușă este plină de energie și curiozitate. Se va distra cu
          ore întregi cu jucării interactive și va alerga prin casă cu o
          ușurință dezarmantă. Ideală pentru familii active și pentru cei care
          vor să se distreze alături de pisica lor.
        </p>
        <h1 className="mx-auto text-2xl mt-14 text-[#633404] ml-52 mr-52 text-justify">Poze</h1>
      </div>
    </div>
  );
}

export default Mira;
