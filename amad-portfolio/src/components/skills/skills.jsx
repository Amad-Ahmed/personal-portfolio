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

function Skills() {
  return (
    <div className="mt-5 font-signature">
      <div className="text-center font-bold text-3xl">Skills</div>
      <div className="mt-10 text-2xl text-center">What I am Capable of?</div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex w-full h-full overflow-hidden justify-center">
          <img
            src={htmllogo}
            alt="htmllogo"
            className="w-32 md:w-48 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={csslogo}
            alt="csslogo"
            className="w-32 md:w-48 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={jslogo}
            alt="jslogo"
            className="w-32 md:w-48 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={reactlogo}
            alt="reactlogo"
            className="w-24 md:w-36 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={flutterlogo}
            alt="flutterlogo"
            className="w-24 md:w-36 h-auto object-contain" // Adjust the size here as needed
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center w-full h-full overflow-hidden">
          <img
            src={firebaselogo}
            alt="firebaselogo"
            className="w-24 md:w-36 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={nodelogo}
            alt="nodelogo"
            className="w-24 md:w-36 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={nestlogo}
            alt="nestlogo"
            className="w-24 md:w-36 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={sqllogo}
            alt="sqllogo"
            className="w-24 md:w-36 h-auto object-contain" // Adjust the size here as needed
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center w-full h-full overflow-hidden">
          <img
            src={tensorlogo}
            alt="tensorlogo"
            className="w-32 md:w-48 h-auto object-contain" // Adjust the size here as needed
          />
          <img
            src={pytorchlogo}
            alt="pytorchlogo"
            className="w-32 md:w-48 h-auto object-contain" // Adjust the size here as needed
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex justify-center w-full h-full overflow-hidden">
          <img
            src={pythonlogo}
            alt="pythonlogo"
            className="w-24 md:w-36 h-auto object-contain" // Adjust the size here as needed
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
