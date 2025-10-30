import React, { useEffect, useState } from "react";
import { API_CDN } from "../utils/constants.jsx";
import Banner from "./Banner.jsx";
import TopRest from "./TopRest.jsx";
import OnlineRest from "./OnlineRest.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [bodyTitle, setBodyTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lat = 28.6139;
        const lng = 77.209 ;

        // ✅ 2️⃣ Build dynamic API using template literals
        const newAPI = `https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

        // const newAPI = `https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

        // ✅ 3️⃣ Fetch API using dynamic lat/lng
        const response = await fetch(newAPI);
        const json = await response.json();

        // ✅ 4️⃣ Extract and set data
        setBannerData(
          json?.data?.cards[0]?.card?.card?.imageGridCards?.info?.map(
            (bannerInfo) => ({
              id: bannerInfo.id,
              imageId: bannerInfo.imageId,
              action: bannerInfo.action,
            })
          ) || []
        );

        setListOfRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        );

        setBodyTitle(json?.data?.cards[1]?.card?.card?.header?.title || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-hidden">
      <Banner banners={bannerData} />
      <TopRest listOfRestaurants={listOfRestaurants} bodyTitle={bodyTitle} />
    </div>
  );
};

export default Body;
