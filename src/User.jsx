import React from "react";
import Navbar from "./Components/Navbar";
import About from "./sections/About";
import MissioAndVision from "./sections/MissionAndVision";
import Staff from "./sections/Staffs";
import Projects from "./sections/projects";
import Contact from "./sections/Contact";
import Updates from "./sections/Updates";
import Tesimonial from "./sections/Testimonials";
import FAQ from "./sections/FAQs";
import Footer from "./Components/Footer";

function User() {
  return (
    <div>
      <div className="container">
        <Navbar />
        <About />
        <MissioAndVision />
        <Staff />
        <Projects />
        <Contact />
        <Updates />
        <Tesimonial />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default User;
