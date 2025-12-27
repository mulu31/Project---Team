import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../Hooks/ThemeContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollabOpen, setIsCollabOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Reusable Nav Link Component
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
    >
      {children}
    </a>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600 text-3xl">
              hub
            </span>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Team Project
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Projects</NavLink>

            {/* Collaborate Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCollabOpen(true)}
              onMouseLeave={() => setIsCollabOpen(false)}
            >
              <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 font-medium">
                Collaborate{" "}
                <span className="material-symbols-outlined text-sm">
                  {isCollabOpen ? "expand_less" : "expand_more"}
                </span>
              </button>
              {isCollabOpen && (
                <div className="absolute top-full left-0 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg py-2 mt-1 animate-in fade-in zoom-in-95 duration-100">
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  >
                    <span className="material-symbols-outlined text-lg">
                      person
                    </span>{" "}
                    Individual
                  </Link>
                  <Link
                    to="/"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                  >
                    <span className="material-symbols-outlined text-lg">
                      groups
                    </span>{" "}
                    Team
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
            >
              <span className="material-symbols-outlined">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <button className="hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-lg">
                download
              </span>{" "}
              Get App
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Tray */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 p-4 space-y-4 shadow-xl">
          <a
            href="#"
            className="block text-lg font-medium text-slate-900 dark:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-lg font-medium text-slate-900 dark:text-white"
          >
            About Us
          </a>
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs font-bold text-slate-400 uppercase mb-2">
              Collaborate
            </p>
            <Link
              to="/"
              className="flex items-center gap-3 py-2 text-slate-700 dark:text-slate-200"
            >
              <span className="material-symbols-outlined">person</span>{" "}
              Individual
            </Link>
            <Link
              to="/"
              className="flex items-center gap-3 py-2 text-slate-700 dark:text-slate-200"
            >
              <span className="material-symbols-outlined">groups</span> Team
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
