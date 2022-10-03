import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Aside from "./Components/Aside/Aside";
import Project from "./Components/Project/Project";
import Nav from "./Components/Nav/Nav";
import SideNav from "./Components/SideNav/SideNav";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far, fas);

function App() {
  return (
    <div className="page">
      <SideNav />
      <div className="contents">
        <Nav />
        <section className="main">
          <Project />
          <Aside />
        </section>
      </div>
    </div>
  );
}

export default App;
