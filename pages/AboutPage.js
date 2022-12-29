import MeetOurTeams from "../components/Teams/MeetOurTeams";
import Navbar from "../components/common/Navbar";

const AboutPage = () => {
  return (
    <div className="relative bg-white w-full h-[1771px] overflow-hidden text-center text-base text-black font-outfit">
      <MeetOurTeams />
      <p className="m-[0] absolute top-[639px] left-[278px] inline-block w-[885px]">
        We are committed to providing exceptional customer service and making
        sure our customers are satisfied with their experience. Thank you for
        choosing EaseAuto and we look forward to helping you sell your used car.
      </p>
      <p className="m-[0] absolute top-[430px] left-[278px] inline-block w-[885px]">
        Our team is dedicated to providing fair and competitive offers for used
        cars, and we handle all the paperwork and logistics for you. Our goal is
        to make the process as easy and convenient as possible, so you can focus
        on other things and get the most value out of your used car.
      </p>
      <p className="m-[0] absolute top-[247px] left-[278px] inline-block w-[885px]">
        At EaseAuto, our mission is to provide a simple and stress-free way for
        individuals to sell their used cars. We understand that selling a car
        can be a time-consuming and overwhelming process, which is why we have
        created a service that takes the hassle out of it.
      </p>
      <h2 className="m-[0] absolute top-[165px] left-[568px] text-3xl font-semibold font-inherit inline-block">
        <span>{`Our `}</span>
        <span className="text-brown">MOTIVES</span>
      </h2>
      <Navbar
        navbarLeft="187px"
        syiemchat1="../syiemchat-1@2x.png"
        syiemchat1Width="207.88px"
        listNavLeft="409.12px"
        listNavWidth="435.59px"
        servicesMargin="unset"
        aboutMargin="unset"
        aboutCursor="unset"
        contactMargin="unset"
        contactCursor="unset"
        navButtonTop="0px"
        navButtonLeft="899.78px"
        navButtonWidth="165.22px"
        navButtonHeight="61px"
        rectangle1Width="165.22px"
        rectangle1Height="61px"
        signupTop="14px"
        signupLeft="43.36px"
        signupWidth="77.03px"
      />
      <div className="absolute top-[1673px] left-[487px] inline-block">
        © 2022 College Projects. All rights reserved.
      </div>
      <div className="absolute top-[1767px] left-[0px] bg-red w-[1439px] h-[4px]" />
      <p className="m-[0] absolute top-[1029px] left-[548px] text-xs font-hind-kochi inline-block">
        Full stack Developer
      </p>
    </div>
  );
};

export default AboutPage;
