import React from "react";
import Navbar from "./Components/Navbar";
import HighlightCard from "./Components/HighlightCard";
import WetherInfoSection from "./Components/WeatherInfoSection/WetherInfoSection";

const App = () => {
  
  return (
    <div className="min-w-[370px] min-h-[100%] bg-[#f5f5f5] text-white w-full h-full sm:bg-black md:bg-pink-700 lg:bg-green-600 xl:bg-[#f4f8fa] 2xl:bg-red-700 ">
      <Navbar />
      <section className="w-full h-full flex lg:flex-row flex-col">
        <HighlightCard />
        <WetherInfoSection />
      </section>
    </div>
  );
};

export default App;
