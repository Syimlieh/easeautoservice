import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import SignUpLeft from "./SignUpLeft";
import SignUpRight from "./SignUpRight";

const SignUpComponent = () => {
  return (
    <div className="container py-6">
      <img
        className=" w-[213.91px] h-[55px] object-contain"
        alt="EaseAutoService Logo"
        src="/logo/easeautoservice_logo.png"
      />
      <div className=" relative bg-white w-full text-left text-black font-outfit mt-32">
        <div className="flex w-full ">
          <SignUpLeft />
          <SignUpRight />
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
