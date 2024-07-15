import React, { useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About"
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact"
const App = () => {
const [hamburgerIcon,setHamburgerIcon]=useState(true)

  return <>
    <div className="overflow-x-hidden">

      <Navbar hamburgerIcon={hamburgerIcon} setHamburgerIcon={setHamburgerIcon}/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  </>
}

export default App