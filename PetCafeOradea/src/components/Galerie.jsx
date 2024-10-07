import {
  Mira,
  Kira,
  Tiramisu,
  Ash,
  Pisu1,
  Pisu2,
  Daisy,
  Chilli,
  Wendy,
  Winnie,
} from "../constants/AnimalDescription";
import mira from "../assets/photos/mira.jpeg";
import kira from "../assets/photos/kira.jpeg";
import tiramisu from "../assets/photos/tiramisu.jpeg";
import ash from "../assets/photos/ash.jpeg";
import winnie from "../assets/photos/winnie.jpeg";
import Category from "./Category";
import Banner from "./Banner";
import Footer from "./Footer";

function Galerie() {
  return (
    <div className="md:ml-[25%] lg:ml-[25%] xl:ml-[20%]">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 bg-[#FFF8EA]">
        <Category
          title="Mira"
          imgURL={mira}
          items={Mira}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Kira"
          imgURL={kira}
          items={Kira}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Tiramisu"
          imgURL={tiramisu}
          items={Tiramisu}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Ash"
          imgURL={ash}
          items={Ash}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Pisu 1"
          imgURL={winnie}
          items={Pisu1}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Pisu 2"
          imgURL={mira}
          items={Pisu2}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Daisy"
          imgURL={kira}
          items={Daisy}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Chilli"
          imgURL={tiramisu}
          items={Chilli}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Wendy"
          imgURL={ash}
          items={Wendy}
          showPrice={false}
          button={true}
          isGallery={true}
        />
        <Category
          title="Winnie"
          imgURL={winnie}
          items={Winnie}
          showPrice={false}
          button={true}
          isGallery={true}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Galerie;
