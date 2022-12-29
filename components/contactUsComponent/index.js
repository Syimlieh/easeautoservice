import React from "react";

const ContactUsComponent = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="m-[0] text-[4.8rem] font-semibold font-inherit inline-block">
          <span>Get In </span>
          <span className="text-brown ">Touch</span>
        </h2>
        <h5 className="m-[0] text-xs font-normal font-hind-kochi inline-block">
          Our Team are always avaible to chat
        </h5>
      </div>
      <form className="w-full h-auto mt-24">
        <div className="flex flex-wrap w-full h-auto">
          <div className=" flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block "
              htmlFor="firstName"
            >
              First Name
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                id="firstName"
                type="text"
                placeholder="First Name"
                required
                autoFocus
              />
              <img
                className="absolute top-8 right-4 w-[26.61px] h-[11.32px]"
                alt="EaseAuto dropdown icon"
                src="../vector-3.svg"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block "
              htmlFor="lastName"
            >
              Last Name
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                id="lastName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block "
              htmlFor="email"
            >
              Email
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block "
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <div className="w-full relative">
              <input
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                type="tel"
                id="phoneNumber"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-full h-auto pr-6 mb-8">
            <label
              className="cursor-pointer  text-xs font-medium font-poppins text-gray-500 text-left inline-block "
              htmlFor="message"
            >
              Message
            </label>
            <div className="w-full relative">
              <textarea
                className="[border:none] outline-none bg-gray-100 rounded-[8px] w-full text-3xs font-poppins py-6 px-8 text-gray-300 text-left"
                placeholder="Leave Us a Message"
                id="message"
                rows={5}
                required
              />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-[10px_35px] text-xs bg-indigo-200 text-white font-outfit text-center rounded-[20px] flex flex-row box-border items-center justify-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsComponent;
