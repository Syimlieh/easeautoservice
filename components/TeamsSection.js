const TeamsSection = () => {
  return (
    <section className="h-auto mt-32 flex flex-col p-[4rem_0] box-border items-center justify-start gap-[8rem] text-center text-3xl text-black font-outfit">
      <h2 className="text-3xl font-semibold font-outfit inline-block ">
        <span>Meets Our</span>
        <span className="text-brown"> Teams</span>
      </h2>
      <div className="relative w-[1065px] h-[659px] shrink-0 text-2xl text-brown font-alike">
        <div className="absolute top-[0px] left-[720px] w-[345px] h-[658px]">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-1100 [border:1px_solid_#ff6b00] box-border w-[345px] h-[658px]" />
          <h5 className="m-[0] absolute top-[234px] left-[89px] text-[inherit] capitalize font-normal font-inherit inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Rahul Kumar `}</p>
            <p className="m-[0]">Choudhary</p>
          </h5>
          <div className="absolute top-[334px] left-[123px] text-xs font-hind-kochi text-indigo-100 inline-block">
            UI Designer
          </div>
          <p className="m-[0] absolute top-[398px] left-[36px] text-base font-outfit text-black inline-block w-[273px]">
            Creative and detail-oriented designer focused on creating visually
            appealing UI.
          </p>
          <div className="absolute top-[549px] left-[122px] w-[101px] h-[36px]">
            <img
              className="absolute top-[0px] left-[0px] w-[36px] h-[36px] object-cover"
              alt=""
              src="../instagram@2x.png"
            />
            <img
              className="absolute top-[0px] left-[65px] w-[36px] h-[36px] object-cover"
              alt=""
              src="../facebook@2x.png"
            />
          </div>
          <img
            className="absolute top-[54px] left-[90px] w-[165px] h-[166px] object-cover"
            alt=""
            src="../teams-profile@2x.png"
          />
        </div>
        <div className="absolute top-[1px] left-[360px] w-[345px] h-[658px]">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-1100 [border:1px_solid_#ff6b00] box-border w-[345px] h-[658px]" />
          <h5 className="m-[0] absolute top-[231px] left-[100px] text-[inherit] capitalize font-normal font-inherit inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Mohammad `}</p>
            <p className="m-[0]">Rashid</p>
          </h5>
          <div className="absolute top-[331px] left-[122px] text-xs font-hind-kochi text-indigo-100 inline-block">
            Data Analyst
          </div>
          <p className="m-[0] absolute top-[395px] left-[40px] text-base font-outfit text-black inline-block w-[273px]">
            Skilled in using data to identify trends, patterns, and insights for
            decision making.
          </p>
          <div className="absolute top-[546px] left-[126px] w-[101px] h-[36px]">
            <img
              className="absolute top-[0px] left-[0px] w-[36px] h-[36px] object-cover"
              alt=""
              src="../instagram@2x.png"
            />
            <img
              className="absolute top-[0px] left-[65px] w-[36px] h-[36px] object-cover"
              alt=""
              src="../facebook@2x.png"
            />
          </div>
          <img
            className="absolute top-[51px] left-[94px] w-[165px] h-[166px] object-cover"
            alt=""
            src="../teams-profile1@2x.png"
          />
        </div>
        <div className="absolute top-[1px] left-[0px] w-[345px] h-[658px]">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-1100 [border:1px_solid_#ff6b00] box-border w-[345px] h-[658px]" />
          <h5 className="m-[0] absolute top-[234px] left-[98px] text-[inherit] capitalize font-normal font-inherit inline-block">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Flemingstar `}</p>
            <p className="m-[0]">Syiemlieh</p>
          </h5>
          <div className="absolute top-[334px] left-[128px] text-xs font-hind-kochi text-indigo-100 inline-block w-[99px]">
            Full Stack
          </div>
          <p className="m-[0] absolute top-[398px] left-[36px] text-base font-outfit text-black inline-block w-[273px]">
            Expert in building and maintaining web applications from front-end
            to back-end
          </p>
          <div className="absolute top-[549px] left-[122px] w-[101px] h-[36px]">
            <a
              className="[text-decoration:none] absolute top-[0px] left-[0px] w-[36px] h-[36px] bg-[url(../public/instagram@2x.png)] bg-cover bg-no-repeat bg-[top]"
              href="https://www.instagram.com/flemingsyiem/"
              target="_blank"
            />
            <a
              className="[text-decoration:none] absolute top-[0px] left-[65px] w-[36px] h-[36px] bg-[url(../public/facebook@2x.png)] bg-cover bg-no-repeat bg-[top]"
              href="https://www.facebook.com/flemingstar.syiemlieh.3/"
              target="_blank"
            />
          </div>
          <img
            className="absolute top-[54px] left-[90px] w-[165px] h-[166px] object-cover"
            alt=""
            src="../teams-profile@2x.png"
          />
        </div>
      </div>
      <img
        className="relative w-[46.8px] h-[12px] shrink-0"
        alt=""
        src="../teams-slider-dots.svg"
      />
    </section>
  );
};

export default TeamsSection;
