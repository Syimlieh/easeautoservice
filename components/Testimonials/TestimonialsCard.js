import Image from "next/image";
import React from "react";

const TestimonialsCard = ({ name, profile, message }) => {
  return (
    <div className="w-full h-auto text-center rounded-[10px]  bg-white ">
      <div className=" rounded-[7px] bg-red w-[60px] h-[10px] m-auto" />
      <h5 className="text-[inherit] font-medium font-inherit inline-block mt-8">
        {name}
      </h5>
      <div className="flex justify-start h-full">
        <div className="w-1/5 mt-20 h-full ">
          <span className="relative w-48 h-48 bg-brown rounded-full flex justify-center items-center float-right">
            <span className="absolute -top-8 -left-12 inline-block w-32 h-32 bg-brown rounded-full "></span>
            <div className="rounded-full w-40 h-40 z-10 border-[5px] border-solid border-white box-content">
              <Image
                src={profile}
                alt="EaseAutoService Teams Profile Picture"
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full"
                loading="lazy"
              />
            </div>
          </span>
        </div>
        <div className="mt-4 w-[70%] px-12">
          <p className="text-xs text-black inline-block testimonialFeedback w-4/5 pb-8">
            {message}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .testimonialFeedback:before {
            content: url("/openQuotes.png");
          }

          .testimonialFeedback:after {
            content: url("/closingQuote.png");
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialsCard;
