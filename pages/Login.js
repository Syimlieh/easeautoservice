import { useCallback } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const onYouCanRegisterClick = useCallback(() => {
    router.push("/Signup");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1042px] overflow-hidden text-center text-base text-black font-outfit">
      <div className="absolute top-[1038px] left-[-18px] bg-red w-[1439px] h-[4px]" />
      <div className="absolute top-[970px] left-[487px] inline-block">
        © 2022 College Projects. All rights reserved.
      </div>
      <div className="absolute top-[149px] left-[818px] w-[435px] h-[617px] text-2xs text-gray-800">
        <div className="absolute top-[549px] left-[87px] w-[288.59px] h-[68px] text-left font-poppins">
          <button className="cursor-pointer [border:1px_solid_#b5b5b5] p-[0] bg-gray-900 absolute top-[0px] left-[0px] rounded-[9px] box-border w-[288.59px] h-[68px]" />
          <img
            className="absolute top-[9px] left-[16.98px] w-[53.05px] h-[50px] object-cover"
            alt=""
            src="../google@2x.png"
          />
          <p className="m-[0] absolute top-[22px] left-[82.76px] font-medium inline-block w-[170.82px]">
            Sing up with Google
          </p>
        </div>
        <h5 className="m-[0] absolute top-[470px] left-[133.68px] text-base font-normal font-inherit text-gray-200 inline-block w-[180.37px]">
          or continue with
        </h5>
        <form
          className="absolute top-[109px] left-[0px] w-[435px] h-[301px]"
          method="post"
        >
          <button className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[242px] left-[0px] w-[435px] h-[59px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[9px] bg-indigo-300 shadow-[0px_4px_61px_rgba(77,_71,_195,_0.4)]" />
              <div className="absolute top-[30.51%] left-[42.82%] text-2xs font-medium font-poppins text-white text-left inline-block">
                Register
              </div>
            </div>
          </button>
          <input
            className="[border:none] font-poppins text-3xs bg-[transparent] absolute top-[122px] left-[0px] w-[435px] h-[62px]"
            type="text"
            placeholder="Password"
            required
          />
          <input
            className="[border:none] font-poppins text-3xs bg-[transparent] absolute top-[0px] left-[0px] w-[435px] h-[62px]"
            type="text"
            placeholder="Enter Email"
            required
            autoFocus
          />
        </form>
        <h2 className="m-[0] absolute top-[0px] left-[0px] text-3xl font-semibold font-inherit text-black inline-block">
          Sign In
        </h2>
      </div>
      <div className="absolute top-[258px] left-[188px] w-[492.42px] h-[613px] text-left">
        <h2 className="m-[0] absolute top-[0px] left-[0px] text-3xl font-semibold font-inherit text-center inline-block w-[410px] text-gray-800">
          <span>{`Login  to `}</span>
          <span className="text-brown">EasyAuto</span>
        </h2>
        <p className="m-[0] absolute top-[96px] left-[0px] inline-block w-[303px]">{`If you don’t have an account `}</p>
        <p
          className="m-[0] absolute top-[141px] left-[0px] inline-block w-[262px] cursor-pointer"
          onClick={onYouCanRegisterClick}
        >
          <span>{`You can `}</span>
          <span className="text-indigo-200">Register here !</span>
        </p>
        <div className="absolute top-[133px] left-[240px] w-[252.42px] h-[480px]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="../saly14@2x.png"
          />
        </div>
      </div>
      <img
        className=" w-[213.91px] h-[55px] object-cover"
        alt="EaseAuto Logo"
        src="/logo/easeautoservice_logo"
      />
    </div>
  );
};

export default Login;
