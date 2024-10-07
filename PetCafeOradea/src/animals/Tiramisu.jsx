import Banner from "../components/Banner";
const TiramisuData = {
  title: "Tiramisu",
  imgURL: "/path/to/tiramisu.jpg",
  denumire:
    "Sunt o fetita din rasa Siameza, foarte iubitoare si jucausa. Adorm mereu in pătuțul cațeilor si nimeni ma poate opri din a face asta!",
  additionalImages: [
    "/path/to/tiramisu1.jpg",
    "/path/to/tiramisu2.jpg",
    "/path/to/tiramisu3.jpg",
  ],
};

function TiramisuPage() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%] h-full">
    <div className="bg-[#FFF8EA]">
      <Banner />

      <AnimalPage animal={TiramisuData} />
      </div>
      </div>
)}

export default Tiramisu;