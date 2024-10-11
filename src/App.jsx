import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App
