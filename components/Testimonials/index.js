import Image from "next/image";
import TestimonialsCard from "./TestimonialsCard";
//react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { data } from "./testimonialsData";
import { useWindowSize } from "hooks/useWindowSize";
import TestimonialMobile from "./TestimonialMobile";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="h-[52px] w-[52px] lg:w-[77px] lg:h-[77px] hidden xs:block absolute top-12 lg:top-1/2 left-12 lg:-left-32 transform -translate-y-1/2 cursor-pointer"
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
      className="h-[52px] w-[52px]  lg:w-[77px] lg:h-[77px] hidden xs:block absolute top-12 lg:top-1/2 right-4 lg:-right-32 transform -translate-y-1/2 cursor-pointer z-10"
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

const Testimonials = () => {
  const width = useWindowSize();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="flex flex-col p-[4rem_0] box-border items-center justify-start gap-[8rem] text-center text-2xl text-black font-poppins">
      <div className="relative shrink-0 flex flex-col">
        <h2 className="text-lg lg:text-[3.5rem] font-semibold font-outfit inline-block text-brown">
          Testimonials
        </h2>
        <h4 className="text-2xs lg:text-sm font-semibold font-inherit inline-block">
          What our customers says
        </h4>
      </div>
      <div className="relative w-full text-left text-gray-400 font-inter">
        <Slider
          {...settings}
          className="shadow-[10px_10px_10px_5px_rgba(0,_0,_0,_0.25)] p-12 pb-20 rounded-[10px]"
        >
          {data &&
            data.map((item) =>
              width < 1024 ? (
                <TestimonialMobile
                  key={item.id}
                  name={item.name}
                  profile={item.profile}
                  message={item.message}
                />
              ) : (
                <TestimonialsCard
                  key={item.id}
                  name={item.name}
                  profile={item.profile}
                  message={item.message}
                />
              )
            )}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
