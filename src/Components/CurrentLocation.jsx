import React, { useContext, useState } from "react";
import ApiContext from "../Context/ApiContext";

const CurrentLocation = () => {
  const { searchedLocation } = useContext(ApiContext);

  const [locationData, setLocationData] = useState({
    latitude: "",
    longitude: "",
  });

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    setLocationData((prevData) => ({
      ...prevData,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }));
  }

  setTimeout(() => {
    getLocation();
  }, 0);

  async function currentLocationSubmit(e) {
    e.preventDefault();
    let { current, location } = await searchedLocation(
      `${locationData.latitude},${locationData.longitude}`
    );

    console.log(current);
    console.log(location);
  }

  return (
    <button
      onClick={currentLocationSubmit}
      className="flex items-center justify-center gap-2 shadow-xl rounded-xl bg-[#9bb0db] px-3 mx-[12px]"
      type="submit"
    >
      <i className="fa-sharp fa-solid fa-location-crosshairs"></i>
      <span className="hidden md:block">current Location</span>
    </button>
  );
};

export default CurrentLocation;
