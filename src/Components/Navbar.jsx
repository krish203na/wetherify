import React from "react";
import SearchBar from "./SearchBar";
import CurrentLocation from "./CurrentLocation";


const Navbar = () => {
  return (
    <nav className="w-full p-[10px] flex justify-between">
      <div className="flex gap-2 justify-center items-center text-2xl">
        <img className="w-[60px] rounded-full" src="./logo.png" alt="" />
        <h1 id="appName" className=" md:block hidden">
          Wetherif!
        </h1>
      </div>
      <div className="flex lg:gap-[18vw]">
        <SearchBar />
        <CurrentLocation />
      </div>
    </nav>
  );
};

export default Navbar;
