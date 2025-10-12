import React from "react";
import BannerShimmer from "../shimmers/BannerShimmer.jsx";
import { IMG_CDN_URL } from "../utils/constants.jsx";

const Banner = ({ banners }) => {
  const limitedBanners = banners?.slice(0, 8);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full">
        <span id="text" className="relative ml-40 mt-4 font-extrabold">
          {limitedBanners?.length ? "What's on your mind?" : "Find your favorite dish"}
        </span>
      </div>

      <div className="flex flex-wrap border-b-2 border-gray-300 mb-8">
        {limitedBanners?.length > 0 ? (
          limitedBanners.map((banner) => (
            <div
              className="banner-card flex-row cursor-pointer"
              key={banner?.id}
            >
              <div className="flex flex-col t-14 b-2 l-16 justify-center">
                <img
                  className="h-40 w-full rounded-full"
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
