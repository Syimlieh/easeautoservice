import Loader from "components/Loader/Loader";
import { useFormik } from "formik";
import React, { useState } from "react";
import { contactUsValidation } from "utils/validation";
import { contactUsApi } from "./contactUsApi";

const ContactUsComponent = () => {
  const [loading, setLoading] = useState();

  //onsubmit function
  async function onSubmit({ name, email, subject, phoneNumber, message }) {
    setLoading(true);
    const response = await contactUsApi({
      email,
      name,
      subject,
      phoneNumber,
      message,
    });
    setLoading(false);
  }

  //formik form
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      phoneNumber: "",
      message: "",
    },
    validate: contactUsValidation,
    onSubmit,
  });

  return (
    <div>
      <div className="flex flex-col">
        <h2 className="m-[0] text-[4rem] font-semibold font-inherit inline-block">
          <span>Get In </span>
          <span className="text-brown ">Touch</span>
        </h2>
        <h5 className="m-[0] text-2xs font-normal font-hind-kochi inline-block">
          Our Team are always avaible to chat
        </h5>
      </div>
      <form className="w-full h-auto mt-24" onSubmit={formik.handleSubmit}>
        <div className="flex flex-wrap w-full h-auto">
          <div className=" flex flex-col w-full md:w-1/2 h-auto pr-6 mb-8">
            <div className="flex items-center gap-3">
              <label
                className="cursor-pointer  text-2xs font-medium font-poppins text-gray-500 text-left inline-block "
                htmlFor="name"
              >
                Name
              </label>
              <p className="text-brown text-xs">*</p>
            </div>
            <div className="w-full relative">
              <input
                className={` border-2 border-solid ${
                  formik.errors.name && formik.touched.name
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-4 px-8 text-gray-300 text-left`}
                id="name"
                type="text"
                placeholder="Name"
                required
                autoFocus
                {...formik.getFieldProps("name")}
              />
              {formik.errors.name && formik.touched.name ? (
                <span className="text-brown text-xss">
                  {formik.errors.name}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 h-auto pr-6 mb-8">
            <div className="flex items-center gap-3">
              <label
                className="cursor-pointer  text-2xs font-medium font-poppins text-gray-500 text-left inline-block "
                htmlFor="subject"
              >
                Subject
              </label>
              <p className="text-brown text-xs">*</p>
            </div>
            <div className="w-full relative">
              <input
                className={` border-2 border-solid ${
                  formik.errors.subject && formik.touched.subject
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-4 px-8 text-gray-300 text-left`}
                id="subject"
                type="text"
                placeholder="Subject"
                {...formik.getFieldProps("subject")}
              />
              {formik.errors.subject && formik.touched.subject ? (
                <span className="text-brown text-xss">
                  {formik.errors.subject}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 h-auto pr-6 mb-8">
            <div className="flex items-center gap-3">
              <label
                className="cursor-pointer  text-2xs font-medium font-poppins text-gray-500 text-left inline-block "
                htmlFor="email"
              >
                Email
              </label>
              <p className="text-brown text-xss">*</p>
            </div>
            <div className="w-full relative">
              <input
                className={` border-2 border-solid ${
                  formik.errors.email && formik.touched.email
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-4 px-8 text-gray-300 text-left`}
                type="email"
                id="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.errors.email && formik.touched.email ? (
                <span className="text-brown text-xss">
                  {formik.errors.email}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 h-auto pr-6 mb-8">
            <div className="flex items-center gap-3">
              <label
                className="cursor-pointer  text-2xs font-medium font-poppins text-gray-500 text-left inline-block "
                htmlFor="message"
              >
                Phone Number
              </label>
            </div>
            <div className="w-full relative">
              <input
                className={`border-2 border-solid outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-4 px-8 text-gray-300 text-left`}
                placeholder="Phone Number"
                id="phoneNumber"
                {...formik.getFieldProps("phoneNumber")}
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-auto pr-6 mb-8">
            <div className="flex items-center gap-3">
              <label
                className="cursor-pointer  text-2xs font-medium font-poppins text-gray-500 text-left inline-block "
                htmlFor="message"
              >
                Message
              </label>
              <p className="text-brown text-xss">*</p>
            </div>
            <div className="w-full relative">
              <textarea
                className={` border-2 border-solid ${
                  formik.errors.message && formik.touched.message
                    ? "border-brown"
                    : ""
                } outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-4 px-8 text-gray-300 text-left`}
                placeholder="Leave Us a Message"
                id="message"
                rows={5}
                {...formik.getFieldProps("message")}
              />
              {formik.errors.message && formik.touched.message ? (
                <span className="text-brown text-xss">
                  {formik.errors.message}
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <button
          className="relative cursor-pointer p-0 flex items-center justify-center h-20 w-[21rem] text-xs bg-indigo-200 text-white font-outfit border-none rounded-xl -pl-12"
          type="submit"
        >
          {loading ? (
            <span className="-ml-16">
              <Loader />
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactUsComponent;
