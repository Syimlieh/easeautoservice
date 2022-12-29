import React, { useCallback } from "react";
import { useRouter } from "next/router";
import SignUpLeft from "./SignUpLeft";
import SignUpRight from "./SignUpRight";
import Footer from "components/common/Footer";

const SignUpComponent = () => {
  const router = useRouter();
  const onClickLogo = useCallback(() => {
    router.push("/");
  }, [router]);
  return (
    <div className="container py-6">
      <img
        onClick={onClickLogo}
        className=" w-[213.91px] h-[55px] cursor-pointer object-contain"
        alt="EaseAutoService Logo"
        src="/logo/easeautoservice_logo.png"
      />
      <div className=" relative bg-white w-full text-left text-black font-outfit mt-32">
        <div className="flex w-full ">
          <SignUpLeft />
          <SignUpRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpComponent;
