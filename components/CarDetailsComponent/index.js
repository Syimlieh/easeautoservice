import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { carDetailValidation } from "utils/validation";
import { carDetailApi } from "./carDetailApi";

const CarDetailsComponent = () => {
  const router = useRouter();
  const [result, setResult] = useState("");
  const onCarDetailNextButtonClick = useCallback(() => {
    router.push("/car_owner");
  }, [router]);

  //formik

  //validation
  async function onSubmit({
    registerYear,
    carBrand,
    carModel,
    carVariant,
    kilometerDriven,
  }) {
    async function carDetailApi(
      registerYear,
      carBrand,
      carModel,
      carVariant,
      kilometerDriven
    ) {
      await axios
        .post(process.env.NEXT_PUBLIC_ML_MODEL, {
          company: carBrand,
          car_models: carModel,
          year: registerYear,
          fuel_type: carVariant,
          kilo_driven: kilometerDriven,
        })
        .then((response) => {
          console.log("machine learning " + response.data);
          console.log("machine learning " + response.data.result);
          setResult(response.data.result);
          return response.data;
        })
        .catch((error) => {
          // setResError(error.response.data.message);
          console.log(" error: ");
          console.log(error);
        });
    }
    carDetailApi(registerYear, carBrand, carModel, carVariant, kilometerDriven);
    // console.log(registerYear, carBrand, carModel, carVariant, kilometerDriven);
  }
  const formik = useFormik({
    initialValues: {
      registerYear: "",
      carBrand: "",
      carModel: "",
      carVariant: "",
      kilometerDriven: "",
    },
    validate: carDetailValidation,
    onSubmit,
  });
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-[4.8rem] font-semibold font-inherit inline-block">
          <span>Fill in </span>
          <span className="text-brown ">Car Details</span>
        </h2>
      </div>
      <p className="text-brown text-xs text-center">{result}</p>
      <form className="w-full h-auto mt-24" onSubmit={formik.handleSubmit}>
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
                className={` border-2 border-solid ${
                  formik.errors.registerYear && formik.touched.registerYear
                    ? "border-brown"
                    : ""
                }  outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
                type="text"
                id="registrationYear"
                placeholder="2022"
                autoFocus
                {...formik.getFieldProps("registerYear")}
              />
              {formik.errors.registerYear && formik.touched.registerYear ? (
                <span className="text-brown text-xss">
                  {formik.errors.registerYear}
                </span>
              ) : (
                <></>
              )}
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
                className={` border-2 border-solid ${
                  formik.errors.carBrand && formik.touched.carBrand
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
                type="text"
                id="carbrand"
                placeholder="Mercedes"
                {...formik.getFieldProps("carBrand")}
              />
              {formik.errors.carBrand && formik.touched.carBrand ? (
                <span className="text-brown text-xss">
                  {formik.errors.carBrand}
                </span>
              ) : (
                <></>
              )}
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
                className={` border-2 border-solid ${
                  formik.errors.carModel && formik.touched.carModel
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
                type="text"
                id="carModel"
                placeholder="Benz C-Class"
                {...formik.getFieldProps("carModel")}
              />
              {formik.errors.carModel && formik.touched.carModel ? (
                <span className="text-brown text-xss">
                  {formik.errors.carModel}
                </span>
              ) : (
                <></>
              )}
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
                className={` border-2 border-solid ${
                  formik.errors.carVariant && formik.touched.carVariant
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
                type="text"
                placeholder="C-220d"
                id="carVariant"
                {...formik.getFieldProps("carVariant")}
              />
              {formik.errors.carVariant && formik.touched.carVariant ? (
                <span className="text-brown text-xss">
                  {formik.errors.carVariant}
                </span>
              ) : (
                <></>
              )}
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
                className={` border-2 border-solid ${
                  formik.errors.kilometerDriven &&
                  formik.touched.kilometerDriven
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left`}
                type="text"
                placeholder="5000"
                id="kilometerDriven"
                {...formik.getFieldProps("kilometerDriven")}
              />
              {formik.errors.kilometerDriven &&
              formik.touched.kilometerDriven ? (
                <span className="text-brown text-xss">
                  {formik.errors.kilometerDriven}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <button
          className="mt-8 cursor-pointer [border:none] p-[10px_35px] text-xs bg-indigo-200 text-white font-outfit text-center rounded-[20px] flex flex-row box-border items-center justify-center"
          // onClick={onCarDetailNextButtonClick}
          type="submit"
        >
          Next Step
        </button>
      </form>
    </>
  );
};

export default CarDetailsComponent;
