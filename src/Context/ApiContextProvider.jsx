import React, { useState } from "react";
import ApiContext from "./ApiContext";

const ApiContextProvider = ({ children }) => {

  const [WeatherReport, setWeatherReport] = useState({
    current: {},
    location: {},
    forecast: {
      forecastday:[],
    },
    alerts: {},
  });

  // async function currentLocation(lat,log) {
  //   try {
  //     let apiResponce = await fetch(`https://api.weatherapi.com/v1/current.json?key=ddb2c3102a954812b3f132205242601&q=${lat},${log}&aqi=yes`);

  //     if (!apiResponce.ok) {
  //       console.log("Not fetchin the value");
  //     }

  //     let data = await apiResponce.json();


  //     return data
  //   } catch {
  //   //   console.error("Fetch Error", error);
  //   console.log("catch")
  //   }
  // }

  async function searchedLocation(searchingCity){
   try {
     let apiResponce = await fetch(
       `http://api.weatherapi.com/v1/forecast.json?key=ddb2c3102a954812b3f132205242601&q=${searchingCity}&days=7&aqi=yes&alerts=yes`
     );

     if (!apiResponce.ok) {
      //  console.log("Not fetchin the value");
       alert("this city is not present")
     }

     let data = await apiResponce.json();
     console.log(data.forecast.forecastday[0].astro.sunrise);
     return data;
     
   } catch {
     //   console.error("Fetch Error", error);
     console.log("catch");
   }
  }

  return (
    <ApiContext.Provider
      value={{
        // currentLocation,
        searchedLocation,
        WeatherReport,
        setWeatherReport,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
