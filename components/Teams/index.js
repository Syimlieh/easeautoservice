import React from "react";
import { data } from "components/common/teamsData";
import TeamsCard from "./TeamsCard";
import Slider from "react-slick";

const Teams = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 584,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="h-auto  mt-32 flex flex-col p-[4rem_0] box-border items-center justify-start gap-[8rem] text-center text-3xl text-black font-outfit">
      <h2 className=" text-lg lg:text-2xl font-semibold font-outfit inline-block ">
        <span>Meets Our</span>
        <span className="text-brown"> Teams</span>
      </h2>
      <div className="relative w-full shrink-0  font-alike">
        <Slider {...settings} className="">
          {data &&
            data.map((item) => (
              <TeamsCard
                key={item.id}
                profile={item.profile}
                name={item.name}
                role={item.role}
                message={item.message}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Teams;
