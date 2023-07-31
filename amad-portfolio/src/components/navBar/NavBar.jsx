import React from "react";

function NavBar() {
  return (
    <div className="bg-black">
      <div className="font-signature bg-gray-800 text-slate-300 h-14 flex rounded-b-lg justify-center items-center text-sm sm:text-base md:text-lg xl:justify-around xl:mx-20">
        <ul className="flex justify-evenly px-0">
          <li className="mx-4">Home</li>
          <li className="mx-4">Skills</li>
          <li className="mx-4">Projects</li>
          <li className="mx-4">Get in Touch</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
