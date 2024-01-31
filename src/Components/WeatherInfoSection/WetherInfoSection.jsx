import React, { useEffect } from "react";
import ForcastDiv from "./ForcastDiv";
import { useContext } from "react";
import ApiContext from "../../Context/ApiContext";
import gsap from "gsap";

// import "./WeatherinfoSection.css";

const WetherInfoSection = () => {
  const { WeatherReport, setWeatherReport } = useContext(ApiContext);
  // let { ekfunction, setekfunction } = useContext(()=>{});

  let sunrise = () =>{
    if (WeatherReport.forecast.forecastday.length !== 0) {
      return WeatherReport.forecast.forecastday[0].astro.sunrise;
    }
    else{
      console.log("it is empty");
    }
  }
  let sunset = () =>{
    if (WeatherReport.forecast.forecastday.length !== 0) {
      return WeatherReport.forecast.forecastday[0].astro.sunset;
    }
    else{
      console.log("it is empty");
    }
  }
  
  // let animation = "";
  let uvindex = () =>{
    if (parseInt(WeatherReport.current.uv) <= 2) {
      return('😀 Excellent')
    }
    else if (parseInt(WeatherReport.current.uv) <= 4) {
      return("🙂 Good")
    }
    else if (parseInt(WeatherReport.current.uv) <= 6) {
      return("👍 avarage")
    }
    else if (parseInt(WeatherReport.current.uv) <= 8) {
      return("👎 not healty")
    }
    else if (parseInt(WeatherReport.current.uv) <= 10) {
      return("😥 bad")
    }
    else if (parseInt(WeatherReport.current.uv) > 10) {
      return("🥵 critical")
    }
   
  }

  function checkair(){
    return Object.values(WeatherReport.current.air_quality);
    // .find(
    //   (key) => WeatherReport.current.air_quality[key] === "us-epa-index"
    // )

    // console.log("work: ",
    //   Object.keys(WeatherReport.current.air_quality).find(
    //     (key) => WeatherReport.current.air_quality[key] === "us-epa-index"
    //   )
    // );

    
  }

  function air(){
    if(WeatherReport.forecast.forecastday.length !== 0){
      // console.log("woking")
      return checkair()[6] ;
    }
    else{
      console.log("not working")
    }
  }
  
  useEffect(() => {
    gsap.fromTo(
      ".enter1",
      {
        // position: "absolute",
        opacity: 0,
        y: 50,
        // position:"absolute",
      },
      {
        opacity: 1,
        // position: "static",
        y: 0,
        duration:.8,
        // delay: 1,
      }
    );
    gsap.fromTo(
      ".enter2",
      {
        // position: "absolute",
        opacity: 0,
        x: 50,
        // position:"absolute",
      },
      {
        opacity: 1,
        // position: "static",
        x: 0,
        duration:.8,
        delay: .7,
      }
    );



    
  });

  // useEffect(()=>{

  //   let play = setTimeout(() =>
  //     {
  //      console.log(WeatherReport.forecast.forecastday[2]) ;
  //     }, 1000);
  // },[])

  // let astroList = WeatherReport.forecast.forecastday;
  // console.log(astroList)
  return (
    <aside
      id="rightSide"
      className="lg:w-[75%] w-[90%] m-auto lg:m-0 flex flex-col justify-between lg:py-10 lg:px-9"
    >
      <section className="flex items-end justify-center lg:mt-[0px] mt-[50px] lg:mb-0 lg:w-[100%] lg:m-auto h-[30%]">
        <ul
          id="WeatherINfoTable"
          className="
         flex lg:overflow-hidden overflow-scroll lg:gap-4 gap-6 items-center md:justify-around justify-start w-full p-4"
        >
          {/* <table
          id="WeatherINfoTable"
          className="flex lg:overflow-hidden overflow-scroll gap-6 items-center md:justify-around justify-start w-full"
        > */}
          {/* <tr className="min-w-[80px] odd:bg-gradient-to-br odd:from-[#8686e9] odd:from-10% py-[20px] odd:to-[#414097] odd:to-85% even:bg-gradient-to-br even:from-[#efefef] even:from-10% even:to-[#dcdcda] even:to-85% even:text-black  shadow-md rounded-xl flex flex-col justify-center items-center"> */}
          {/* <li className="min-w-[80px] odd:bg-gradient-to-br odd:from-[#8686e9] odd:from-10% py-[20px] odd:to-[#414097] odd:to-85% even:bg-gradient-to-br even:from-[#efefef] even:from-10% even:to-[#dcdcda] even:to-85% even:text-black  shadow-md rounded-xl flex flex-col justify-center items-center"> */}
          {WeatherReport.forecast.forecastday.map((e, i) => {
            return (
              <ForcastDiv
                key={i}
                update={e.day.condition.text}
                no={e.day.condition.icon}
              />
            );
          })}
          {/* <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv />
          <ForcastDiv /> */}
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
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4  rounded-xl ">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                UV index
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {WeatherReport.current.uv}
                <span className="text-xl"></span>
              </h1>
            </div>
            <div>
              <h1 className="enter2 pl-[10%] text-lg">{uvindex()}</h1>
            </div>
          </div>
          {/* <div className="flex-grow min-w-[160px] w-[30%] hover:bg-gradient-to-br hover:from-[#8686e9] hover:from-10% hover:to-[#414097] hover:to-85%  p-4 rounded-xl"> */}
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Wind Status
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {WeatherReport.current.wind_kph}
                <span className="text-xl">Km/hr</span>
              </h1>
            </div>
            <div>
              <h1 className="enter2 pl-[10%]">
                <span>Direction: </span>
                <span className=" text-xl">
                  {WeatherReport.current.wind_dir}
                </span>
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Sunrise & Sunset
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0">
                <span className="pl-[10%] text-3xl ">
                  🌄
                  <span className="text-2xl pl-[5%]">
                    {sunrise()}
                    {/* {WeatherReport.forecast.forecastday[0].astro.sunrise} */}
                  </span>
                </span>
              </h1>
              <h1 className="enter2 opacity-0">
                <span className="pl-[10%] text-3xl">
                  🌅
                  <span className="text-2xl pl-[5%]">
                    {sunset()}
                    {/* {WeatherReport.forecast.forecastday[0].astro.sunset} */}
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            {/* <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#8686e9] from-10% to-[#414097] to-85% p-4 rounded-xl"> */}
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Humidity
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {WeatherReport.current.humidity}
                <span className="text-xl">%</span>
              </h1>
            </div>
            <div>
              <h1 className="enter2 ">
                <span className="pl-[10%] text-xl">👍</span>good
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Visibility
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {WeatherReport.current.vis_km}
                <span className="text-xl">Km</span>
              </h1>
            </div>
            <div>
              <h1 className="enter2 ">
                <span className="pl-[10%] text-xl">😒</span>Avarage
              </h1>
            </div>
          </div>
          <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            {/* <div className="flex-grow min-w-[160px] w-[30%] bg-gradient-to-br from-[#8686e9] from-10% to-[#414097] to-85% p-4 rounded-xl"> */}
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Air Quality
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {/* {WeatherReport.current.air_quality.us}
                 */}
                {air()}
              </h1>
            </div>
            <div>
              <h1 className="enter2 ">
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
