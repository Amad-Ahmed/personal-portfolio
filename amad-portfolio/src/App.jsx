import { useState } from "react";

import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Skills />
      </div>
    </>
  );
}

export default App;
