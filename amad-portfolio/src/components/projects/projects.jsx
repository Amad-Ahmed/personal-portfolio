import React from "react";
import techTaleem from "../../assets/projects/techTaleem.png";
import bchIndex from "../../assets/projects/bchindex.png";
import anime from "../../assets/projects/animefascade.png";
import flatBuddy from "../../assets/projects/flatbuddy3.png";
import votingiva from "../../assets/projects/votingiva.png";

const BchIndex = "https://github.com/Vaasel/BCH";
const Anime = "https://github.com/Amad-Ahmed/Anime-based-Art-using-GAN";
const FlatBuddy = "https://github.com/Amad-Ahmed/FlatBuddy";
const Votingiva = "https://github.com/Amad-Ahmed/VOTINGIVA-Sqlite";
const TechTaleem = "https://github.com/Amad-Ahmed/Tele_Taleem";

function ProjectCard({ title, description, imageSrc, githubLink }) {
  return (
    <div className="flex  flex-col-reverse lg:flex-row items-center justify-center mt-8 mb-8 lg:mt-28 lg:mb-8 font-signature">
      <div className="text-center mx-5">
        <div className="text-white text-2xl font-bold text-left mt-1 lg:mt-2">
          {title}
        </div>
        <div className="w-72  lg:w-96 text-lg lg:mt-3 break-words whitespace-pre-wrap text-slate-300 text-justify pr-4">
          {description}
        </div>
        <div className="flex flex-col lg:flex-row items-left mt-5">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-inner hover:shadow-green-500 bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-4/5"
          >
            Visit Github
          </a>
        </div>
      </div>
      <div className="w-[70%] lg:w-[500px]  rounded-lg border-solid border-slate-300 overflow-hidden">
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
    <div className="bg-black text-slate-300 font-signature ">
      <div className="font-bold text-center text-2xl lg:text-3xl mt-5 pt-6 lg:pt-10">
        Projects
      </div>
      <div className="mt-5 lg:mt-10 text-xl lg:text-2xl text-center">
        What I Have Made?
      </div>

      {/* Tech Taleem */}
      <div className="flex flex-col items-center mt-10">
        <ProjectCard
          title="Tech Taleem"
          description="Tech Taleem is an online platform that provides education to the students of Pakistan. The platform was developed using Native Android Development in Kotlin and Firebase was used as a backend service. The platform is currently in its beta phase and is being tested by a few schools in Pakistan."
          imageSrc={techTaleem}
          githubLink={TechTaleem}
        />
      </div>

      {/* BchIndex */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="BchIndex"
          description="BchIndex is a crypto-trading platform. Developed in Flutter and PHP Laravel, thus allowing its users to buy and sell crypto-currencies. Various aspects of the market such as Limit order, Market order etc. were inculcated as features."
          imageSrc={bchIndex}
          githubLink={BchIndex}
        />
      </div>

      {/* Anime-Fascade */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="Anime-Fascade"
          description="Anime-Fascade is an AI based platform developed to allow users to generate anime art images of their choice based on the liking of hair color. The platform was developed purely in python and Generative Adversarial Networks were used to allow for image generation. Techniques such K means clustering were used for data cleansing."
          imageSrc={anime}
          githubLink={Anime}
        />
      </div>

      {/* Roomie
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="Roomie"
          description="Roomie is an online marketplace aimed at allowing people to rent out their properties, rooms and beds. The platform was developed in Flutter and MySQL was used as a database. Nest.js was used as a backend framework."
          imageSrc={flatBuddy}
          githubLink={FlatBuddy}
        />
      </div> */}

      {/* Voting IVA */}
      <div className="flex flex-col items-center mt-8">
        <ProjectCard
          title="Votingiva"
          description="Votingiva is an online poll based social media platform which allows users to create polls and vote on them. The platform was developed in Java and MySQL was used as a backend service."
          imageSrc={votingiva}
          githubLink={Votingiva}
        />
      </div>
    </div>
  );
}

export default Projects;
