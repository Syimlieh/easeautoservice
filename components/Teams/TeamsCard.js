import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamsCard = ({ profile, name, role, message, key }) => {
  return (
    <div
      className="border-1 border-solid border-[#FF6B00] rounded-3xl p-8 mr-6 bg-[#FFE9E9]"
      key={key}
    >
      <div>
        <div className="rounded-full z-10 bg-indigo-300 w-44 h-44 flex justify-center items-center m-auto">
          <div className="rounded-full w-36 h-36 z-10 border-[5px] border-solid border-white box-content">
            <Image
              src={profile}
              alt="EaseAutoService Teams Profile Picture"
              width={100}
              height={100}
              objectFit="cover"
              loading="lazy"
              className="rounded-full z-20 border-[5px] border-solid border-white box-content"
            />
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-base text-brown">{name}</h4>
          <p className="text-3xs text-indigo-100">{role}</p>
        </div>
        <div>
          <p className="text-2xs mt-8 leading-10">
            {message.substring(0, 100)}{" "}
            <span className="no-underline text-gray-400 text-3xs cursor-pointer">
              <Link href="/about_us">Read More ...</Link>
            </span>
          </p>
        </div>
        <div className="mt-16 flex justify-center gap-8">
          <a href="https://www.instagram.com/flemingsyiem/" target="_blank">
            <Image
              src="/instagram@2x.png"
              alt="Social Media icons Team Instagram"
              width={30}
              height={30}
              objectFit="cover"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.facebook.com/flemingstar.syiemlieh.3/"
            target="_blank"
          >
            <Image
              src="/facebook@2x.png"
              alt="Social Media icons Team Instagram"
              width={30}
              height={30}
              objectFit="contain"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
