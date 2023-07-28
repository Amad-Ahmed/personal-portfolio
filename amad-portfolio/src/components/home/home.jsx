import React from "react";
import profile from "../../assets/profilepic.jpg";

function ProfileCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-signature">
      <div className="text-center mx-5">
        <div className="text-white text-2xl font-bold text-left">
          Amad A. Siddiqui
        </div>
        <div className="w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          laborum modi explicabo architecto reprehenderit magnam totam adipisci,
          obcaecati voluptatum nam quisquam sed odit maiores nihil dolorum
          consectetur a fugiat esse?
        </div>
        <div className="flex flex-col items-left mt-5">
          <button className="bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-40">
            Download CV
          </button>
        </div>
      </div>
      <div className="w-1/5 h-1/5 rounded-full border-solid border-slate-300 overflow-hidden">
        <img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="">
      <ProfileCard />
    </div>
  );
}

export default Home;
