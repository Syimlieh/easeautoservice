import Image from "next/image";
import React from "react";

const AboutTeams = ({ name, profile, message, role }) => {
  return (
    <div className="w-full h-auto text-center rounded-[10px]  bg-white">
      <div className=" rounded-[7px] bg-red w-[60px] h-[10px] m-auto" />
      <div className="w-max m-auto">
        <h5 className="text-[inherit] text-left font-medium font-inherit inline-block mt-8">
          {name}
        </h5>
        <p className="text-xs font-hind-kochi text-left">{role}</p>
      </div>
      <div className="flex justify-start h-full">
        <div className="w-1/5 mt-20 h-full ">
          <span className="relative w-48 h-48 bg-brown rounded-full flex justify-center items-center float-right">
            <span className="absolute -top-8 -left-12 inline-block w-32 h-32 bg-brown rounded-full "></span>
            <div className="rounded-full w-40 h-40 z-10 border-[5px] border-solid border-white box-content">
              <Image
                unoptimized
                src={profile}
                alt="EaseAutoService Teams Profile Picture"
                width={200}
                height={200}
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </span>
        </div>
        <div className="mt-16 w-[70%] px-12">
          <p className="text-xs  text-black inline-block testimonialFeedback text-center w-4/5 pb-8">
            {message}
          </p>
        </div>
      </div>
      <div className=" m-auto flex item-center justify-center gap-12 mt-12 ">
        <Image
          unoptimized
          src="/social/instagram@2x.png"
          alt="EaseautoService team Instagram profile"
          width={30}
          height={30}
          objectFit="cover"
          className="rounded-full cursor-pointer"
        />
        <Image
          unoptimized
          src="/social/facebook@2x.png"
          alt="EaseautoService team facebook profile"
          width={30}
          height={30}
          objectFit="cover"
          className="rounded-full cursor-pointer"
        />
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

export default AboutTeams;
