import { useState } from "react";

import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
