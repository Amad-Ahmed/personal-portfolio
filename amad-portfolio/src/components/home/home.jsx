import React from "react";
import profile from "../../assets/profilepic.jpg";
import "../../index.css";
import cv from "../../assets/AmadResume.pdf";

function TechnicalExp({ exp }) {
  return (
    <div className="shadow-inner hover:shadow-slate-300 bg-black w-20 lg:w-40 h-10 lg:h-14 items-center flex justify-center rounded-lg border-solid border-slate-300 border-2 px-px text-slate-300 text-[12px] lg:text-xl">
      {exp}
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="bg-black">
      <div className="flex flex-col  md:flex-row items-center justify-center min-h-screen font-signature px-5 md:mx-5">
        <div className="text-center md:text-left md:w-2/5 mx-5 md:mx-0">
          <div className="text-white text-2xl font-bold text-left">
            Amad A. Siddiqui
          </div>
          <div className="w-full md:w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-justify">
            Meet Amad A. Siddiqui, an accomplished Computer Scientist with
            expertise in web and mobile app development. Specializing in Deep
            Learning and Computer Vision, harnessing the power of AI for
            innovative solutions. A seasoned leader, Amad A. Siddiqui thrives in
            tackling complex challenges.
          </div>
          <div className="flex flex-col md:flex-row items-center mt-5">
            <a
              href={cv}
              download="AmadResume.pdf"
              className="shadow-inner hover:shadow-green-500 bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-40"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-1/2 md:w-1/5 h-1/5 md:h-auto rounded-full border-solid border-slate-300 overflow-hidden mt-5 md:mt-0">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-white text-xl lg:text-2xl text-left mt-3 mx-5 md:ml-80 font-signature">
        Worked with
      </div>
      <div className="flex mt-5 mx-2  lg:mx-56 md:ml-44 font-signature justify-evenly pb-8">
        <TechnicalExp exp="AIME" />
        <TechnicalExp exp="ONT Lab" />
        <TechnicalExp exp="MiTech" />
        <TechnicalExp exp="CHI-Tech" />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-black">
      <ProfileCard />
    </div>
  );
}

export default Home;
