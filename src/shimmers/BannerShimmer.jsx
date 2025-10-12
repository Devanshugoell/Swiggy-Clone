import { SpinnerCircularFixed } from "spinners-react";
function BannerShimmer() {
  return (
    <div
      className="animate-pulse flex flex-col items-center justify-center"
    >
      <div className="banner-shimmer flex flex-wrap relative py-2 items-center justify-center text-xl mt-4">
        <div className="flex justify-center gap-6">
          {/* <SpinnerCircularFixed
            className="text-center items-center spinner mt-4"
            size={80}
            thickness={100}
            speed={100}
            color="white"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
          <span className="mt-8 text-2xl font-mono  ">
            Looking for great food near you...
          </span> */}



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
