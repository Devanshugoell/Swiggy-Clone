import { useParams } from "react-router-dom";
import ResMenuShimmer from "../shimmers/ResMenuShimmer";
import useResMenu from "../hooks/useResMenu";
import { Clock8, IndianRupee } from "lucide-react";
import ResCategory from "../components/ResCategory";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useResMenu(resId);

  if (resInfo === null) {
    return <ResMenuShimmer />;
  }

  const {
    name,
    cuisines,
    city,
    sla,
    areaName,
    avgRating,
    totalRatings,
    costForTwoMessage,
    feeDetails,
    aggregatedDiscountInfo,
    aggregatedDiscountInfoV2,
    header,
    description,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <>
      <div className="pt-20 sm:pt-40 md:pt-60 lg:pt-80 pb-5 px-4 sm:px-8 md:px-16 lg:px-40 -mt-10 sm:-mt-20 md:-mt-40 lg:-mt-80">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 py-4 sm:py-8 text-zinc-500">
          <div className="flex w-full flex-col gap-4 sm:gap-8">
            <div className="flex items-center justify-between">
              <div className="text-[10px] sm:text-xs text-gray-400">
                <span>Home</span> /{" "}
                <span>
                  {city},{areaName}
                </span>{" "}
                / <span className="text-gray-600"> {name} </span>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-4 sm:gap-6">
              <div className="flex w-full flex-col sm:flex-row items-start justify-between gap-4">
                <div className="text-xs sm:text-sm flex-1">
                  <div className="flex flex-row">
                    <h2 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-black">
                      {name}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm mb-1">{cuisines?.join(", ")} </p>
                  <p className="text-xs sm:text-sm mb-1">
                    {areaName}, {feeDetails?.message}
                  </p>
                  <span className="text-xs sm:text-sm font-md text-gray-500">
                    <small> Delivery Charge: </small>
                    <small>
                      {feeDetails?.amount
                        ? "₹" + Math.round(feeDetails.amount / 10 + 30)
                        : "N/A"}{" "}
                      | {sla?.lastMileTravelString}
                    </small>
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-gray-200 p-3 text-xs w-full sm:w-auto">
                  <div className="flex items-center justify-start gap-1">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"
                      className="w-3 sm:w-4"
                      alt=""
                    />
                    <span className="font-bold text-green-600 text-sm sm:text-base">
                      {avgRating}
                    </span>
                  </div>
                  <div className="h-[1px] w-full bg-slate-300"></div>
                  <span className="whitespace-nowrap font-mono text-[10px] sm:text-xs">
                    {totalRatings}+ ratings
                  </span>
                </div>
              </div>
              <div className="w-full border-t-[2px] border-dotted border-gray-300"></div>

              <div className="flex w-full flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3 sm:gap-4 font-bold text-black">
                  <div className="flex flex-row items-center justify-start gap-2">
                    <span className="text-xs sm:text-sm">
                      <span className="flex items-center">
                        <span className="pr-2">
                          <Clock8 size={14} className="sm:w-4 sm:h-4" />
                        </span>
                        {sla?.slaString}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <IndianRupee size={14} className="sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">
                      {costForTwoMessage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*------------------ NEW CATEGORIES ACCORDION---------------------- */}
        <div className="mt-4 sm:mt-6">
          {categories.map((category, index) => (
            // Controlled Component
            <ResCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ResMenu;
