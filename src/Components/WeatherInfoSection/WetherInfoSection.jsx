import React from "react";
import ForcastDiv from "./ForcastDiv";
import TodayHeilightblock from "./TodayHeilightblock";
// import "./WeatherinfoSection.css";

const WetherInfoSection = () => {
  return (
    <aside
      id="rightSide"
      className="lg:w-[75%] w-[90%] m-auto lg:m-0 flex flex-col justify-between lg:py-10 lg:px-9"
    >
      <section className="flex items-end justify-center lg:mt-[0px] mt-[50px] lg:mb-0 lg:w-[100%] lg:m-auto h-[30%]">
        <ul
          id="WeatherINfoTable"
          className="
         flex lg:overflow-hidden overflow-scroll gap-6 items-center md:justify-around justify-start w-full p-4"
        >
          {/* <table
          id="WeatherINfoTable"
          className="flex lg:overflow-hidden overflow-scroll gap-6 items-center md:justify-around justify-start w-full"
        > */}
          {/* <tr className="min-w-[80px] odd:bg-gradient-to-br odd:from-[#8686e9] odd:from-10% py-[20px] odd:to-[#414097] odd:to-85% even:bg-gradient-to-br even:from-[#efefef] even:from-10% even:to-[#dcdcda] even:to-85% even:text-black  shadow-md rounded-xl flex flex-col justify-center items-center"> */}
          {/* <li className="min-w-[80px] odd:bg-gradient-to-br odd:from-[#8686e9] odd:from-10% py-[20px] odd:to-[#414097] odd:to-85% even:bg-gradient-to-br even:from-[#efefef] even:from-10% even:to-[#dcdcda] even:to-85% even:text-black  shadow-md rounded-xl flex flex-col justify-center items-center"> */}
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          {/* </li> */}
          {/* <li className="min-w-[80px] odd:bg-gradient-to-br odd:from-[#8686e9] odd:from-10% py-[20px] odd:to-[#414097] odd:to-85% even:bg-gradient-to-br even:from-[#efefef] even:from-10% even:to-[#dcdcda] even:to-85% even:text-black  shadow-md rounded-xl flex flex-col justify-center items-center">
            <ForcastDiv />
          </li> */}
          {/* </tr> */}
          {/* </table> */}
        </ul>
      </section>
      <section className="w-full h-[70%] p-4">
        <h1 className="h-[10%] text-xl text-black font-semibold">
          Today's Highlights
        </h1>
        <div className="flex flex-wrap w-full h-[90%] numbers justify-around gap-6">
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] text-black to-85% p-4  rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                UV index
              </h1>
            </div>
            <div>
              <h1 className="pl-[10%] text-[3rem]">
                5<span className="text-xl"></span>
              </h1>
            </div>
            <div>
              <h1>
                <span className="pl-[10%] text-xl">😒</span>good
              </h1>
            </div>
          </div>
          {/* <div className="flex-grow min-w-[160px] w-[30%] hover:bg-gradient-to-br hover:from-[#8686e9] hover:from-10% hover:to-[#414097] hover:to-85%  p-4 rounded-xl"> */}
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#d8e2ec] font-medium">
                Wind Status
              </h1>
            </div>
            <div>
              <h1 className="pl-[10%] text-[3rem]">
                26.5<span className="text-xl">Km/hr</span>
              </h1>
            </div>
            <div>
              <h1>
                <span className="pl-[10%] text-xl">😒</span>good
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Sunrise & Sunset
              </h1>
            </div>
            <div>
              <h1>
                <span className="pl-[10%] text-3xl">🌄</span>
              </h1>
              <h1>
                <span className="pl-[10%] text-3xl">🌅</span>
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] text-black to-85% p-4 rounded-xl">
            {/* <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#8686e9] from-10% to-[#414097] to-85% p-4 rounded-xl"> */}
            <div>
              <h1 className="pl-[10%] text-xl text-[#d8e2ec] font-medium">
                Humidity
              </h1>
            </div>
            <div>
              <h1 className="pl-[10%] text-[3rem]">
                26.5<span className="text-xl">%</span>
              </h1>
            </div>
            <div>
              <h1>
                <span className="pl-[10%] text-xl">👍</span>good
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Visibility
              </h1>
            </div>
            <div>
              <h1 className="pl-[10%] text-[3rem]">
                3.5 <span className="text-xl">Km</span>
              </h1>
            </div>
            <div>
              <h1>
                <span className="pl-[10%] text-xl">😒</span>Avarage
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] text-black to-85% p-4 rounded-xl">
            {/* <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#8686e9] from-10% to-[#414097] to-85% p-4 rounded-xl"> */}
            <div>
              <h1 className="pl-[10%] text-xl text-[#d8e2ec] font-medium">
                Air Quality
              </h1>
            </div>
            <div>
              <h1 className="pl-[10%] text-[3rem]">3.5</h1>
            </div>
            <div>
              <h1>
                <span className="pl-[10%] text-xl">👎</span>Unhelthy
              </h1>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default WetherInfoSection;
