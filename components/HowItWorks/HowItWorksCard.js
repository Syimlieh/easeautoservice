import React from "react";

const HowItWorksCard = ({ number, message, color }) => {
  const bgStyle = {
    backgroundColor: color,
  };
  return (
    <div className="w-[25rem] h-[32rem]">
      <div className="w-[75.89px] h-[75px] relative">
        <span
          className="inline-block h-full w-full rounded-full"
          style={bgStyle}
        ></span>
        <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 trans font-medium inline-block w-[11.13px]">
          {number}
        </div>
      </div>
      <div className="text-base text-black mt-28 pr-4">{message}</div>
    </div>
  );
};

export default HowItWorksCard;
