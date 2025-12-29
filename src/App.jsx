import React from "react";
import Navbar from "./Components/Navbar";
import About from "./sections/About";
import MissionAndVision from "./sections/MissionAndVision";
import AdminNavbar from "./Components/AdminNavbar";
import Staffs from "./sections/Staffs";
import Projects from "./sections/projects";
import Contact from "./sections/Contact";
import Updates from "./sections/Updates";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Max-width container to prevent the layout from stretching too wide on 2025 monitors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="space-y-20 py-10">
          <About />
          <MissionAndVision />
          <Staffs />
          <Projects />
          <Contact />
          <Updates />
          <Testimonials />
          <FAQs />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
