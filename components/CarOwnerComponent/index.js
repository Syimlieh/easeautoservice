import React, { useCallback } from "react";
import { useRouter } from "next/router";
const CarOwnerComponent = () => {
  const router = useRouter();

  const onNextButtonClick = useCallback(() => {
    router.push("/final_offer");
  }, [router]);

  return (
    <>
      <h2 className="text-2xl font-semibold font-inherit text-center mb-16">
        <span>Number of</span>
        <span className="text-brown"> Owner</span>
      </h2>
      <form className="flex flex-col items-center">
        <div className="w-[90%] flex flex-wrap gap-24 justify-center ">
          <div>
            <input type="radio" name="owner" id="1stOwner" />
            <label
              htmlFor="1stOwner"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              1st Owner
            </label>
          </div>
          <div>
            <input type="radio" name="owner" id="2ndOwner" />
            <label
              htmlFor="2ndOwner"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              2nd Owner
            </label>
          </div>
          <div>
            <input type="radio" name="owner" id="3rdOwner" />
            <label
              htmlFor="3rdOwner"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              3rd Owner
            </label>
          </div>
          <div>
            <input type="radio" name="owner" id="4thOwner" />
            <label
              htmlFor="4thOwner"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              4th Owner
            </label>
          </div>
          <div>
            <input type="radio" name="owner" id="5thOwner" />
            <label
              htmlFor="5thOwner"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              5th Owner
            </label>
          </div>
          <div>
            <input type="radio" name="owner" id="6thOwner" />
            <label
              htmlFor="6thOwner"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              6th Owner
            </label>
          </div>
        </div>

        <h2 className="mt-24 text-2xl font-semibold font-inherit text-center mb-16 font-poppins text-brown">
          <span>Ownership</span>
          <span className="text-black">Type</span>
        </h2>
        <div className="w-[90%] flex flex-wrap gap-24 justify-center ">
          <div>
            <input type="radio" name="ownerType" id="loan" />
            <label
              htmlFor="loan"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              Loan
            </label>
          </div>
          <div>
            <input type="radio" name="ownerType" id="onLease" />
            <label
              htmlFor="onLease"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              On Lease
            </label>
          </div>
          <div>
            <input type="radio" name="ownerType" id="owned" />
            <label
              htmlFor="owned"
              className="numOwner cursor-pointer [border:2px_solid_#4f46e5] py-[1rem] w-80 text-xs tracking-[0.01em] uppercase font-outfit bg-indigo-400 rounded-xl box-border flex flex-row items-start justify-center"
            >
              Owned
            </label>
          </div>
        </div>
      </form>
      <button
        className="mt-24 cursor-pointer text-xs p-[1rem_4rem] text-white bg-brown [border:none] rounded-xl font-semibold font-poppin"
        onClick={onNextButtonClick}
      >
        NEXT
      </button>
      <style jsx>
        {`
          input:checked + .numOwner {
            background-color: #4f46e5;
            color: #fff;
            font-weight: 700;
            transition: 0.3s;
          }
          input {
            appearance: none;
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default CarOwnerComponent;
