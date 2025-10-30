
import ResCardShimmer from "../shimmers/ResCardShimmer";
import { Link } from "react-router-dom";
import  ResCard ,{WithOpenLabel} from "./ResCard";

function TopRest({ listOfRestaurants, bodyTitle }) {
  // HIGHER ORDER COMPONENT
  const ResCardOpen = WithOpenLabel(ResCard);
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20">
        <span className="font-extrabold text-lg sm:text-xl md:text-2xl block mb-4">
          {bodyTitle}
        </span>
        <div className="flex flex-wrap justify-center sm:justify-center items-center py-4 sm:py-7 gap-4 sm:gap-6">
          {listOfRestaurants?.length > 0 ? (
            listOfRestaurants.map((restaurant, index) => (
              <Link
                key={restaurant?.info?.id}
                to={"/restaurants/" + restaurant?.info?.id}
              >
                {restaurant?.info?.isNewlyOnboarded ? (
                  <ResCardOpen {...restaurant.info} />
                ) : (
                  <ResCard {...restaurant.info} />
                )}
              </Link>
            ))
          ) : (
            <ResCardShimmer />
          )}
        </div>
      </div>
    </>
  );
}

export default TopRest;
