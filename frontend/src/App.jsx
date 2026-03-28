import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      
	  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
	  <Footer/>
    </BrowserRouter>
  )
}

export default App
