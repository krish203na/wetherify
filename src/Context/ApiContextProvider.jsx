import React, { useState } from "react";
import ApiContext from "./ApiContext";

const ApiContextProvider = ({ children }) => {

  async function currentLocation(lat,log) {
    try {
      let apiResponce = await fetch(`https://api.weatherapi.com/v1/current.json?key=ddb2c3102a954812b3f132205242601&q=${lat},${log}&aqi=yes`);

      if (!apiResponce.ok) {
        console.log("Not fetchin the value");
      }

      let data = await apiResponce.json();


      return data
    } catch {
    //   console.error("Fetch Error", error);
    console.log("catch")
    }
  }

  async function searchedLocation(searchingCity){
   try {
     let apiResponce = await fetch(
       `https://api.weatherapi.com/v1/current.json?key=ddb2c3102a954812b3f132205242601&q=${searchingCity}&aqi=yes`
     );

     if (!apiResponce.ok) {
       console.log("Not fetchin the value");
     }

     let data = await apiResponce.json();

     return data;
   } catch {
     //   console.error("Fetch Error", error);
     console.log("catch");
   }
  }

  return (
    <ApiContext.Provider value={{ currentLocation, searchedLocation }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
