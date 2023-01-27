import HowItWorksCard from "./HowItWorksCard";
import { data } from "./howItWorksData";

const HowItWorks = () => {
  return (
    <section className="flex flex-col p-[4rem_0] box-border items-center justify-start gap-[8rem] text-center text-[2.2rem] xl:text-3xl md:text-2xl text-black font-outfit">
      <div className="flex flex-col items-center  shrink-0">
        <div className="capitalize font-semibold inline-block w-[55rem]">
          <span>We make things</span>
          <span className="text-brown"> easy</span>
          <span> for your</span>
          <span className="text-red"> business</span>
        </div>
        <div className="font-semibold text-sm font-poppins inline-block">
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

        {/* <div className="w-[25rem] h-[32rem]">
          <div className="w-[75.89px] h-[75px] relative">
            <span className="inline-block h-full w-full bg-brown rounded-full"></span>
            <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 trans font-medium inline-block w-[11.13px]">
              2
            </div>
          </div>
          <div className=" text-base text-black mt-28 pr-4">
            Select your ownership type. Are you the first owner, second owner,
            or third owner?
          </div>
        </div>
        <div className="w-[25rem] h-[32rem]">
          <div className="w-[75.89px] h-[75px] relative">
            <span className="inline-block h-full w-full bg-red rounded-full"></span>
            <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 font-medium inline-block w-[11.13px]">
              3
            </div>
          </div>
          <div className=" text-base text-black mt-28 pr-4">
            Using advanced machine learning algorithms, we will generate an
            offer for your car.
          </div>
        </div>
        <div className="w-[25rem] h-[32rem]">
          <div className="w-[75.89px] h-[75px] relative">
            <span className="inline-block h-full w-full bg-[#1180E6] rounded-full"></span>
            <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 trans font-medium inline-block w-[11.13px]">
              4
            </div>
          </div>
          <div className=" text-base text-black mt-28 pr-4">
            Once you accept our offer, you'll be able to choose a convenient
            date for us to come and pick up your car.
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
