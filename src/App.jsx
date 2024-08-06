import React, { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About"
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"
const App = () => {

  return <>
    <Navbar />
    <div className="overflow-x-hidden">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  </>
}

export default App