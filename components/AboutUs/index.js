import React from "react";
import AboutTeams from "./AboutTeams";
import { data } from "../common/teamsData";
import Image from "next/image";
//react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AboutTeamsMobile from "./AboutTeamsMobile";
import { useWindowSize } from "hooks/useWindowSize";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-[77px] h-[77px] hidden lg:block absolute top-1/2 -left-32 transform -translate-y-1/2 cursor-pointer"
    >
      <Image
        unoptimized
        src="/testimonial-back-arrow.svg"
        alt="testimonial back arrow"
        width={100}
        height={100}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-[77px] h-[77px] hidden lg:block absolute top-1/2 -right-32 transform -translate-y-1/2 cursor-pointer"
    >
      <Image
        unoptimized
        src="/testimonial-next-arrow.svg"
        alt="testimonial back arrow"
        width={100}
        height={100}
      />
    </div>
  );
}

const AboutComponent = () => {
  const width = useWindowSize();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    // autoplay: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="rounded-[10px] bg-white shadow-[10px_10px_10px_5px_rgba(0,_0,_0,_0.25)] p-[4rem_2rem] xs:p-[4rem_5rem] lg:p-[4rem_17rem] box-border items-center  text-2xl">
        <h2 className="relative text-lg lg:text-[3.5rem] font-semibold font-inherit inline-block">
          <span>Our</span>
          <span className="text-brown"> MOTIVES</span>
        </h2>
        <div className="w-full h-auto text-2xs mt-24 mb-8">
          <p className="mb-8">
            At EaseAuto, our mission is to provide a simple and stress-free way
            for individuals to sell their used cars. We understand that selling
            a car can be a time-consuming and overwhelming process, which is why
            we have created a service that takes the hassle out of it.
          </p>
          <p className="mb-8">
            Our team is dedicated to providing fair and competitive offers for
            used cars, and we handle all the paperwork and logistics for you.
            Our goal is to make the process as easy and convenient as possible,
            so you can focus on other things and get the most value out of your
            used car.
          </p>
          <p className="">
            We are committed to providing exceptional customer service and
            making sure our customers are satisfied with their experience. Thank
            you for choosing EaseAuto and we look forward to helping you sell
            your used car.
          </p>
        </div>
      </div>
      <section className="flex flex-col mt-24 p-[4rem_0] box-border items-center justify-start gap-[8rem] text-center text-2xl text-black font-poppins">
        <div className="relative shrink-0 flex flex-col">
          <h2 className="text-lg lg:text-[3.5rem] font-semibold font-outfit inline-block text-brown">
            <span className="text-black">Meet our</span>
            <span>TEAMS</span>
          </h2>
        </div>
        <div className="relative w-full text-left text-gray-400 font-inter">
          <Slider
            {...settings}
            className="shadow-[10px_10px_10px_5px_rgba(0,_0,_0,_0.25)] p-12 pb-20 rounded-[10px]"
          >
            {data &&
              data.map((item) =>
                width < 1024 ? (
                  <AboutTeamsMobile
                    key={item.id}
                    name={item.name}
                    profile={item.profile}
                    message={item.message}
                    role={item.role}
                  />
                ) : (
                  <AboutTeams
                    key={item.id}
                    name={item.name}
                    profile={item.profile}
                    message={item.message}
                    role={item.role}
                  />
                )
              )}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default AboutComponent;
