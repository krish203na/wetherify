// import { useContext, useEffect, useState } from "react";
// import "./App.css";
// import ApiContext from "./Context/ApiContext";

// function App() {
//   const { currentLocation, searchedLocation } = useContext(ApiContext);
//   const [formData, setFormData] = useState({
//     searchingCity: "",
//   });

//   let lat;
//   let log;

//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }

//   function showPosition(position) {
//     lat = position.coords.latitude;
//     log = position.coords.longitude;
//   }

//   getLocation();

//   async function onclick() {
//     let { current, location } = await currentLocation(lat, log);

//     console.log(current);
//     console.log(location);
//   }

//   let handleOnChange = (e) => {
//     let { name, value } = e.target;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   async function submitForm(e) {
//     e.preventDefault();
//     let { current, location } = await searchedLocation(formData.searchingCity);
//     // console.log(await searchedLocation(formData.searchingCity));
//     console.log(current)
//     console.log(location)
//     setFormData((prevData) => ({
//       ...prevData,
//       searchingCity: "",
//     }));

//     return <div>{location}</div>
//   };

//   return (
//     <>
//       <div id="demo" className="bg-black text-white w-[50vw] h -[50vh]">
//         <button className="w-[30vw] h -[10vh] bg-blue-700" onClick={onclick}>
//           click to search
//         </button>
//         <form onSubmit={submitForm}>
//           <input
//             className="text-black"
//             type="text"
//             name="searchingCity"
//             value={formData.searchingCity}
//             onChange={handleOnChange}
//           />
//           <button type="submit">search</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;

// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================

import React from "react";
import Navbar from "./Components/Navbar";
import HighlightCard from "./Components/HighlightCard";
import WetherInfoSection from "./Components/WeatherInfoSection/WetherInfoSection";

const App = () => {
  return (
    <div className="min-w-[370px] min-h-[100%] bg-[#f5f5f5] text-white w-full h-full sm:bg-black md:bg-pink-700 lg:bg-green-600 xl:bg-[white] 2xl:bg-red-700 ">
      <Navbar />
      <section className="w-full h-full flex lg:flex-row flex-col">
        <HighlightCard />
        <WetherInfoSection />
      </section>
    </div>
  );
};

export default App;
