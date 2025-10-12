import React from "react";

const ResMenuShimmer = () => {
  return (
   <div className="animate-pulse">
      <div className="shadow-xl h-52 w-4/5 bg-gray-200 mx-auto mt-3 mb-6 rounded-md"></div>

      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="shadow-xl h-20 w-4/5 bg-gray-200 mx-auto my-4 rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default ResMenuShimmer;
