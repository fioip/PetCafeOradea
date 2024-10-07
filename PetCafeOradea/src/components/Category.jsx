import { Link } from "react-router-dom";

function Category({
  title,
  imgURL,
  items,
  showPrice = true,
  button = false,
  isGallery = false,
}) {
  return (
    <div className="relative flex flex-col p-4">
      {/* Titlu secțiune */}
      <h1 className="absolute top-0 left-0 text-3xl text-[#633404] font-bold m-4">
        {title}
      </h1>

      {/* Imagine */}
      <div className={`${isGallery ? "flex justify-center" : ""} mt-12 ml-4`}>
        <img
          src={imgURL}
          alt={title}
          className={`rounded-3xl ${
            isGallery ? "w-[400px] h-[250px]" : "w-[700px] h-[300px]"
          }`}
        />
      </div>

      {/* Listă de articole */}
      <div className="mt-4 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-full ${
              isGallery
                ? "flex flex-col items-center text-center space-y-3 min-h-[200px]"
                : "flex justify-between"
            } mt-5`}
          >
            {/* Denumire articol */}
            <p className="text-[#633404] font-normal text-lg">
              {item.denumire}
            </p>

            {/* Prețul este afișat doar dacă `showPrice` este true și nu e galerie */}
            {showPrice && !isGallery && (
              <span className="text-[#633404] font-bold">{item.pret}</span>
            )}

            {/* Butonul este afișat doar în galerie */}
            {isGallery && button && (
              <div className="mt-auto">
                <Link to={`/animal/${item.animalTitle.toLowerCase()}`}>
                  <button className="bg-[#633404] text-white px-4 py-2 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-[#633304bb] hover:text-white hover:shadow-lg"
                  style={{ boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.7)" }}>
                    Vezi mai multe
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
