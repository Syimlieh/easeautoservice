import Image from "next/image";
import TestimonialsCard from "./TestimonialsCard";
//react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { data } from "./testimonialsData";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-[77px] h-[77px] absolute top-1/2 -left-32 transform -translate-y-1/2 cursor-pointer"
    >
      <Image
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
      className="w-[77px] h-[77px] absolute top-1/2 -right-32 transform -translate-y-1/2 cursor-pointer"
    >
      <Image
        src="/testimonial-next-arrow.svg"
        alt="testimonial back arrow"
        width={100}
        height={100}
      />
    </div>
  );
}
const Testimonials = () => {
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
        <h2 className="text-3xl font-semibold font-outfit inline-block text-brown">
          Testimonials
        </h2>
        <h4 className="text-[inherit] font-semibold font-inherit inline-block">
          What our customers says
        </h4>
      </div>
      <div className="relative w-full text-left text-gray-400 font-inter">
        <Slider
          {...settings}
          className="shadow-[10px_10px_10px_5px_rgba(0,_0,_0,_0.25)] p-12 pb-20 rounded-[10px]"
        >
          {data &&
            data.map((item) => (
              <TestimonialsCard
                name={item.name}
                profile={item.profile}
                message={item.message}
              />
            ))}
        </Slider>
      </div>
      <style jsx>
        {`
          .testimonialFeedback:before {
            content: url("/openQuotes.png");
          }

          .testimonialFeedback:after {
            content: url("/closingQuote.png");
            position: absolute;
          }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
