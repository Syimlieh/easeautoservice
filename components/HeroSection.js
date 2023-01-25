import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();

  const onHeroButton2Click = useCallback(() => {
    router.push("/contact_us");
  }, [router]);

  const onHeroButton1Click = useCallback(() => {
    router.push("/car_details");
  }, [router]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="w-[1065px] h-[561px] text-left text-sm text-gray-600 font-outfit flex justify-between">
      <div className="w-[55%] h-[419px]">
        <h2 className="text-3xl border border-gray-400 font-bold font-inherit inline-block w-full text-black">
          <span>Sell Your </span>
          <span className="text-brown">Used Car</span>
          <span> Quickly and Easily with Our Service</span>
        </h2>
        <p className="tracking-[0.01em] capitalize w-[89%] mt-8">
          Our service makes it simple and stress-free. Just enter your car's
          information and we'll provide you with a fair and competitive offer.
          we'll take care of all the paperwork.
        </p>
        <div className="flex gap-12 mt-24">
          <button
            className="cursor-pointer [border:none] text-xs font-hind-kochi text-white text-center p-[.6rem_4rem] bg-indigo-200  rounded-[20px] flex flex-row box-border items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
            onClick={onHeroButton1Click}
            data-animate-on-scroll
          >
            Get Started
          </button>
          <button
            className="cursor-pointer text-xs font-hind-kochi text-gray-700 text-center [border:1px_solid_#4f46e5] p-[.6rem_4rem] bg-indigo-400 rounded-[20px] box-border flex items-center justify-center"
            onClick={onHeroButton2Click}
          >
            Book a call
          </button>
        </div>
      </div>
      <div className="w-45%">
        <img
          className=" h-[561px] object-cover"
          alt="easeauto hero section "
          loading="lazy"
          src="../header-1@2x.png"
        />
        {/* <Image
          className="cursor-pointer"
          alt="EaseAutoService Logo"
          src="/header-1@2x.png"
          width={500}
          height="561px"
          objectFit="contain"
          unoptimized
        /> */}
      </div>
    </div>
  );
};

export default HeroSection;
