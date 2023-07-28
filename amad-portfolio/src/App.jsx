import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
