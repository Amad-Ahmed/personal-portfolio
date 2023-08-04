import React from "react";

function NavBar() {
  return (
    <div className="bg-black">
      <div className="font-signature bg-gray-800 text-slate-300 h-10 lg:h-14 flex rounded-b-lg justify-center items-center text-sm sm:text-base md:text-lg xl:justify-around xl:mx-20 ">
        <ul className="flex justify-evenly px-0">
          <li className="mx-4 hover:font-bold">Home</li>
          <li className="mx-4 hover:font-bold">Skills</li>
          <li className="mx-4 hover:font-bold">Projects</li>
          <li className="mx-4 hover:font-bold">Get in Touch</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
