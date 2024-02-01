import React from "react";
import Navbar from "./Components/Navbar";
import HighlightCard from "./Components/HighlightCard";
import WetherInfoSection from "./Components/WeatherInfoSection/WetherInfoSection";

const App = () => {
  
  return (
    <div className="min-w-[370px] min-h-[100%] text-white w-full h-full bg-[#f4f8fa]">
      <Navbar />
      <section className="w-full h-full flex lg:flex-row flex-col">
        <HighlightCard />
        <WetherInfoSection />
      </section>
    </div>
  );
};

export default App;
