import React, { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus.jsx";
import { API_CDN } from "../utils/constants.jsx";
import Banner from "./Banner.jsx";
import Offline from "../pages/Offline.jsx";
import TopRest from "./TopRest.jsx";
import OnlineRest from "./OnlineRest.jsx";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [bodyTitle, setBodyTitle] = useState("");

  useEffect(() => {

     const fetchData = async () => {
      try {
        // ✅ 1️⃣ Get user location
        const position = await new Promise((resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported by your browser."));
          } else {
            navigator.geolocation.getCurrentPosition(
              (pos) => resolve(pos),
              (err) => reject(err)
            );
          }
        });

        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

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

  const onlineStatus = useOnlineStatus();

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(API_CDN);
  //     const json = await data.json();

  //     // FIRST ROW
  //     setBannerData(
  //       json?.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
  //         (bannerInfo) => ({
  //           id: bannerInfo.id,
  //           imageId: bannerInfo.imageId,
  //           action: bannerInfo.action,
  //         })
  //       ) || []
  //     );
  //     // SECOND ROW
  //     setListOfRestaurants(
  //       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setBodyTitle(json?.data?.cards[1]?.card?.card?.header?.title);
  //     setTopRest(
  //       json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     // THIRD ROW

  //     setOnlineRest(
  //       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setOnlineTitle(json?.data?.cards[2]?.card?.card?.title);
  //     console.log("online rest", onlineRest);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  if (onlineStatus === false) {
    return <Offline />;
  }

  return (
    <div className="overflow-hidden">
      {/* What's on your mind? */}
      <Banner banners={bannerData} />
      {/* Top restaurant chains in Vellore */}
      <TopRest listOfRestaurants={listOfRestaurants} bodyTitle={bodyTitle} />
      {/* Restaurants with online food delivery in Vellore */}
      {/* <OnlineRest {...onlineRest?.info} title={onlineTitle} /> */}
    </div>
  );
};

export default Body;
