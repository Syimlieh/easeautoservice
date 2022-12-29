import { useRouter } from "next/router";
import React, { useCallback } from "react";

const CarDetailsComponent = () => {
  const router = useRouter();

  const onCarDetailNextButtonClick = useCallback(() => {
    router.push("/car_owner");
  }, [router]);
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-[4.8rem] font-semibold font-inherit inline-block">
          <span>Fill in </span>
          <span className="text-brown ">Car Details</span>
        </h2>
      </div>
      <form className="w-full h-auto mt-24">
        <div className="flex flex-wrap w-full h-auto">
          <div className="flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block"
              htmlFor="registrationYear"
            >
              <p className="text-xs font-medium font-poppins text-left inline-block">
                <span className="text-gray-500">Registration</span>
                <span className="text-indigo-100">Year</span>
              </p>
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                type="text"
                id="registrationYear"
                placeholder="2022"
                required
                autoFocus
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block"
              htmlFor="carbrand"
            >
              Car Brand
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                type="text"
                id="carbrand"
                placeholder="Mercedes"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block"
              htmlFor="carModel"
            >
              Car model
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                type="text"
                id="carModel"
                placeholder="Benz C-Class"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block"
              htmlFor="carVariant"
            >
              Car Variant
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                type="text"
                placeholder="C-220d"
                required
                id="carVariant"
              />
            </div>
          </div>

          <div className=" flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block"
              htmlFor="kilometerDriven"
            >
              Kilometer Driven
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                type="text"
                placeholder="5000"
                required
                autoFocus
                id="kilometerDriven"
              />
            </div>
          </div>
        </div>
        <button
          className="mt-8 cursor-pointer [border:none] p-[10px_35px] text-xs bg-indigo-200 text-white font-outfit text-center rounded-[20px] flex flex-row box-border items-center justify-center"
          onClick={onCarDetailNextButtonClick}
        >
          Next Step
        </button>
      </form>
    </>
  );
};

export default CarDetailsComponent;
