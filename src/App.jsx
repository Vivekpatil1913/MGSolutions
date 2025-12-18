import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About"
import Contact from './pages/Contact';
import Disclaimers from './pages/Disclaimers';
function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<Disclaimers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App
