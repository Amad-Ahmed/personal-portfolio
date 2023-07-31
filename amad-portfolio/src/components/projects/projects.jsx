import React from "react";
import techTaleem from "../../assets/projects/techTaleem.png";
import bchIndex from "../../assets/projects/bchindex.png";
import anime from "../../assets/projects/animefascade.png";
import astra from "../../assets/projects/astra3.png";
import flatBuddy from "../../assets/projects/flatbuddy2.png";

function ProjectCard({ title, description, imageSrc }) {
  return (
    <div className="flex items-center justify-center min-h-screen font-signature">
      <div className="text-center mx-5">
        <div className="text-white text-2xl font-bold text-left">{title}</div>
        <div className="w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-left">
          {description}
        </div>
        <div className="flex flex-col items-left mt-5">
          <button className="shadow-inner hover:shadow-green-500 bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-4/5">
            Visit Github
          </button>
        </div>
      </div>
      <div className="w-1/3 h-1/5 rounded-lg border-solid border-slate-300 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="bg-black text-slate-300 font-signature">
      <div className="font-bold text-center text-3xl mt-5 pt-8">Projects</div>
      <div className="mt-10 text-2xl text-center">What I Have Made?</div>

      {/* Tech Taleem */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="Tech Taleem"
          description="Tech Taleem is an online platform that provides education to the students of Pakistan. The platform was developed using Native Android Development in Kotlin and Firebase was used as a backend service. The platform is currently in its beta phase and is being tested by a few schools in Pakistan."
          imageSrc={techTaleem}
        />
      </div>

      {/* BchIndex */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="BchIndex"
          description="BchIndex is a crypto-trading platform. Developed in Flutter and PHP Laravel, thus allowing its users to buy and sell crypto-currencies. Various aspects of the market such as Limit order, Market order etc. were inculcated as features."
          imageSrc={bchIndex}
        />
      </div>

      {/* Anime-Fascade */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="Anime-Fascade"
          description="Anime-Fascade is an AI based platform developed to allow users to generate anime art images of their choice based on the liking of hair color. The platform was developed purely in python and Generative Adversarial Networks were used to allow for image generation. Techniques such K means clustering were used for data cleansing."
          imageSrc={anime}
        />
      </div>

      {/* Astra NFT Marketplace */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="Astra NFT Marketplace"
          description="Astra NFT marketplace is an online marketplace developed and designed in PHP laravel. The platform was designed to allow users to upload their nfts and then put them for auction. Buying and selling of the NFTs can be performed on the platform."
          imageSrc={astra}
        />
      </div>

      {/* Roomie */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="Roomie"
          description="Roomie is an online marketplace aimed at allowing people to rent out their properties, rooms and beds. The platform was developed in Flutter and MySQL was used as a database. Nest.js was used as a backend framework."
          imageSrc={flatBuddy}
        />
      </div>
    </div>
  );
}

export default Projects;
