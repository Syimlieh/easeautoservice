import React, { useCallback } from "react";
import { useRouter } from "next/router";
import SignInLeft from "./SignInLeft";
import SignInRight from "./SignInRight";
import Footer from "components/common/Footer";
import Image from "next/image";

const SignInComponent = () => {
  const router = useRouter();
  const onClickLogo = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="container pt-6">
      <Image
        unoptimized
        onClick={onClickLogo}
        className="w-[213.91px] h-[55px] cursor-pointer"
        alt="EaseAutoService Logo"
        src="/logo/easeautoservice_logo.webp"
        width={220}
        height={50}
        objectFit="contain"
      />
      <div className=" relative bg-white w-full text-left text-black font-outfit mt-32">
        <div className="flex w-full ">
          <SignInLeft />
          <SignInRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignInComponent;
