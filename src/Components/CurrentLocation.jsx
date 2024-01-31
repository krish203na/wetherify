import React, { useContext, useEffect, useState } from "react";
import ApiContext from "../Context/ApiContext";

// getLocation();

const CurrentLocation = () => {
  const { searchedLocation, WeatherReport, setWeatherReport } =
    useContext(ApiContext);

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
  useEffect(() => {
    // setTimeout(() => {
    getLocation();

    async function starter() {
      // console.log(locationData.latitude);
      let { current, location, forecast, alerts } = await searchedLocation(
        `Maharashtra`
      );

      setWeatherReport((prevData) => ({
        ...prevData,
        current: current,
        location: location,
        forecast: forecast,
        alerts: alerts,
      }));

    }
    starter();
    // }, 0);
  }, []);
  async function currentLocationSubmit(e) {
    e.preventDefault();
    let { current, location } = await searchedLocation(
      `${locationData.latitude},${locationData.longitude}`
    );

    
    setWeatherReport((prevData) => ({
      ...prevData,
      current: current,
      location: location,
    }));
    // console.log(WeatherReport.current);
    // console.log(WeatherReport.location);
  }
  // setTimeout(() => {
  // }, 5000);

  return (
    <button
      onClick={currentLocationSubmit}
      className="flex items-center justify-center gap-2 shadow-xl rounded-xl bg-[#414097] text-white px-3 mx-[12px]"
      type="submit"
    >
      <i className="fa-sharp fa-solid fa-location-crosshairs"></i>
      <span className="hidden md:block">current Location</span>
    </button>
  );
};

export default CurrentLocation;
