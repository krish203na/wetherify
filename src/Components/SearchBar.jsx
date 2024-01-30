import React, { useContext, useState } from "react";
import ApiContext from "../Context/ApiContext";

const SearchBar = () => {

    const [SearchingData, setSearchingData] = useState({
        searchingLocation: ""
    })

    const {searchedLocation } = useContext(ApiContext);

    function handleInputChange(e)
    {
        const{name,value} = e.target

        setSearchingData((previousData)=>({...previousData, [name]:value}))

        // console.log(value)
    }

    async function searchSubmit(e) {
        e.preventDefault();
        let { current, location } = await searchedLocation(
          SearchingData.searchingLocation
        );
        console.log(current)
        console.log(location)
    }


  return (
    <form className="flex flex-wrap" onSubmit={searchSubmit}>
      <input
        className="rounded-s-xl px-3 bg-[#ffffff5c] shadow-lg w-[40vw] md:w-[35vw]"
        type="text"
        name="searchingLocation"
        value={SearchingData.searchingLocation}
        onChange={handleInputChange}
      />
      <button
        className="rounded-e-xl bg-[#414097] text-white shadow-lg px-5 "
        type="submit"
      >
        <i className="fa-solid fa-telescope"></i>
      </button>
    </form>
  );
};

export default SearchBar;
