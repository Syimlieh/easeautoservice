import { useCallback } from "react";

const MeetOurTeams = () => {
  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/flemingsyiem/");
  }, []);

  const onFacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/flemingstar.syiemlieh.3/");
  }, []);

  return (
    <section className="absolute top-[818px] left-[95px] w-[1250px] h-[702.57px] text-left text-2xl text-gray-400 font-inter">
      <div className="absolute top-[128px] left-[0px] w-[1250px] h-[574.57px]">
        <div className="absolute top-[0px] left-[88px] w-[1065px] h-[574.57px]">
          <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white shadow-[10px_10px_10px_5px_rgba(0,_0,_0,_0.25)] w-[1065px] h-[574.57px]" />
          <h5 className="m-[0] absolute top-[45.32px] left-[364px] text-[inherit] font-medium font-inherit inline-block w-[337px] h-[31.56px]">
            Flemingstar Syiemlieh
          </h5>
          <div className="absolute top-[19.42px] left-[502px] rounded-[7px] bg-red w-[60px] h-[8.09px]" />
          <div className="absolute top-[459.02px] left-[975px] w-[114px] h-[81.73px] [transform:_rotate(-180deg)] [transform-origin:0_0]">
            <img
              className="absolute top-[-56.77px] left-[-47.03px] w-[47.03px] h-[56.73px] object-cover"
              alt=""
              src="../comma4@2x.png"
            />
            <img
              className="absolute top-[-56.73px] left-[-94.03px] w-[47.03px] h-[56.73px] object-cover"
              alt=""
              src="../comma5@2x.png"
            />
            <div className="absolute top-[-0.81px] left-[-14px] w-[100px] h-[80.93px] overflow-hidden [transform:_rotate(-180deg)] [transform-origin:0_0]" />
          </div>
          <div className="absolute top-[132px] left-[275px] w-[114px] h-[81.73px]">
            <img
              className="absolute top-[0.04px] left-[0px] w-[47.03px] h-[56.73px] object-cover"
              alt=""
              src="../comma6@2x.png"
            />
            <img
              className="absolute top-[0px] left-[47px] w-[47.03px] h-[56.73px] object-cover"
              alt=""
              src="../comma7@2x.png"
            />
            <div className="absolute top-[0.81px] left-[14px] w-[100px] h-[80.93px] overflow-hidden" />
          </div>
          <p className="m-[0] absolute top-[176px] left-[365px] text-base leading-[35px] font-outfit text-black inline-block w-[615px]">
            As a full stack developer, I have a strong foundation in both
            front-end and back-end technologies. I am skilled in building and
            maintaining web applications and have a passion for solving complex
            problems. I thrive in collaborative environments and am always
            looking for ways to improve my skills and contribute to a team's
            success.
          </p>
        </div>
        <div className="absolute top-[326px] left-[1199px] w-[51px] h-[51px]">
          <img
            className="absolute top-[-8px] left-[-13px] w-[77px] h-[77px]"
            alt=""
            src="../ellipse-3.svg"
          />
          <img
            className="absolute top-[15.21px] left-[19.26px] w-[14.38px] h-[20.64px]"
            alt=""
            src="../vector-2.svg"
          />
        </div>
        <div className="absolute top-[326px] left-[0px] w-[51px] h-[51px]">
          <img
            className="absolute top-[-8px] left-[-13px] w-[77px] h-[77px]"
            alt=""
            src="../ellipse-4.svg"
          />
          <button className="cursor-pointer [border:5px_solid_#fff] p-[0] bg-[transparent] absolute top-[31.5px] left-[18.5px] box-border w-[14px] h-[22px]" />
        </div>
        <img
          className="absolute top-[192px] left-[179px] w-[185px] h-[182px]"
          alt=""
          src="../about-us-team-profile-photo.svg"
        />
        <div className="absolute top-[467px] left-[575px] w-[101px] h-[36px]">
          <img
            className="absolute top-[0px] left-[0px] w-[36px] h-[36px] object-cover cursor-pointer"
            alt="EaseAuto Instagram logo"
            src="../instagram@2x.png"
            onClick={onInstagramIconClick}
          />
          <img
            className="absolute top-[0px] left-[65px] w-[36px] h-[36px] object-cover cursor-pointer"
            alt="EaseAuto Meta logo"
            src="../facebook@2x.png"
            onClick={onFacebookIconClick}
          />
        </div>
      </div>
      <h2 className="m-[0] absolute top-[0px] left-[443px] text-3xl font-semibold font-outfit text-center inline-block text-black">
        <span>{`Meet our `}</span>
        <span className="text-brown">TEAMS</span>
      </h2>
    </section>
  );
};

export default MeetOurTeams;
