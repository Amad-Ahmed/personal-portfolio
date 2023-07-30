import React from "react";
import techTaleem from "../../assets/projects/techTaleem.png";
import bchIndex from "../../assets/projects/bchindex.png";
import anime from "../../assets/projects/animefascade.png";
import astra from "../../assets/projects/astra3.png";
import flatBuddy from "../../assets/projects/flatbuddy2.png";

function Projects() {
  return (
    <div className="bg-black text-slate-300 font-signature">
      <div className="font-bold text-center text-3xl mt-5 pt-8">Projects</div>
      <div className="mt-10 text-2xl text-center">What I Have Made?</div>
      <div className="flex  items-center justify-center min-h-screen font-signature">
        <div className="text-center mx-5">
          <div className="text-white text-2xl font-bold text-left">
            Tech Taleem
          </div>
          <div className="w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-left">
            Tech Taleem is an online platform that provides education to the
            students of Pakistan. The platform was developed using Native
            Android Development in Kotlin and Firebase was used as a backend
            service. The platform is currently in its beta phase and is being
            tested by a few schools in Pakistan.
          </div>
          <div className="flex flex-col items-left mt-5">
            <button className="bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-4/5">
              Visit Github
            </button>
          </div>
        </div>
        <div className="w-1/3 h-1/5 rounded-lg border-solid border-slate-300 overflow-hidden">
          <img
            src={techTaleem}
            alt="Tech Taleem"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex  items-center justify-center min-h-screen font-signature">
        <div className="text-center mx-5">
          <div className="text-white text-2xl font-bold text-left">
            BchIndex
          </div>
          <div className="w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-left">
            BchIndex is a crypto-trading platform. Developed in Flutter and PHP
            Laravel, thus allowing its users to buy and sell crypto-currencies.
            Various aspects of the market such as Limit order, Market order etc.
            were inculcated as features.
          </div>
          <div className="flex flex-col items-left mt-5">
            <button className="bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-4/5">
              Visit Github
            </button>
          </div>
        </div>
        <div className="w-1/3 h-1/5 rounded-lg border-solid border-slate-300 overflow-hidden">
          <img
            src={bchIndex}
            alt="BchIndex"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex  items-center justify-center min-h-screen font-signature">
        <div className="text-center mx-5">
          <div className="text-white text-2xl font-bold text-left">
            Anime-Fascade
          </div>
          <div className="w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-left">
            Anime-Fascade is an AI based platform developed to allow users to
            generate anime art images of their choice based on the liking of
            hair color. The platform was developed purely in python and
            Generative Adversarial Networks were used to allow for image
            generation. Techniques such K means clustering were used for data
            cleansing.
          </div>
          <div className="flex flex-col items-left mt-5">
            <button className="bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-4/5">
              Visit Github
            </button>
          </div>
        </div>
        <div className="w-1/3 h-1/5 rounded-lg border-solid border-slate-300 overflow-hidden">
          <img
            src={anime}
            alt="Anime-Fascade"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex  items-center justify-center min-h-screen font-signature">
        <div className="text-center mx-5">
          <div className="text-white text-2xl font-bold text-left">
            Astra NFT Marketplace
          </div>
          <div className="w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-left">
            Astra NFT marketplace is an online marketplace developed and
            designed in PHP laravel. The platform was designed to allow users to
            upload their nfts and then put them for auction. Buying and selling
            of the NFTs can be performed on the platform.
          </div>
          <div className="flex flex-col items-left mt-5">
            <button className="bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-4/5">
              Visit Github
            </button>
          </div>
        </div>
        <div className="w-1/3 h-1/5 rounded-lg border-solid border-slate-300 overflow-hidden">
          <img src={astra} alt="Astra" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex  items-center justify-center min-h-screen font-signature">
        <div className="text-center mx-5">
          <div className="text-white text-2xl font-bold text-left">
            FlatBuddy
          </div>
          <div className="w-96 text-lg mt-3 break-words whitespace-pre-wrap text-slate-300 text-left">
            FlatBuddy is an online marketplace aimed at allowing people to rent
            out their properties, rooms and beds. The platform was developed in
            Flutter and MySQL was used as a database. Nest.js was used as a
            backend framework.
          </div>
          <div className="flex flex-col items-left mt-5">
            <button className="bg-green-500 shadow-green-100 text-white cursor-pointer p-4 text-lg rounded-md w-4/5">
              Visit Github
            </button>
          </div>
        </div>
        <div className="w-1/3 h-1/5 rounded-lg border-solid border-slate-300 overflow-hidden">
          <img
            src={flatBuddy}
            alt="FlatBuddy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
