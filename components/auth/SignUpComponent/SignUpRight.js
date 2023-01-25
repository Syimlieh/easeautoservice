import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { registerValidate } from "utils/validation";
// import { signupApi } from "./signupApi";
import axios from "axios";
import { registerApi } from "./signupApi";
import Loader from "components/Loader/Loader";

const SignUpRight = () => {
  const [loading, setLoading] = useState();
  const [resError, setResError] = useState();
  const router = useRouter();

  //onsubmit function
  async function onSubmit({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
  }) {
    setLoading(true);
    const response = await registerApi(
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      router
    );
    console.log(response);
    setLoading(false);
  }

  //formk form
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  return (
    <div className="w-[40%]">
      <h2 className="text-[4.8rem] font-semibold font-inherit text-brown">
        Sign Up
      </h2>
      <form className="relative h-auto mt-24" onSubmit={formik.handleSubmit}>
        {resError && (
          <p className="text-brown text-xs text-center mb-4 absolute -top-12 left-1/2 transform -translate-x-1/2">
            {resError}
          </p>
        )}
        <div className=" relative mb-8">
          <input
            type="firstName"
            className={` border-2 border-solid ${
              formik.errors.firstName && formik.touched.firstName
                ? "border-brown"
                : ""
            }  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
            name="firstName"
            placeholder="Enter firstName"
            autoFocus
            {...formik.getFieldProps("firstName")}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <span className="text-brown text-xss">
              {formik.errors.firstName}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className=" relative mb-8">
          <input
            type="lastName"
            className={` border-2 border-solid ${
              formik.errors.lastName && formik.touched.lastName
                ? "border-brown"
                : ""
            }  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
            placeholder="Enter lastName"
            {...formik.getFieldProps("lastName")}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <span className="text-brown text-xss">
              {formik.errors.lastName}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className=" relative mb-8">
          <input
            type="email"
            className={` border-2 border-solid ${
              formik.errors.email && formik.touched.email ? "border-brown" : ""
            }  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
            placeholder="Enter Email"
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
              formik.errors.phoneNumber && formik.touched.phoneNumber
                ? "border-brown"
                : ""
            }  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
            type="tel"
            placeholder="Phone Number"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
            <span className="text-brown text-xss">
              {formik.errors.phoneNumber}
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className=" w-full relative mb-8">
          <input
            className={` border-2 border-solid ${
              formik.errors.password && formik.touched.password
                ? "border-brown"
                : ""
            }  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
            type="password"
            placeholder="Password"
            minLength={8}
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
          className="mt-8 cursor-pointer h-20 [border:none] rounded-[8px] w-full text-xs bg-indigo-200  text-white font-outfit text-center flex box-border items-center justify-center"
          type="submit"
        >
          {loading ? (
            <span className="-ml-16">
              <Loader />
            </span>
          ) : (
            "REGISTER"
          )}
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
