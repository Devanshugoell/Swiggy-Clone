
import ResCardShimmer from "../shimmers/ResCardShimmer";
import { Link } from "react-router-dom";
import  ResCard ,{WithOpenLabel} from "./ResCard";

function TopRest({ listOfRestaurants, bodyTitle }) {
  // HIGHER ORDER COMPONENT
  const ResCardOpen = WithOpenLabel(ResCard);
  return (
    <>
      <span id="txt" className="font-extrabold relative ml-40 mb-18">
        {bodyTitle}
      </span>
      <div>
        <div className="flex flex-wrap justify-center items-center py-7 px-40 gap-4">
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
