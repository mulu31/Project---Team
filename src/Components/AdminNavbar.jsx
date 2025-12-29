import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext.jsx";
import { useTheme } from "../Hooks/ThemeContext";
import logoImg from "../assets/group_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

export default function AdminNavbar() {
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { isDark, toggleTheme } = useTheme();
  const { logout, user } = useAuth();

  const manageRef = useRef(null);
  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (manageRef.current && !manageRef.current.contains(event.target)) {
        setIsManageOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("[data-mobile-menu-button]")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Projects", path: "/admin/projects" },
    { name: "Members", path: "/admin/members" },
    { name: "Events", path: "/admin/events" },
    { name: "Teams", path: "/admin/teams" },
    { name: "Testimonials", path: "/admin/testimonials" },
  ];

  const manageDropdownItems = [
    { to: "/admin/members", icon: "person", label: "Members" },
    { to: "/admin/teams", icon: "groups", label: "Teams" },
    { to: "/admin/projects", icon: "folder_managed", label: "Projects" },
    { to: "/admin/events", icon: "event", label: "Events" },
    { to: "/admin/testimonials", icon: "reviews", label: "Testimonials" },
    { to: "/admin/settings", icon: "settings", label: "Settings" },
  ];

  const profileDropdownItems = [
    {
      icon: "account_circle",
      label: "My Profile",
      action: () => navigate("/admin/profile"),
    },
    {
      icon: "settings",
      label: "Settings",
      action: () => navigate("/admin/settings"),
    },
    {
      icon: "help",
      label: "Help & Support",
      action: () => window.open("/help", "_blank"),
    },
    { icon: "logout", label: "Logout", action: logout, isLogout: true },
  ];

  return (
    <>
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sticky top-0 z-50 border-b transition-all duration-300 ${
          isDark
            ? "bg-slate-900 border-slate-700 text-white"
            : "bg-white border-gray-200 text-gray-800"
        } ${scrolled ? "shadow-lg backdrop-blur-sm bg-opacity-95" : ""}`}
      >
        {/* Brand Section */}
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Logo"
            className={`h-8 w-8 ${isDark ? "invert" : ""}`}
          />
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            Admin Dashboard
          </span>
          <span className="text-xl font-bold tracking-tight sm:hidden">
            Admin
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium hover:text-blue-500 transition-colors px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {link.name}
            </Link>
          ))}

          {/* Manage Dropdown */}
          <div
            ref={manageRef}
            className="relative"
            onMouseEnter={() => setIsManageOpen(true)}
            onMouseLeave={() => setIsManageOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                isManageOpen ? (isDark ? "bg-slate-800" : "bg-gray-100") : ""
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">
                settings
              </span>
              <span className="hidden lg:inline">Manage</span>
              <span className="material-symbols-outlined text-[20px] transition-transform duration-200">
                {isManageOpen ? "expand_less" : "expand_more"}
              </span>
            </button>

            {isManageOpen && (
              <div
                className={`absolute left-0 top-full mt-1 w-48 rounded-lg shadow-xl border p-1 animate-in fade-in slide-in-from-top-2 overflow-hidden ${
                  isDark
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-gray-100"
                }`}
                style={{ zIndex: 1000 }}
              >
                <p className="px-3 py-2 text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">
                  Manage
                </p>
                <div className="max-h-64 overflow-y-auto">
                  {manageDropdownItems.map((item) => (
                    <DropdownLink
                      key={item.label}
                      to={item.to}
                      icon={item.icon}
                      label={item.label}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Action Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu Button */}
          <button
            data-mobile-menu-button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Theme Toggle */}
          <button
            className={`p-2 rounded-full transition-colors ${
              isDark ? "hover:bg-slate-800" : "hover:bg-gray-100"
            }`}
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="material-symbols-outlined block">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Profile Section */}
          <div ref={profileRef} className="relative">
            <div
              className={`flex items-center gap-2 cursor-pointer p-1.5 pl-3 rounded-full border transition-all ${
                isDark
                  ? "border-slate-700 hover:bg-slate-800"
                  : "border-gray-200 hover:bg-gray-50"
              } ${
                isProfileOpen ? (isDark ? "bg-slate-800" : "bg-gray-100") : ""
              }`}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <p className="hidden lg:block text-xs font-semibold uppercase tracking-wider truncate max-w-[120px]">
                {user?.name || "Admin"}
              </p>
              <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-blue-500 flex-shrink-0">
                <img
                  src={user?.avatar || "../assets/default-avatar.png"}
                  alt="Profile"
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "../assets/default-avatar.png";
                  }}
                />
              </div>
              <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-sm">
                more_vert
              </span>
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div
                className={`absolute right-0 mt-2 w-56 rounded-lg shadow-xl border p-2 animate-in fade-in slide-in-from-top-2 ${
                  isDark
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-gray-100"
                }`}
                style={{ zIndex: 1000 }}
              >
                {/* User Info */}
                <div className="px-3 py-3 border-b border-gray-200 dark:border-slate-700">
                  <p className="font-semibold text-gray-900 dark:text-white truncate">
                    {user?.name || "Administrator"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user?.email || "admin@example.com"}
                  </p>
                </div>

                {/* Dropdown Items */}
                <div className="py-1 max-h-64 overflow-y-auto">
                  {profileDropdownItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-md text-sm transition-colors ${
                        item.isLogout
                          ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          : isDark
                          ? "hover:bg-slate-700 text-slate-200"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {item.icon}
                      </span>
                      <span className="flex-1 text-left">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-slate-900" : "bg-white"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
          {/* Navigation Links */}
          <div className="space-y-1 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
              Navigation
            </p>
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm transition-colors ${
                  isDark
                    ? "hover:bg-slate-800 text-slate-200"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined">chevron_right</span>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Manage Section */}
          <div className="space-y-1 mb-6">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
              Manage
            </p>
            {manageDropdownItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm transition-colors ${
                  isDark
                    ? "hover:bg-slate-800 text-slate-200"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Profile Section */}
          <div className="space-y-1 pt-4 border-t border-gray-200 dark:border-slate-700">
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
              Account
            </p>
            {profileDropdownItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-3 py-3 rounded-md text-sm transition-colors ${
                  item.isLogout
                    ? "text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    : isDark
                    ? "hover:bg-slate-800 text-slate-200"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Helper component for dropdown items
function DropdownLink({ to, icon, label, isDark }) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors whitespace-nowrap ${
        isDark
          ? "hover:bg-slate-700 text-slate-200"
          : "hover:bg-blue-50 text-gray-700"
      }`}
    >
      <span className="material-symbols-outlined text-[18px] flex-shrink-0">
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </Link>
  );
}
