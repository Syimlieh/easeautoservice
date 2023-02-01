import HowItWorksCard from "./HowItWorksCard";
import { data } from "./howItWorksData";

const HowItWorks = () => {
  return (
    <section className="flex flex-col p-[8rem_0_4rem] box-border items-center justify-start gap-[8rem] text-center text-[2.2rem] xl:text-3xl md:text-2xl text-black font-outfit">
      <div className="flex flex-col items-center  shrink-0">
        <h3 className="capitalize text-lg lg:text-[3.5rem] font-semibold">
          We make things
          <span className="text-brown"> easy </span>
          for your
          <span className="text-red"> business</span>
        </h3>
        <div className="font-semibold text-2xs lg:text-sm font-poppins inline-block">
          How It Works
        </div>
      </div>
      <div className="relative w-full h-auto shrink-0 text-left text-xl text-white flex justify-between flex-wrap">
        {data &&
          data.map((item) => (
            <HowItWorksCard
              key={item.id}
              number={item.id}
              message={item.message}
              color={item.color}
            />
          ))}
      </div>
    </section>
  );
};

export default HowItWorks;
