import React from "react";

const ResMenuShimmer = () => {
  return (
    <div className="animate-pulse px-4 sm:px-8 md:px-16 lg:px-40 py-4 sm:py-6">
      {/* Restaurant Info Shimmer */}
      <div className="shadow-xl bg-gray-200 mx-auto mt-3 mb-6 rounded-md p-4 sm:p-6 w-full">
        <div className="space-y-3 sm:space-y-4">
          {/* Breadcrumb */}
          <div className="w-40 sm:w-48 h-2 sm:h-3 bg-neutral-300 rounded-lg"></div>
          
          {/* Restaurant name */}
          <div className="w-32 sm:w-48 md:w-64 h-6 sm:h-8 md:h-10 bg-neutral-300 rounded-lg"></div>
          
          {/* Cuisines */}
          <div className="w-24 sm:w-32 md:w-40 h-2 sm:h-3 bg-neutral-300 rounded-lg"></div>
          
          {/* Location */}
          <div className="w-28 sm:w-36 md:w-44 h-2 sm:h-3 bg-neutral-300 rounded-lg"></div>
          
          {/* Delivery info */}
          <div className="w-36 sm:w-48 md:w-56 h-2 sm:h-3 bg-neutral-300 rounded-lg"></div>

          {/* Divider */}
          <div className="my-4 sm:my-6 w-full h-[2px] bg-neutral-300"></div>

          {/* Rating and time info */}
          <div className="flex gap-3 sm:gap-4">
            <div className="w-20 sm:w-24 h-4 sm:h-6 bg-neutral-300 rounded-lg"></div>
            <div className="w-20 sm:w-24 h-4 sm:h-6 bg-neutral-300 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Menu Items Shimmer - Multiple cards */}
      {[...Array(3)].map((_, index) => (
        <div key={index} className="shadow-xl bg-gray-200 mx-auto my-4 rounded-md p-4 sm:p-6 w-full">
          {/* Category Title */}
          <div className="w-32 sm:w-40 h-4 sm:h-5 bg-neutral-300 mb-4 rounded-lg"></div>
          
          {/* Flex container for the item */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            {/* Left section - Text content */}
            <div className="flex-1 space-y-3 w-full">
              <div className="w-24 sm:w-32 h-3 sm:h-4 bg-neutral-300 rounded-lg"></div>
              <div className="w-20 sm:w-24 h-3 bg-neutral-300 rounded-lg"></div>
              <div className="w-16 sm:w-20 h-2 sm:h-3 bg-neutral-300 rounded-lg"></div>
              <div className="w-full sm:w-3/4 h-10 sm:h-12 bg-neutral-300 rounded-lg"></div>
            </div>

            {/* Right section - Image */}
            <div className="flex flex-col items-center sm:items-end gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-neutral-300 rounded-lg"></div>
              <div className="w-20 sm:w-24 md:w-28 h-6 sm:h-8 bg-neutral-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenuShimmer;
