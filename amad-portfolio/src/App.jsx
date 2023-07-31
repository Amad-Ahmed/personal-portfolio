import { useState } from "react";

import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Touch from "./components/touch/touch";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Skills />
        <Projects />
        <Touch />
      </div>
    </>
  );
}

export default App;
