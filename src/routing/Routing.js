import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// navbar
import Navbar from "../components/navbar/Navbar";

// pages
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Topbar from "../components/navbar/Topbar";

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Topbar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
