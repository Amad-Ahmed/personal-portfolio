import React from "react";

function NavBar() {
  return (
    <div className="bg-black">
      <div className="font-signature text-lg bg-gray-800 text-slate-300 h-14 flex justify-center  mx-20 rounded-b-lg items-center  ">
        <ul className="flex justify-evenly px-0 ">
          <li className="mx-8">Home</li>
          <li className="mx-8">Skills</li>
          <li className="mx-8">Projects</li>
          <li className="mx-8">Get in Touch</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
