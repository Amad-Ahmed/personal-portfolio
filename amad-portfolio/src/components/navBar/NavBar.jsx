import React from "react";

function NavBar() {
  // Function to scroll to a specific section when a menu item is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black">
      <div className="font-signature bg-gray-800 text-slate-300 h-10 lg:h-14 flex rounded-b-lg justify-center items-center text-sm sm:text-base md:text-lg xl:justify-around xl:mx-20 ">
        <ul className="flex justify-evenly px-0">
          <li
            className="mx-4 hover:font-bold cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className="mx-4 hover:font-bold cursor-pointer"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="mx-4 hover:font-bold cursor-pointer"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className="mx-4 hover:font-bold cursor-pointer"
            onClick={() => scrollToSection("touch")}
          >
            Get in Touch
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
