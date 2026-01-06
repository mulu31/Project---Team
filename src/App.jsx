import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import MissionAndVision from "./sections/MissionAndVision";
import Staffs from "./sections/Staffs";
import Projects from "./sections/projects";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Updates from "./sections/Updates";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";
import Footer from "./Components/Footer";

const App = () => {
  // Add smooth scroll behavior and page load animations
  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add page load animation
    document.body.classList.add('animate-fade-in-up');
    
    return () => {
      document.body.classList.remove('animate-fade-in-up');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-all duration-500">
      {/* Max-width container to prevent the layout from stretching too wide on 2025 monitors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="space-y-0">
          <div className="animate-fade-in-up">
            <Home />
          </div>
          <div className="animate-fade-in-up animate-stagger-1">
            <About />
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <MissionAndVision />
          </div>
          <div className="animate-fade-in-up animate-stagger-3">
            <Staffs />
          </div>
          <div className="animate-fade-in-up animate-stagger-4">
            <Projects />
          </div>
          <div className="animate-fade-in-up animate-stagger-5">
            <Gallery />
          </div>
          <div className="animate-fade-in-up animate-stagger-1">
            <Contact />
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <Updates />
          </div>
          <div className="animate-fade-in-up animate-stagger-3">
            <Testimonials />
          </div>
          <div className="animate-fade-in-up animate-stagger-4">
            <FAQs />
          </div>
        </main>
        <div className="animate-fade-in-up animate-stagger-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
