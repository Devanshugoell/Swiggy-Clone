import React from "react";
import EMPTYCART from "../images/EMPTYCART.png";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center mt-16 sm:mt-28 mb-40 sm:mb-72 px-4">
      <img src={EMPTYCART} className="w-48 sm:w-64 md:w-72 h-auto" alt="Empty cart" />
      <h1 className="font-bold mt-4 sm:mt-5 text-gray-900 text-base sm:text-lg md:text-xl text-center">
        Your cart is empty
      </h1>
      <h2 className="mt-2 font-thin text-gray-400 text-sm sm:text-base text-center">
        You can go to home page to view more restaurants
      </h2>
      <Link to="/restaurant">
        <button className="bg-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 mt-4 text-sm sm:text-base hover:bg-orange-600 transition-colors rounded">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
