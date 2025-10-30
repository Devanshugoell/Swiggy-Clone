import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-12 sm:mt-20 px-4">
        <img
          src="https://www.shutterstock.com/image-vector/checkmark-green-vector-isolated-icon-600nw-1504889324.jpg"
          className="h-32 w-auto sm:h-40"
          alt="Success"
        />
        <h1 className="font-bold text-xl sm:text-2xl text-black p-2 text-center">
          Thank you for your order!
        </h1>
        <p className="text-sm sm:text-base text-gray-400 text-center px-4">
          Your food is on its way. Relax and get ready for a delicious meal.
        </p>
        <Link to="/restaurant">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-orange-500 text-white rounded-lg mt-8 sm:mt-10 mb-40 sm:mb-72 hover:bg-orange-600 transition-colors text-sm sm:text-base">
            Back to Home
          </button>
        </Link>
      </div>
    </>
  );
};
export default ThankYou;
