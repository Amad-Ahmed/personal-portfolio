import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Nav from "./components/nav";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Page() {
  return (
    <div className="page">
      <header>
        <Nav />
      </header>
      <body>
        <section id="about">
          <h2>About Me</h2>
        </section>
      </body>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
