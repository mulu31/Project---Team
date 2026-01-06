import { useState, useEffect } from "react";
import { useTheme } from "../Hooks/ThemeContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollabOpen, setIsCollabOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme, isTransitioning } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reusable Nav Link Component
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="relative text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50' 
        : 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 animate-fade-in-left">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl transition-all duration-300 hover:scale-110 hover:rotate-12">
              hub
            </span>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
              Team Project
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 animate-fade-in-up">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#contact">Contact</NavLink>

            {/* Collaborate Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCollabOpen(true)}
              onMouseLeave={() => setIsCollabOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 group">
                More{" "}
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${
                  isCollabOpen ? 'rotate-180' : 'rotate-0'
                }`}>
                  expand_more
                </span>
              </button>
              
              <div className={`absolute top-full left-0 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xl py-2 mt-1 transition-all duration-300 origin-top ${
                isCollabOpen 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                <a
                  href="#team"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:scale-110">
                    group
                  </span>{" "}
                  Our Team
                </a>
                <a
                  href="#testimonials"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:scale-110">
                    star
                  </span>{" "}
                  Testimonials
                </a>
                <a
                  href="#updates"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-all duration-200 hover:translate-x-1"
                >
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:scale-110">
                    newspaper
                  </span>{" "}
                  Updates
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 animate-fade-in-right">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:scale-110 ${
                isTransitioning ? 'animate-spin' : ''
              }`}
              disabled={isTransitioning}
            >
              <span className="material-symbols-outlined transition-transform duration-300">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-110"
            >
              <span className={`material-symbols-outlined text-3xl transition-transform duration-300 ${
                isMobileMenuOpen ? 'rotate-180' : 'rotate-0'
              }`}>
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu Tray */}
      <div className={`lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200/50 dark:border-slate-800/50 shadow-2xl transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen 
          ? 'max-h-[500px] opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="p-6 space-y-6">
          {/* Main Navigation Links - Centered */}
          <div className="space-y-4 text-center">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-3 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 animate-fade-in-up animate-stagger-1"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-3 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 animate-fade-in-up animate-stagger-2"
            >
              About Us
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-3 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 animate-fade-in-up animate-stagger-3"
            >
              Projects
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-3 px-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 animate-fade-in-up animate-stagger-4"
            >
              Gallery
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* Secondary Links - Centered */}
          <div className="space-y-3 text-center animate-fade-in-up animate-stagger-5">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
              More
            </p>
            <a
              href="#team"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 py-3 px-6 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
            >
              <span className="material-symbols-outlined transition-transform duration-300 hover:scale-110">
                group
              </span>
              Our Team
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 py-3 px-6 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
            >
              <span className="material-symbols-outlined transition-transform duration-300 hover:scale-110">
                star
              </span>
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 py-3 px-6 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
            >
              <span className="material-symbols-outlined transition-transform duration-300 hover:scale-110">
                contact_mail
              </span>
              Contact
            </a>
          </div>

          {/* Theme Toggle for Mobile - Centered */}
          <div className="flex justify-center pt-4 border-t border-slate-200 dark:border-slate-700">
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition-all duration-300 hover:scale-105 ${
                isTransitioning ? 'animate-pulse' : ''
              }`}
              disabled={isTransitioning}
            >
              <span className="material-symbols-outlined transition-transform duration-300">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
