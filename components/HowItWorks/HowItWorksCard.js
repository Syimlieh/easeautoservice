import React from "react";

const HowItWorksCard = ({ number, message, color }) => {
  const bgStyle = {
    backgroundColor: color,
  };
  return (
    <div className="w-[25rem] h-auto py-8">
      <div className="h-24 w-24 lg:w-28  lg:h-28 relative">
        <span
          className="h-full w-full rounded-full flex justify-center items-center"
          style={bgStyle}
        >
          {number}
        </span>
      </div>
      <p className=" text-3xs lg:text-xs  text-black mt-16 pr-4">{message}</p>
    </div>
  );
};

export default HowItWorksCard;
