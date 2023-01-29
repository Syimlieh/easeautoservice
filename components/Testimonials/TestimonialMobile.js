import React from "react";

const TestimonialMobile = () => {
  return (
    <div className="w-full h-auto text-center rounded-[10px]  bg-white ">
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
    </div>
  );
};

export default TestimonialMobile;
