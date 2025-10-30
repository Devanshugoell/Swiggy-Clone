import React from "react";
import BannerShimmer from "../shimmers/BannerShimmer.jsx";
import { IMG_CDN_URL } from "../utils/constants.jsx";

const Banner = ({ banners }) => {
  const limitedBanners = banners?.slice(0, 8);

  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="flex w-full">
        <span className="text-lg sm:text-xl md:text-2xl font-extrabold mt-4 mb-2">
          {limitedBanners?.length ? "What's on your mind?" : "Find your favorite dish"}
        </span>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-center gap-2 sm:gap-4 border-b-2 border-gray-300 mb-6 sm:mb-8 pb-4 w-full">
        {limitedBanners?.length > 0 ? (
          limitedBanners.map((banner) => (
            <div
              className="cursor-pointer"
              key={banner?.id}
            >
              <div className="flex flex-col justify-center items-center">
                <img
                  className="h-28 w-auto sm:h-32 md:h-36 lg:h-40 rounded-full object-cover"
                  src={IMG_CDN_URL + banner.imageId}
                  alt={banner?.action?.text}
                />
              </div>
            </div>
          ))
        ) : (
          <BannerShimmer />
        )}
      </div>
    </div>
  );
};

export default Banner;
