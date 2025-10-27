import { SpinnerCircularFixed } from "spinners-react";
function BannerShimmer() {
  return (
    <div
      className="animate-pulse flex flex-col items-center justify-center"
    >
      <div className="banner-shimmer flex flex-wrap relative py-2 items-center justify-center text-xl mt-4">
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>
          <div className="banner-shimmer-card rounded-lg bg-[#f0f0f0] "></div>

          <div className="border-b-2 border-gray-300 mt-8"></div>
        </div>
      </div>
    </div>



      // <div className="flex border-b-2 border-gray-300">
      //    <div className="h-40 bg-gray-400"></div>
      // </div>
    
  );
}

export default BannerShimmer;
