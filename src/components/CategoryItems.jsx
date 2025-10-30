import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PlaceholderImage from "../images/PlaceholderImage.png";

const CategoryItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success(`${item.card.info.name} added to the cart!`, {
      position: "bottom-right",
    });
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="grid grid-cols-12 border-b-2 border-gray-200 py-3 sm:py-4 px-1 sm:px-2 gap-2" >
            <div className="col-span-8 sm:col-span-9 flex flex-col">
              <span className="h-4 w-4 sm:h-5 sm:w-5 mt-1">
                {item?.card?.info?.isVeg === 1 ? (
                  <img src="https://img.icons8.com/?size=48&id=61083&format=png" alt="veg" />
                ) : (
                  <img src="https://img.icons8.com/?size=48&id=61082&format=png" alt="non-veg" />
                )}
              </span>
              <span className="font-semibold text-sm sm:text-base mt-1">
                {item?.card?.info?.name}
              </span>
              <span className="text-xs sm:text-sm mt-1 font-medium">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <small className="text-[10px] sm:text-xs text-gray-500 mt-2 sm:mt-4 line-clamp-2 sm:line-clamp-none">
                {item?.card?.info?.description}
              </small>
            </div>

            <div className="col-span-4 sm:col-span-3 self-center flex flex-col justify-center items-center h-full w-full">
              {
                item?.card?.info?.imageId ? <img
                  className="object-cover rounded-lg w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px]"
                  src={IMG_CDN_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                /> :  <img
                  className="object-cover rounded-lg w-14 h-14 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px]"
                  src={PlaceholderImage}
                  alt={item?.card?.info?.name}
                />
              }

              <button
                onClick={() => handleAddItem(item)}
                className="relative -top-2 sm:-top-3 bg-gray-50 py-1 sm:py-2 rounded-lg px-4 sm:px-6 md:px-8 shadow-xl text-green-500 font-bold text-xs sm:text-sm hover:shadow-2xl"
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CategoryItems;
