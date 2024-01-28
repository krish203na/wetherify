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
          navigator.geolocation.getCurrentPosition( showPosition);
        //   return `${locationData.latitude},${locationData.longitude}`;
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
    // console.log(`${locationData.latitude}`);
    // locationData.latitude = position.coords.latitude;
    // locationData.longitude = position.coords.longitude;
  }

    // getLocation();
  //   console.log(lat);

  async function currentLocationSubmit(e) {
    e.preventDefault();
    // getLocation()
    getLocation()
    // console.log(getLocation());
    let { current, location } = await searchedLocation(
      `${locationData.latitude},${locationData.longitude}`
    );

    console.log(current);
    console.log(location);
  }

  return (
    <form className="flex" onSubmit={currentLocationSubmit}>
      <button
        className="flex items-center justify-center gap-2 shadow-xl rounded-xl bg-[#9bb0db] px-3 mx-[12px]"
        type="submit"
      >
        <i className="fa-sharp fa-solid fa-location-crosshairs"></i>
        <span className="hidden md:block">current Location</span>
      </button>
    </form>
  );
};

export default CurrentLocation;
