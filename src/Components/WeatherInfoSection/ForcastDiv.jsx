import gsap from "gsap";
import React, { useEffect } from "react";

const ForcastDiv = (props) => {

  useEffect(() => {
    gsap.fromTo(
      "#forCastList",
      {
        position: "absolute",
        // x:-1000,
        rotateY:0
      },
      {
        position: "static",
        rotateY:360,
        x:0,
      
        duration: 1.5,
        transitionTimingFunction:"ease-in-out",
      }
    );
  });

  return (
    <li id="forCastList" className="opacity-100 min-w-[80px] max-w-[90px] max-h-[110px] odd:bg-gradient-to-br odd:from-[#8686e9] odd:from-10% py-[20px] odd:to-[#414097] odd:to-85% even:bg-gradient-to-br even:from-[#d8e2ec] even:from-30% even:to-[#9bb0db] even:to-85% even:text-black  shadow-lg rounded-xl flex flex-col justify-center items-center">
      <img className="w-[50px]" src={props.no} alt="" />
      <h1 title={props.update} className=" truncate w-[85%] text-center">
        {props.update}
      </h1>
    </li>
  );
};

export default ForcastDiv;
