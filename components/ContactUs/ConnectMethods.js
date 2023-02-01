import Image from "next/image";
import { HiMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";

const ConnectMethods = () => {
  return (
    <div className="w-full mt-32">
      <h5 className=" text-lg lg:text-2xl font-semibold font-poppins inline-block">
        <span className="uppercase text-brown">connect</span>
        <span> with Us</span>
      </h5>
      <div className=" flex justify-start flex-wrap gap-6 h-auto text-center text-black font-outfit mt-12">
        <div className="rounded-xl bg-gray-100 flex items-center flex-col p-6 pt-12">
          <div className=" ">
            <HiMail className="text-[4rem] text-indigo-200" />
          </div>
          <h5 className=" text-base text-gray-600 font-semibold font-outfit inline-block">
            Email
          </h5>
          <p className="mt-12 text-sm text-gray-500">
            Our Team is here to help
          </p>
          <div className="mt-4">
            <p className=" font-semibold text-3xs font-hind-kochi text-indigo-200 inline-block">
              easeautoservice@gmail.com
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-gray-100 flex items-center flex-col p-6 pt-12">
          <div className=" w-16 h-16 overflow-hidden">
            <IoLocation className="text-[4rem] text-indigo-200" />
          </div>
          <h5 className=" text-base font-semibold text-gray-600 font-poppins inline-block">
            Location
          </h5>
          <p className="mt-12 text-sm text-gray-500">Come and pay us a Visit</p>
          <div className="flex flex-col gap-2 mt-4">
            <p className=" font-semibold text-3xs font-hind-kochi text-indigo-200 inline-block">
              Gulzar Group Of Institutes
            </p>
            <p className=" font-semibold text-3xs font-hind-kochi text-indigo-200 inline-block">
              Khanna, Punjab 141401
            </p>
          </div>
        </div>
        <div className="rounded-xl bg-gray-100 flex items-center flex-col p-6 pt-12">
          <div className=" w-16 h-16 overflow-hidden">
            <FaPhone className="text-[3.8rem] text-indigo-200" />
          </div>
          <h5 className=" text-base font-semibold text-gray-600 font-inter inline-block">
            Phone
          </h5>
          <p className="mt-12 text-sm text-gray-500">Mon-Friday 9AM to 6PM</p>
          <div className="flex flex-col gap-2 mt-4">
            <p className=" font-semibold text-3xs font-hind-kochi text-indigo-200 inline-block">
              +91 7005478702
            </p>
            <p className=" font-semibold text-3xs font-hind-kochi text-indigo-200 inline-block">
              +91 9123249940
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectMethods;
