import React from "react";
import htmllogo from "../../assets/logos/html.png";
import reactlogo from "../../assets/logos/react.png";
import flutterlogo from "../../assets/logos/flutter.png";
import nestlogo from "../../assets/logos/nestjs.png";
import firebaselogo from "../../assets/logos/firebase.png";
import nodelogo from "../../assets/logos/nodejs.png";
import pythonlogo from "../../assets/logos/python.png";
import tensorlogo from "../../assets/logos/tensorflow.png";
import pytorchlogo from "../../assets/logos/pytorch.png";
import csslogo from "../../assets/logos/css.png";
import jslogo from "../../assets/logos/javascript.png";
import sqllogo from "../../assets/logos/mysql.png";

function ImageCard({ imageSrc }) {
  return (
    <img
      src={imageSrc}
      className="w-16 md:w-48 h-auto object-contain" // Adjust the size here as needed
    />
  );
}

function Skills() {
  return (
    <div className="mt-8 mb-6 font-signature">
      <div className="text-center font-bold text-2xl lg:text-3xl">Skills</div>
      <div className="mt-10 text-2xl text-center">What I am Capable of?</div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex w-full h-full justify-center">
          <ImageCard imageSrc={htmllogo} />
          <ImageCard imageSrc={csslogo} />
          <ImageCard imageSrc={jslogo} />
          <ImageCard imageSrc={reactlogo} />
          <ImageCard imageSrc={flutterlogo} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center w-full h-full overflow-hidden">
          <ImageCard imageSrc={firebaselogo} />
          <ImageCard imageSrc={nodelogo} />
          <ImageCard imageSrc={nestlogo} />
          <ImageCard imageSrc={sqllogo} />
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center w-full h-full overflow-hidden">
          <ImageCard imageSrc={tensorlogo} />
          <ImageCard imageSrc={pytorchlogo} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center w-full h-full overflow-hidden">
          <ImageCard imageSrc={pythonlogo} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
