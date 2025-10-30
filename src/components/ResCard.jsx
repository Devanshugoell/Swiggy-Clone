import { IMG_CDN_URL } from "../utils/constants";
import vagIcon from "../images/vagIcon.svg";
import { MdFiberNew } from "react-icons/md";
 const ResCard = ({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  sla,
  areaName,
  aggregatedDiscountInfoV3,
}) => {
  return (
    <div className="h-56 w-48 sm:h-60 sm:w-52 md:h-64 md:w-56 mb-6 flex flex-col gap-3 transition-all hover:scale-95">
      <div className="flex flex-row relative justify-center gap-2 items-center overflow-hidden rounded-2xl bg-cover bg-center h-36 sm:h-40 md:h-44">
        <img
          src={`${IMG_CDN_URL + cloudinaryImageId}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        <p
          className={`absolute bottom-1 left-0 z-10 text-xl font-extrabold text-white`}
        >
          
        </p>
      </div>

      <div className="text-slate-600 px-1">
        <h2 className="font-bold text-xs sm:text-sm md:text-[14px] line-clamp-1">{name}</h2>
        <div className="flex items-center gap-1">
          <img className="w-2 sm:w-3" src={vagIcon} alt="" />
          <p className="flex items-center gap-1 font-bold text-light text-[10px] sm:text-xs">
            <span>{avgRating}</span>
            <span className="bg-slate-600 w-1 h-1 rounded-full"></span>
            <span className="whitespace-nowrap">{sla?.slaString}</span>
          </p>
        </div>
        <p className="text-slate-600 line-clamp-1 text-[10px] sm:text-xs">{cuisines?.join(", ")}</p>
        <p className="text-slate-600 line-clamp-1 text-[10px] sm:text-xs">{areaName}</p>
      </div>
    </div>
  );
};

// HIGHER ORDER COMPONENT - takes and returns a component
export const WithOpenLabel = (ResCard) => {
  return (props) => {
    return (
      <div className="relative">
        <MdFiberNew
          className="absolute right-0 top-0 z-10"
          size={25}
          color="orange"
        />
        <ResCard {...props} />
      </div>
    );
  };
};

export default ResCard;