import Image from "next/image";

const ConnectMethods = () => {
  return (
    <div className="w-full mt-32">
      <h5 className=" text-2xl font-semibold font-poppins inline-block">
        <span className="uppercase text-brown">connect</span>
        <span> with Us</span>
      </h5>
      <div className=" flex justify-between h-auto text-center text-black font-outfit mt-12">
        <div className="h-[26rem] w-[34rem] rounded-xl bg-gray-100 flex items-center flex-col p-4 pt-12">
          <div className=" w-16 h-16 overflow-hidden">
            <Image
              className="bottom-[16.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt="easeAuto email icon"
              loading="lazy"
              src="/vector.svg"
              width={80}
              height={80}
            />
          </div>
          <h5 className=" text-lg font-semibold font-poppins inline-block">
            Email
          </h5>
          <p className="mt-12 text-sm">Our Team is here to help</p>
          <div className="mt-4">
            <p className=" font-semibold text-2xs font-hind-kochi text-indigo-200 inline-block">
              easeautoservice@gmail.com
            </p>
          </div>
        </div>
        <div className="h-[26rem] w-[34rem] rounded-xl bg-gray-100 flex items-center flex-col p-4 pt-12">
          <div className=" w-16 h-16 overflow-hidden">
            <Image
              className="   bottom-[16.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt="easeAuto email icon"
              loading="lazy"
              src="/vector1.svg"
              width={80}
              height={80}
            />
          </div>
          <h5 className=" text-lg font-semibold font-poppins inline-block">
            Location
          </h5>
          <p className="mt-12 text-sm">Our Team is here to help</p>
          <div className="flex flex-col gap-2 mt-4">
            <p className=" font-semibold text-2xs font-hind-kochi text-indigo-200 inline-block">
              Gulzar Group Of Institutes
            </p>
            <p className=" font-semibold text-2xs font-hind-kochi text-indigo-200 inline-block">
              Khanna, Punjab 141401
            </p>
          </div>
        </div>
        <div className="h-[26rem] w-[34rem] rounded-xl bg-gray-100 flex items-center flex-col p-4 pt-12">
          <div className=" w-16 h-16 overflow-hidden">
            <Image
              className="   bottom-[16.67%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt="easeAuto email icon"
              loading="lazy"
              src="/vector2.svg"
              width={80}
              height={80}
            />
          </div>
          <h5 className=" text-lg font-semibold font-poppins inline-block">
            Phone
          </h5>
          <p className="mt-12 text-sm">Mon-Friday 9AM to 6PM</p>
          <div className="flex flex-col gap-2 mt-4">
            <p className=" font-semibold text-2xs font-hind-kochi text-indigo-200 inline-block">
              +91 7005478702
            </p>
            <p className=" font-semibold text-2xs font-hind-kochi text-indigo-200 inline-block">
              +91 9123249940
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectMethods;
