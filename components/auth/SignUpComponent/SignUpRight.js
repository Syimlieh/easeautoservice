import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const SignUpRight = () => {
  const router = useRouter();

  const onRegisterButtonClick = useCallback(() => {
    router.push("/Login");
  }, [router]);

  return (
    <div className="w-[40%]">
      <h2 className="text-[4.8rem] font-semibold font-inherit text-brown">
        Sign Up
      </h2>
      <form className="h-auto mt-24">
        <div className=" relative mb-8">
          <input
            className=" [border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
            type="email"
            placeholder="Enter Email"
            required
            autoFocus
          />
        </div>
        <div className=" w-full relative mb-8">
          <input
            className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
            type="tel"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className=" w-full relative mb-8">
          <input
            className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className=" w-full relative mb-8">
          <input
            className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
            type="password"
            placeholder="Password"
            minLength={8}
            required
          />
        </div>
        <button
          className="mt-8 cursor-pointer [border:none] py-[10px] rounded-[8px] w-full text-xs bg-indigo-200  text-white font-outfit text-center flex box-border items-center justify-center"
          onClick={onRegisterButtonClick}
        >
          Register
        </button>
      </form>
      {/*  */}
      <div className="flex flex-col gap-12 items-center">
        <h5 className="mt-24 text-base  font-normal font-inherit text-gray-200 inline-block">
          Or continue with
        </h5>
        <button className="cursor-pointer font-poppins [border:1px_solid_#b5b5b5] px-0 py-2 w-[28rem] bg-gray-900 rounded-[9px] flex items-center justify-center gap-4">
          <Image
            src="/google1@2x.png"
            alt="google auth icon"
            width={50}
            height={50}
            objectFit="cover"
          />
          <span className="font-medium inline-block">Sing up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignUpRight;
