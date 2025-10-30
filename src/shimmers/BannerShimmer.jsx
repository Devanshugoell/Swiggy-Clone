import React from "react";

function BannerShimmer() {
  return (
    <div className="animate-pulse px-4 sm:px-8 md:px-16 lg:px-20">
      
      {/* Banner Items Grid */}
      <div className="flex flex-wrap justify-center sm:justify-center gap-6 sm:gap-8 mb-6 sm:mb-8 pb-4 w-full mt-8">
        {/* Shimmer circles for banner items */}
        {[...Array(8)].map((_, index) => (
          <div 
            key={index}
            className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-2xl bg-gray-300"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BannerShimmer;
