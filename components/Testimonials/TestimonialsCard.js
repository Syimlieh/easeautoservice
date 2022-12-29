import Image from "next/image";
import React from "react";

const TestimonialsCard = ({ name, profile, message }) => {
  return (
    <div className="w-full h-auto text-center rounded-[10px]  bg-white ">
      <div className=" rounded-[7px] bg-red w-[60px] h-[10px] m-auto" />
      <h5 className="text-[inherit] font-medium font-inherit inline-block mt-8">
        {name}
      </h5>
      <div className="flex justify-between h-full">
        <div className="w-1/5 mt-20 h-full">
          <Image
            src={profile}
            alt="testimonial profile"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-16 w-[70%] pt-20 px-4 pr-12">
          <p className="text-lg text-black inline-block testimonialFeedback">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
