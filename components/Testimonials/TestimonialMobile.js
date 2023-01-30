import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const TestimonialMobile = ({ profile, message, name }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full h-auto text-center rounded-[10px]  bg-white ">
      <div className="rounded-full z-10  bg-brown w-40 h-40 flex justify-center items-center m-auto">
        <div className="rounded-full w-32 h-32 z-10 border-[5px] border-solid border-white box-content">
          <Image
            src={profile}
            alt="EaseAutoService Teams Profile Picture"
            width={80}
            height={80}
            objectFit="cover"
            className="rounded-full z-20 border-[5px] border-solid border-white box-content"
            loading="lazy"
          />
        </div>
      </div>
      <div className=" rounded-[5px] bg-red w-[50px] mt-1 h-[6px] m-auto" />
      <div className="mt-4 lg:px-12">
        <p className="text-2xs md:text-xs text-black inline-block testimonialFeedback lg:w-4/5 pb-8">
          {readMore ? (
            <span>
              {message}{" "}
              <span
                onClick={() => setReadMore(false)}
                className=" font-bold text-gray-500 cursor-pointer"
              >
                {" "}
                Read less ....
              </span>
            </span>
          ) : (
            <span>
              {message.substring(0, 300)}{" "}
              <span
                onClick={() => setReadMore(true)}
                className=" font-bold text-gray-500 cursor-pointer"
              >
                Read More ....
              </span>
            </span>
          )}
        </p>
      </div>
      <h5 className="text-[inherit] font-medium font-inherit inline-block mt-8">
        {name}
      </h5>
      <style jsx>
        {`
          .testimonialFeedback:before {
            content: url("/openQuotes.png");
          }

          .testimonialFeedback:after {
            content: url("/closingQuote.png");
            display: flex;
            justify-content: end;
          }
        `}
      </style>
    </div>
  );
};

export default TestimonialMobile;
