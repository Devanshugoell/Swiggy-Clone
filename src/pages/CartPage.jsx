import React from "react";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
} from "../store/cartSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage({ items }) {
  const dispatch = useDispatch();

  const handleDecreaseItem = (itemId) => {
    dispatch(decreaseItem(itemId));
  };

  const handleIncreaseItem = (itemId) => {
    dispatch(increaseItem(itemId));
  };

  const handleRemoveItem = (itemIdToRemove) => {
    const itemToRemove = items.find(
      (item) => item?.card?.info?.id === itemIdToRemove
    );

    if (itemToRemove) {
      dispatch(removeItem(itemToRemove));
      toast.error(`${itemToRemove.card.info.name} removed from the cart!`, {
        position: "bottom-right",
      });
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.info("Cart cleared!", { position: "bottom-right" });
  };

  const calculateTotalPrice = () => {
    return items.reduce(
      (total, item) => total + (getItemPrice(item) + 30), // Adding delivery charge of ₹30 per item
      0
    );
  };

  const getItemPrice = (item) => {
    const price = item?.card?.info?.price
      ? item?.card?.info?.price / 100
      : item?.card?.info?.defaultPrice / 100;
    return price * item.quantity;
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 mb-40 sm:mb-60">
      <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-7xl">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4">
          Orders
        </h1>

        <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-7"
          >
            <ul role="list" className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item?.card?.info?.id} className="">
                  <li className="flex flex-col sm:flex-row py-4 sm:py-6">
                    <div className="flex-shrink-0 mb-4 sm:mb-0">
                      <img
                        src={IMG_CDN_URL + item?.card?.info?.imageId}
                        className="h-24 w-24 sm:h-28 sm:w-28 rounded-md object-cover mx-auto sm:mx-0"
                      />
                    </div>

                    <div className="ml-0 sm:ml-4 flex flex-1 flex-col justify-between">
                      <div className="relative sm:grid sm:grid-cols-2 sm:gap-x-6">
                        <div>
                          <div className="flex gap-2 items-center justify-center sm:justify-start">
                            <span className="h-4 w-4 sm:h-5 sm:w-5">
                              {item?.card?.info?.isVeg === 1 ? (
                                <img src="https://img.icons8.com/?size=48&id=61083&format=png" />
                              ) : (
                                <img src="https://img.icons8.com/?size=48&id=61082&format=png" />
                              )}
                            </span>
                            <h3 className="text-sm sm:text-base font-semibold">
                              {item?.card?.info?.name}
                            </h3>
                          </div>

                          <div className="flex flex-row mt-2 mb-2 justify-center sm:justify-start">
                            <p className="text-xs sm:text-md font-medium text-gray-500 line-through ml-2">
                              ₹
                              {item?.card?.info?.price
                                ? item?.card?.info?.price / 100 + 50
                                : item?.card?.info?.defaultPrice / 100 + 50}
                            </p>
                            <p className="text-xs sm:text-md font-semibold text-gray-800 ml-2">
                              ₹
                              {item?.card?.info?.price
                                ? item?.card?.info?.price / 100
                                : item?.card?.info?.defaultPrice / 100}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-0 mt-3">
                        <div className="min-w-24 flex">
                          <button
                            onClick={() =>
                              handleDecreaseItem(item?.card?.info?.id)
                            }
                            type="button"
                            className="h-7 w-7 sm:h-8 sm:w-8 border-2 border-gray-400 text-sm sm:text-base"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="mx-1 h-7 w-9 sm:h-8 sm:w-10 border-2 border-gray-400 text-center text-sm sm:text-base"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            onClick={() =>
                              handleIncreaseItem(item?.card?.info?.id)
                            }
                            type="button"
                            className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center border-2 border-gray-400 text-sm sm:text-base"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex text-xs sm:text-sm">
                          <button
                            onClick={() =>
                              handleRemoveItem(item?.card?.info?.id)
                            }
                            type="button"
                            className="flex items-center space-x-1 px-2 py-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-red-500 sm:w-4 sm:h-4"
                            >
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            </svg>
                            <span className="text-xs sm:text-sm font-semibold text-red-500">
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-6 sm:mt-12 rounded-lg lg:col-span-5 lg:mt-0 bg-gray-200 w-full lg:w-auto p-4"
          >
            <h2
              id="summary-heading"
              className="border-b text-lg sm:text-xl border-gray-200 py-3 text-center font-semibold text-gray-900"
            >
              Order Summary
            </h2>
            <h2 className="text-sm sm:text-md text-center mt-2 mb-4 sm:mb-6 text-gray-800">
              Total Items ({items?.length})
            </h2>
            <div>
              <dl className="space-y-1 px-1 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col justify-between items-center w-full h-full">
                    {items.map((item) => (
                      <div
                        key={item?.card?.info?.id}
                        className="flex flex-row items-center justify-evenly w-full"
                      >
                        <div className="flex flex-row items-center justify-between py-4 w-full">
                          <div className="w-10/12">
                            <span className="text-md text-gray-800 flex-wrap font-bold">
                              {item?.card?.info?.name}&nbsp;
                            </span>

                            <span className="text-black font-medium">
                              ({item?.quantity})
                            </span>
                          </div>
                          <span className="text-sm font-medium text-green-700">
                            ₹ {getItemPrice(item)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-dashed w-full ">
                  <dt className="flex text-sm text-gray-800 w-10/12">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium text-green-700 ">
                    ₹ 30
                  </dd>
                </div>

                <div className="flex items-center justify-between border-y">
                  <dt className="text-lg font-medium text-gray-900 ">
                    Total Amount
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    ₹ {calculateTotalPrice()}
                  </dd>
                </div>
              </dl>
              {/* <div className="px-2 pb-4 font-medium text-green-700">
        You will save ₹ 3,431 on this order
    </div> */}
              <Link to="/thankyou">
                <button
                  onClick={() => handleClearCart()}
                  type="button"
                  className="flex px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-green-500 mx-auto text-sm sm:text-base font-semibold text-white hover:bg-green-600 transition-colors"
                >
                  PLACE ORDER
                </button>
              </Link>
            </div>
          </section>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
        />
      </div>
    </div>
  );
}
