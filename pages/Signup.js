import { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();

  const onRegisterButtonClick = useCallback(() => {
    router.push("/Login");
  }, [router]);

  const onYouCanSingInClick = useCallback(() => {
    router.push("/Login");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1092px] overflow-hidden text-center text-base text-black font-outfit">
      <div className="absolute top-[149px] left-[818px] w-[435px] h-[721px] text-2xs text-gray-800">
        <div className="absolute top-[653px] left-[79.57px] w-[288.59px] h-[68px] text-left font-poppins">
          <button className="cursor-pointer [border:1px_solid_#b5b5b5] p-[0] bg-gray-900 absolute top-[0px] left-[0px] rounded-[9px] box-border w-[288.59px] h-[68px]" />
          <img
            className="absolute top-[9px] left-[16.98px] w-[53.05px] h-[50px] object-cover"
            alt=""
            src="../google1@2x.png"
          />
          <span className="absolute top-[22px] left-[82.76px] font-medium inline-block w-[170.82px]">
            Sing up with Google
          </span>
        </div>
        <h5 className="m-[0] absolute top-[590px] left-[127.32px] text-base font-normal font-inherit text-gray-200 inline-block w-[180.37px]">
          or continue with
        </h5>
        <form className="absolute top-[109px] left-[0px] w-[435px] h-[439px]">
          <input
            className="[border:none] font-poppins text-3xs bg-[transparent] absolute top-[0px] left-[0px] w-[435px] h-[62px]"
            type="email"
            placeholder="Enter Email"
            required
            autoFocus
          />
          <input
            className="[border:none] font-poppins text-3xs bg-[transparent] absolute top-[95px] left-[0px] w-[435px] h-[62px]"
            type="tel"
            placeholder="Phone Number"
            required
          />
          <input
            className="[border:none] font-poppins text-3xs bg-[transparent] absolute top-[190px] left-[0px] w-[435px] h-[62px]"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="[border:none] font-poppins text-3xs bg-[transparent] absolute top-[285px] left-[0px] w-[391.5px] h-[62px]"
            type="password"
            placeholder="Password"
            minLength={8}
            required
          />
          <button
            className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[380px] left-[0px] w-[435px] h-[59px]"
            onClick={onRegisterButtonClick}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[9px] bg-indigo-300 shadow-[0px_4px_61px_rgba(77,_71,_195,_0.4)]" />
              <div className="absolute top-[30.51%] left-[42.82%] text-2xs font-medium font-poppins text-white text-left inline-block">
                Register
              </div>
            </div>
          </button>
        </form>
        <h2 className="m-[0] absolute top-[0px] left-[0px] text-3xl font-semibold font-inherit text-black inline-block w-[175.06px]">
          Sign Up
        </h2>
      </div>
      <div className="absolute top-[261px] left-[188px] w-[495px] h-[613px] text-left">
        <h2 className="m-[0] absolute top-[0px] left-[0px] text-3xl font-semibold font-inherit text-center inline-block w-[475px] text-gray-800">
          <span>{`Welcome to `}</span>
          <span className="text-brown">EasyAuto</span>
        </h2>
        <p className="m-[0] absolute top-[96px] left-[0px] inline-block w-[328px]">{`If you already have an account `}</p>
        <p
          className="m-[0] absolute top-[141px] left-[0px] inline-block w-[218.14px] cursor-pointer"
          onClick={onYouCanSingInClick}
        >
          <span>{`You can `}</span>
          <span className="text-indigo-200">SingIn here !</span>
        </p>
        <img
          className="absolute top-[133px] left-[241.26px] w-[253.74px] h-[480px] object-cover"
          alt="easeAuto Sign up illustration "
          loading="lazy"
          src="../saly141@2x.png"
        />
      </div>
      <Link href="/HomePage">
        <a className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[188px] w-[189px] h-[56px]" />
      </Link>
    </div>
  );
};

export default Signup;
