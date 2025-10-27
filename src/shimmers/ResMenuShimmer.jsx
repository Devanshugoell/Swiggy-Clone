import React from "react";

const ResMenuShimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="shadow-xl h-52 w-4/5 bg-gray-200 mx-auto mt-3 mb-6 rounded-md">
        <div className="pt-10">
          <div className="shimmer-heading w-[12%] h-10 bg-neutral-300 mt-4  rounded-lg"></div>
          <div className="shimmer-para w-[5%] h-3 bg-neutral-300 mt-4  rounded-lg"></div>
          <div className="shimmer-desc w-[5%] h-3 bg-neutral-300 mt-4  rounded-lg"></div>
          <div className="shimmer-location w-[10%] h-3 bg-neutral-300 mt-4  rounded-lg"></div>

          <hr className="mt-10 w-[90%] h-2 bg-neutral-300 mx-auto " />

          <div className="shimmer-location w-[10%] h-6 bg-neutral-300 mt-4  rounded-lg"></div>

          <div className="shimmer-location w-[10%] h-6 bg-neutral-300 mt-4  rounded-lg"></div>
        </div>
      </div>

      <div className="shadow-xl h-96 w-4/5 bg-gray-200 mx-auto my-4 rounded-md">
        <div className="flex justify-between"> 
          <div className="pt-10 ml-10">
            <div className="Recommended w-[8%] h-4 bg-neutral-300 mt-4  rounded-lg"></div>

            <div className="shimmer-heading w-[5%] h-4 bg-neutral-300 mt-4  rounded-lg"></div>
            <div className="shimmer-para w-[3%] h-3 bg-neutral-300 mt-4  rounded-lg"></div>
            <div className="shimmer-desc w-[80%] h-12 float-start bg-neutral-300 mt-4 rounded-lg"></div>
          </div>

          <div className="pt-10">
            <div className="Food-image w-32 h-32 bg-neutral-300 mt-4  rounded-lg"></div>

            <div className="shimmer-desc w-32 h-8 float-start bg-neutral-300 pt-4 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenuShimmer;
