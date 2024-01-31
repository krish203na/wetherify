import React, { useContext, useState, useEffect } from "react";
import ApiContext from "../Context/ApiContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HighlightCard = () => {
  const { WeatherReport, setWeatherReport } = useContext(ApiContext);

  useEffect(() => {
    let t1 = gsap.timeline();
    gsap.fromTo(
      ".animation_enter",
      {
        opacity: 0,
        y:30,
        // animationTimingFunction:"linear"
      },
      {
        duration: .6,
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".animation_enter2",
      {
        opacity: 0,
        y:30,
      },
      {
        duration: .6,
        delay:0.2,
        opacity: 1,
        y: 0,
        // delay:0.8
      }
    );
    gsap.fromTo(
      ".animation_enter3",
      {
        opacity: 0,
        y:30,
      },
      {
        duration: .6,
        delay:0.4,
        opacity: 1,
        y: 0,
        // delay:0.8
      }
    );
    gsap.fromTo(
      ".animation_enter4",
      {
        opacity: 0,
        y:30,
      },
      {
        duration: .6,
        delay:0.6,
        opacity: 1,
        y: 0,
        // delay:0.8
      }
    );
    gsap.fromTo(
      ".animation_enter5",
      {
        opacity: 0,
        y:30,
      },
      {
        duration: .6,
        delay:0.8,
        opacity: 1,
        y: 0,
        // delay:0.8
      }
    );
  });

  return (
    // <section className="w-full h-full flex lg:flex-row flex-col">
    <aside
      id="leftSide"
      className="lg:w-[30%] m-auto xl:w-[25%] w-[90%] lg:min-h-[99.6vh] h-[100%] relative bg-none lg:bg-gradient-to-br from-[#8686e9] from-20%  to-[#414097] to-75% lg:rounded-e-xl lg:rounded-s-none rounded-xl drop-shadow-[10px_10px_10px_rgba(0,0,0,0.15)]"
    >
      <div
        id="HighlightImg"
        className="lg:py-[25px] pb-[30px] pt-0 lg:mt-8 mt-0 overflow-hidden absolute md:top-[0px] md:-left-[120px] sm:-left-[110px] -left-[15vw] md:w-[60vw] w-[70vw] lg:w-[100%] lg:static"
      >
        <img
          className="w-full lg:drop-shadow-[10px_10px_10px_rgba(0,0,0,0.15)] drop-shadow-[10px_10px_10px_rgba(0,0,0,0.30)]"
          src="./sunnyHotAir.webp"
          alt=""
        />
      </div>
      <div className="lg:bg-none lg:p-0 bg-gradient-to-br from-[#8686e9] from-30%  to-[#414097] to-95%  py-[20px] rounded-xl lg:mt-0 sm:mt-[16vh] mt-[8vh]">
        <div
          id="HighlightParameter"
          className="sm:w-[70%] w-[100%] sm:px-0 sm:p-3 px-3 xl:w-[70%] sm:m-auto md:my-[15px] bg-[f4f1e8] flex flex-col lg:items-start items-end"
        >
          <h1 className="animation_enter numbers md:text-[6vw] sm:text-[10vw] text-[10vw] sm:mr-0 font-semibold sm:mb-4 mb-0 leading-none">
            {WeatherReport.current.temp_c}
            <span className="md:text-[4vw]">*C</span>
          </h1>
          <div className="text-left sm:my-4 ">
            <div className="animation_enter2 opacity-0 flex gap-3 mb-3 items-center">
              <i className="fa-solid fa-location-dot sm:text-xl text-lg"></i>
              <h1 className="numbers sm:text-[2vw] text-[3vw] leading-tight ">
                {WeatherReport.location.name}
              </h1>
            </div>
            <div className="animation_enter3 opacity-0 flex gap-3 ">
              <i className="fa-solid fa-timer text-xl"></i>
              <h1 className={`numbers text-[1.5vw]`}>
                {WeatherReport.location.localtime}
                {/* {WeatherReport.location.localtime.slice(0,10)} */}
              </h1>
            </div>
          </div>
        </div>
        <div
          id="HeighlightAlerts"
          className="w-[78%] m-auto md:my-[15px] sm:flex lg:flex-col hidden lg:items-start items-center"
        >
          <div className="animation_enter4 opacity-0 flex lg:flex-row flex-col lg:justify-between justify-around lg:gap-3 lg:h-full items-center  my-2 rounded-xl ">
            <img className="w-[80px]" src="./sunnyHotAir.webp" alt="" />
            <h1 className="text-lg">Rain</h1>
          </div>
          <div className="animation_enter5 opacity-0 flex lg:flex-row flex-col lg:justify-between justify-around lg:gap-3 lg:h-full sm:items-center  my-2 rounded-xl ">
            <img className="w-[80px]" src="./sunnyHotAir.webp" alt="" />
            <h1 className="text-lg">Rain</h1>
          </div>
        </div>
      </div>
    </aside>
    //   <aside id="rightSide" className="w-[75%] bg-purple-600">
    //     {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
    //     repudiandae earum eveniet exercitationem facere eaque accusamus velit
    //     doloribus unde non dignissimos expedita sequi magnam laudantium
    //     praesentium, nobis quasi. Maxime sint commodi repudiandae deserunt
    //     ratione magnam, fugit eligendi quod! Deleniti placeat recusandae totam
    //     aut reiciendis consequuntur adipisci ea consectetur, quidem fuga? */}
    //   </aside>
    // </section>
  );
};

export default HighlightCard;
