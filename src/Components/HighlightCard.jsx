import React, { useContext, useState, useEffect } from "react";
import ApiContext from "../Context/ApiContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HighlightCard = () => {
  const { WeatherReport, setWeatherReport } = useContext(ApiContext);

  function getResult(dataFunc) {
    if (WeatherReport.forecast.forecastday.length !== 0) {
      return dataFunc();
    } else {
      console.log("not working");
    }
  }

  useEffect(() => {
    let t1 = gsap.timeline();
    gsap.fromTo(
      ".animation_enter",
      {
        opacity: 0,
        y: 30,
      },
      {
        duration: 0.6,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".animation_enter2",
      {
        opacity: 0,
        y: 30,
      },
      {
        duration: 0.6,
        delay: 0.2,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".animation_enter3",
      {
        opacity: 0,
        y: 30,
      },
      {
        duration: 0.6,
        delay: 0.4,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".animation_enter4",
      {
        opacity: 0,
        y: 30,
      },
      {
        duration: 0.6,
        delay: 0.6,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".animation_enter5",
      {
        opacity: 0,
        y: 30,
      },
      {
        duration: 0.6,
        delay: 0.8,
        opacity: 1,
        y: 0,
      }
    );
  });

  return (
    <aside
      id="leftSide"
      className="lg:w-[30%] lg:m-0 m-auto xl:w-[25%] w-[90%] lg:min-h-[99.6vh] h-[100%] relative bg-none lg:bg-gradient-to-br from-[#8686e9] from-20%  to-[#414097] to-75% lg:rounded-e-xl lg:rounded-s-none rounded-xl drop-shadow-[10px_10px_10px_rgba(0,0,0,0.15)]"
    >
      <div
        id="HighlightImg"
        className="lg:py-[25px] pb-[30px] pt-0 lg:mt-8 mt-0 overflow-hidden absolute md:top-[0px] md:-left-[140px] sm:-left-[140px] -left-[20vw] md:w-[80vw]  w-[90vw] lg:w-[100%] lg:static"
      >
        <img
          className="w-[full] lg:drop-shadow-[10px_10px_10px_rgba(0,0,0,0.15)] drop-shadow-[10px_10px_10px_rgba(0,0,0,0.30)]"
          src={getResult(
            () => `.${WeatherReport.current.condition.icon.slice(20, 52)}`
          )}
          alt=""
        />
      </div>
      <div className="lg:bg-none lg:p-0 bg-gradient-to-br from-[#8686e9] from-30%  to-[#414097] to-95%  py-[20px] rounded-xl lg:mt-0 sm:mt-[60px] mt-[4vh]">
        <div
          id="HighlightParameter"
          className="sm:w-[70%] w-[100%] sm:px-0 sm:p-3 px-3 xl:w-[70%] sm:m-auto md:my-[15px] bg-[f4f1e8] flex flex-col lg:items-start items-end"
        >
          <h1 className="animation_enter numbers xl:text-[5.5vw] lg:text-[6vw] md:text-[9vw] sm:text-[11vw] text-[9vw] sm:mr-0 font-semibold sm:mb-4 mb-0 leading-none lg:w-full w-[45%] text-right lg:text-left ">
            {getResult(() => `${WeatherReport.current.temp_c}*`)}
            <span className="xl:text-[4vw] md:text-[6vw]">C</span>
            <h1 className="md:text-3xl text-xl text-[#e4eaea] truncate">
              {getResult(() => WeatherReport.current.condition.text)}
            </h1>
          </h1>
          <div className="text-left sm:my-4 lg:w-full sm:w-[45%] w-[45%]">
            <div className="animation_enter2 opacity-0 flex gap-3 mb-3 items-center">
              <i className="fa-solid fa-location-dot sm:text-xl text-lg"></i>
              <h1
                className="numbers truncate xl:text-[1.8vw] lg:text-[2.5vw] sm:text-[3vw] text-[4vw] leading-tight "
                title={getResult(
                  () =>
                    `${WeatherReport.location.name}, ${WeatherReport.location.country}`
                )}
              >
                {getResult(
                  () =>
                    `${WeatherReport.location.name}, ${WeatherReport.location.country}`
                )}
              </h1>
            </div>
            <div className="animation_enter3 opacity-0 flex gap-3 mb-3 items-center">
              <i className="fa-solid fa-timer sm:text-xl text-lg"></i>
              <h1
                className={`numbers truncate xl:text-[1.8vw] lg:text-[2.5vw] sm:text-[3vw] text-[4vw] leading-tight `}
              >
                {getResult(() => WeatherReport.location.localtime.slice(0, 10))}
              </h1>
            </div>
          </div>
        </div>
        <div
          id="HeighlightAlerts"
          className="items-center w-[78%] md:flex gap-4 lg:gap-0 m-auto md:my-[15px] sm:flex lg:flex-col hidden lg:items-start items-center"
        >
          <div className="animation_enter4 opacity-0 flex lg:flex-row flex-col lg:justify-between justify-around lg:gap-3 lg:h-full items-center  my-2 rounded-xl ">
            <h1 className="flex items-center gap-4">
              <span className="text-xl font-semibold taex-[#dcdcda]">
                <span className="text-2xl">🤒</span>
                max temp:
              </span>
              <span className="text-2xl font-semibold text-[#dcdcda]">
                {getResult(
                  () =>
                    `     ${WeatherReport.forecast.forecastday[0].day.maxtemp_c}`
                )}
              </span>
            </h1>
          </div>
          <div className="animation_enter5 opacity-0 flex lg:flex-row flex-col lg:justify-between justify-around lg:gap-3 lg:h-full sm:items-center  my-2 rounded-xl ">
            <h1 className="flex items-center sm:gap-6 gap-4">
              <span className="text-xl font-semibold taex-[#dcdcda]">
                <span className="text-2xl">🥶</span>min temp:
              </span>
              <span className="text-2xl font-semibold taex-[#dcdcda]">
                {getResult(
                  () =>
                    `     ${WeatherReport.forecast.forecastday[0].day.mintemp_c}`
                )}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HighlightCard;
