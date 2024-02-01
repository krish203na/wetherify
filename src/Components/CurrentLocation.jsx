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
      console.log(current);
      console.log(location);
      console.log(forecast);
      console.log(alerts);
    }
    starter();
    // }, 0);
  }, []);
  async function currentLocationSubmit(e) {
    e.preventDefault();
    let { current, location, forecast, alerts } = await searchedLocation(
      `${locationData.latitude},${locationData.longitude}`
    );

    setWeatherReport((prevData) => ({
      ...prevData,
      current: current,
      location: location,
      forecast: forecast,
      alerts: alerts,
    }));
    // console.log(WeatherReport.current);
    // console.log(WeatherReport.location);
  }
  // setTimeout(() => {
  // }, 5000);

  return (
    <div className="flex items-center justify-center gap-2 h-full">
      <a
        target="blank"
        title="Author: Krishna"
        href="https://github.com/krish203na"
        className="w-[50px] rounded-full overflow-hidden"
      >
        <img src="./Krishna.jpeg" alt="" />
      </a>
      <button
        onClick={currentLocationSubmit}
        className="flex items-center justify-center h-full gap-2 shadow-xl rounded-xl bg-[#414097] text-white px-3 mx-[12px]"
        type="submit"
      >
        <i className="fa-sharp fa-solid fa-location-crosshairs"></i>
        <span className="hidden md:block">current Location</span>
      </button>
    </div>
  );
};

export default CurrentLocation;
