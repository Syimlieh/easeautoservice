import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useFormik } from "formik";
import login_validate from "utils/validation";

const SignInRight = () => {
  const router = useRouter();

  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });

    if (status.ok) router.push(status.url);
  }

  //formik form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login_validate,
    onSubmit,
  });

  return (
    <div className="w-[40%]">
      <h2 className="text-[4.8rem] font-semibold font-inherit text-brown">
        Sign In
      </h2>
      <form className="h-auto mt-24" onSubmit={formik.handleSubmit}>
        <div className={` relative mb-8`}>
          <input
            className={` border-2 border-solid ${
              formik.errors.email && formik.touched.email ? "border-brown" : ""
            }  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
            type="email"
            name="email"
            placeholder="Enter Email"
            autoFocus
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email ? (
            <span className="text-brown text-xss">{formik.errors.email}</span>
          ) : (
            <></>
          )}
        </div>

        <div className=" w-full relative mb-8">
          <input
            className={` border-2 border-solid ${
              formik.errors.password && formik.touched.email
                ? "border-brown"
                : ""
            }   outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password ? (
            <span className="text-brown text-xss">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}
        </div>
        <button
          className="mt-8 cursor-pointer [border:none] py-[10px] rounded-[8px] w-full text-xs bg-indigo-200  text-white font-outfit text-center flex box-border items-center justify-center"
          type="submit"
        >
          Sing In
        </button>
      </form>
      {/*  */}
      <div className="flex flex-col gap-12 items-center">
        <h5 className="mt-24 text-base  font-normal font-inherit text-gray-200 inline-block">
          Or continue with
        </h5>
        <button className="cursor-pointer font-poppins [border:1px_solid_#b5b5b5] px-0 py-2 w-[28rem] bg-gray-900 rounded-[9px] flex items-center justify-center gap-4">
          <Image
            unoptimized
            src="/google1@2x.png"
            alt="google auth icon"
            width={50}
            height={50}
            objectFit="cover"
          />
          <span className="font-medium inline-block">Sing In with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignInRight;
