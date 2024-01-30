import React from "react";

const TodayHeilightblock = (props) => {
  return (
    <div className="w-[30%] bg-gradient-to-br from-[#efefef] from-10% to-[#dcdcda] text-black to-85% p-4 rounded-xl">
      <div>
        <h1 className="text-xl text-[#646464] font-medium">{props.heading}</h1>
      </div>
      <div>
        <h1 className="text-[3rem]">{props.Reading}</h1>
      </div>
      <div>
        <h1>{props.status}</h1>
      </div>
    </div>
  );
};

export default TodayHeilightblock;
