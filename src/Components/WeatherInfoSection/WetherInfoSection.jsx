import React, { useEffect } from "react";
import ForcastDiv from "./ForcastDiv";
import { useContext } from "react";
import ApiContext from "../../Context/ApiContext";
import gsap from "gsap";

const WetherInfoSection = () => {
  const { WeatherReport, setWeatherReport } = useContext(ApiContext);

  let uvindex = () => {
    if (parseInt(WeatherReport.current.uv) <= 2) {
      return "😀 Excellent";
    } else if (
      parseInt(WeatherReport.current.uv) >= 2 &&
      parseInt(WeatherReport.current.uv) < 4
    ) {
      return "🙂 Good";
    } else if (
      parseInt(WeatherReport.current.uv) >= 4 &&
      parseInt(WeatherReport.current.uv) < 6
    ) {
      return "👍 avarage";
    } else if (
      parseInt(WeatherReport.current.uv) >= 6 &&
      parseInt(WeatherReport.current.uv) < 8
    ) {
      return "👎 not healty";
    } else if (
      parseInt(WeatherReport.current.uv) >= 8 &&
      parseInt(WeatherReport.current.uv) < 10
    ) {
      return "🥵 critical";
    } else if (parseInt(WeatherReport.current.uv) > 10) {
      return "🥵 critical";
    }
  };

  function humiditylevel() {
    if (parseInt(WeatherReport.current.humidity) <= 10) {
      return "🥶 Vary low";
    } else if (
      parseInt(WeatherReport.current.humidity) > 10 &&
      parseInt(WeatherReport.current.humidity) <= 20
    ) {
      return "😰 low";
    } else if (
      parseInt(WeatherReport.current.humidity) > 20 &&
      parseInt(WeatherReport.current.humidity) <= 30
    ) {
      return "😥 modrate";
    } else if (
      parseInt(WeatherReport.current.humidity) > 30 &&
      parseInt(WeatherReport.current.humidity) <= 40
    ) {
      return "🙂 average";
    } else if (
      parseInt(WeatherReport.current.humidity) > 40 &&
      parseInt(WeatherReport.current.humidity) <= 60
    ) {
      return "😀 healty";
    } else if (
      parseInt(WeatherReport.current.humidity) > 60 &&
      parseInt(WeatherReport.current.humidity) <= 70
    ) {
      return "😥 high";
    } else if (
      parseInt(WeatherReport.current.humidity) > 70 &&
      parseInt(WeatherReport.current.humidity) <= 80
    ) {
      return "🤒 vary high";
    } else if (
      parseInt(WeatherReport.current.humidity) > 80 &&
      parseInt(WeatherReport.current.humidity) <= 90
    ) {
      return "😨 unhealty";
    } else if (
      parseInt(WeatherReport.current.humidity) > 90 &&
      parseInt(WeatherReport.current.humidity) <= 100
    ) {
      return "🥵 critical";
    }
  }

  function visibility() {
    if (parseInt(WeatherReport.current.vis_km) <= 5) {
      return `💨 foggy`;
    } else if (
      parseInt(WeatherReport.current.vis_km) > 5 &&
      parseInt(WeatherReport.current.vis_km) <= 10
    ) {
      return `👍 modrate`;
    } else if (
      parseInt(WeatherReport.current.vis_km) > 10 &&
      parseInt(WeatherReport.current.vis_km) <= 15
    ) {
      return `😐 avarage`;
    } else if (
      parseInt(WeatherReport.current.vis_km) > 15 &&
      parseInt(WeatherReport.current.vis_km) <= 20
    ) {
      return `👍 fine`;
    } else if (
      parseInt(WeatherReport.current.vis_km) > 20 &&
      parseInt(WeatherReport.current.vis_km) <= 25
    ) {
      return `🙂 good`;
    } else if (
      parseInt(WeatherReport.current.vis_km) > 25 &&
      parseInt(WeatherReport.current.vis_km) <= 30
    ) {
      return `😀 vary good`;
    } else if (parseInt(WeatherReport.current.vis_km) > 30) {
      return `🤩 Excellent`;
    }
  }

  function checkair() {
    return Object.values(WeatherReport.current.air_quality);
  }

  function getResult(dataFunc) {
    if (WeatherReport.forecast.forecastday.length !== 0) {
      return dataFunc();
    } else {
      console.log("not working");
    }
  }

  function air() {
    if (WeatherReport.forecast.forecastday.length !== 0) {
      return checkair()[6];
    } else {
      console.log("not working");
    }
  }

  useEffect(() => {
    gsap.fromTo(
      ".enter1",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    );
    gsap.fromTo(
      ".enter2",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 0.7,
      }
    );
  });

  return (
    <aside
      id="rightSide"
      className="lg:w-[75%] w-[90%] m-auto lg:m-0 flex flex-col justify-between lg:py-4 lg:pt-[60px] lg:px-9"
    >
      <section className="flex items-end justify-center lg:mt-[0px] mt-[50px] lg:mb-0 lg:w-[100%] lg:m-auto h-[30%]">
        <ul
          id="WeatherINfoTable"
          className="
         flex lg:overflow-hidden overflow-scroll lg:gap-4 gap-6 items-center xl:justify-around justify-start w-full p-4"
        >
          {WeatherReport.forecast.forecastday.map((e, i) => {
            return (
              <ForcastDiv
                key={i}
                update={e.day.condition.text}
                no={getResult(
                  () =>
                    `.${WeatherReport.forecast.forecastday[
                      i
                    ].day.condition.icon.slice(20, 52)}`
                )}
                date={getResult(
                  () =>
                    `${WeatherReport.forecast.forecastday[i].date.slice(
                      8,
                      10
                    )}-${WeatherReport.forecast.forecastday[i].date.slice(
                      5,
                      7
                    )}`
                )}
              />
            );
          })}
        </ul>
      </section>
      <section className="w-full h-[70%] p-4">
        <h1 className="h-[10%] text-xl text-black font-semibold">
          Today's Highlights
        </h1>
        <div className="flex flex-wrap w-full h-[90%] numbers justify-around gap-6">
          <div className="flex-grow max-h-[200px] min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4  rounded-xl ">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                UV index
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {getResult(() => WeatherReport.current.uv)}
                <span className="text-xl"></span>
              </h1>
            </div>
            <div>
              <h1 className="enter2 pl-[10%] text-lg">{uvindex()}</h1>
            </div>
          </div>
          <div className="flex-grow max-h-[200px] min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Wind Status
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {getResult(() => WeatherReport.current.wind_kph)}
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
          <div className="flex-grow max-h-[200px] min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Sunrise & Sunset
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 truncate">
                <span className="pl-[10%] lg:text-3xl sm:text-xl text-3xl ">
                  🌄
                  <span className="text-2xl pl-[5%]">
                    {getResult(
                      () => WeatherReport.forecast.forecastday[0].astro.sunrise
                    )}
                  </span>
                </span>
              </h1>
              <h1 className="enter2 truncate opacity-0">
                <span className="pl-[10%] lg:text-3xl sm:text-xl text-3xl ">
                  🌅
                  <span className="text-2xl pl-[5%]">
                    {getResult(
                      () => WeatherReport.forecast.forecastday[0].astro.sunset
                    )}
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <div className="flex-grow max-h-[200px] min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
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
                <span className="pl-[10%] text-xl">{humiditylevel()}</span>
              </h1>
            </div>
          </div>
          <div className="flex-grow max-h-[200px] min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
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
                <span className="pl-[10%] text-xl">{visibility()}</span>
              </h1>
            </div>
          </div>
          <div className="flex-grow max-h-[200px] min-w-[160px] w-[30%] bg-gradient-to-br from-[#d8e2ec] from-30% to-[#9bb0db] shadow-lg text-black to-85% p-4 rounded-xl">
            <div>
              <h1 className="pl-[10%] text-xl text-[#646464] font-medium">
                Air Quality
              </h1>
            </div>
            <div>
              <h1 className="enter1 opacity-0 pl-[10%] text-[3rem]">
                {air()}
              </h1>
            </div>
            <div>
              <h1 className="enter2 ">
                <span className="pl-[10%] text-xl">
                  CO2 level:
                  {getResult(() => ` ${WeatherReport.current.air_quality.co}`)}
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default WetherInfoSection;
