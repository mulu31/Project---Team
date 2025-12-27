import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext.jsx";
import { useTheme } from "../Hooks/ThemeContext";

// Note: Ensure your logo image is still imported properly
import logoImg from "../assets/group_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

export default function AdminNavbar() {
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { isDark, toggleTheme } = useTheme();
  const { logout } = useAuth();

  return (
    <nav className="admin-navbar">
      {/* Brand Section */}
      <div className="admin-navbar__brand">
        <img src={logoImg} alt="Company Logo" className="admin-navbar__logo" />
        <span className="admin-navbar__title">Team Project</span>
      </div>

      {/* Main Navigation Links */}
      <div className="admin-navbar__links">
        <a href="#" className="admin-navbar__link">
          Home
        </a>
        <a href="#" className="admin-navbar__link">
          About Us
        </a>
        <a href="#" className="admin-navbar__link">
          Projects
        </a>
        <a href="#" className="admin-navbar__link">
          Contact
        </a>
        <a href="#" className="admin-navbar__link">
          Updates
        </a>
        <a href="#" className="admin-navbar__link">
          Testimonials
        </a>

        {/* Manage Dropdown */}
        <div
          className="admin-navbar__dropdown"
          onMouseEnter={() => setIsManageOpen(true)}
          onMouseLeave={() => setIsManageOpen(false)}
        >
          <button className="admin-navbar__btn-manage">
            <span className="material-symbols-outlined">settings</span>
            Manage
            <span className="material-symbols-outlined">
              {isManageOpen ? "expand_less" : "expand_more"}
            </span>
          </button>

          {isManageOpen && (
            <div className="admin-navbar__menu">
              <p className="admin-navbar__menu-header">Join as</p>
              <Link to="/" className="admin-navbar__menu-item">
                <span className="material-symbols-outlined">person</span> Member
              </Link>
              <Link to="/" className="admin-navbar__menu-item">
                <span className="material-symbols-outlined">groups</span> Team
              </Link>
              <Link to="/" className="admin-navbar__menu-item">
                <span className="material-symbols-outlined">
                  folder_managed
                </span>{" "}
                Projects
              </Link>
              <Link to="/" className="admin-navbar__menu-item">
                <span className="material-symbols-outlined">event</span> Events
              </Link>
              <Link to="/" className="admin-navbar__menu-item">
                <span className="material-symbols-outlined">reviews</span>{" "}
                Testimonials
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Action Section */}
      <div className="admin-navbar__actions">
        {/* Theme Toggle */}
        <button className="admin-navbar__theme-btn" onClick={toggleTheme}>
          <span className="material-symbols-outlined">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>

        {/* Profile Section */}
        <div
          className="admin-navbar__profile-trigger"
          onClick={() => setIsProfileOpen((prev) => !prev)}
        >
          <p className="admin-navbar__user-name">Admin Name</p>
          <span className="admin-navbar__avatar-frame">
            {/* Kept as img since it is "accessed from data" */}
            <img src="../assets/default-avatar.png" alt="Profile" />
          </span>
          <span className="material-symbols-outlined">more_vert</span>
        </div>

        {/* Logout Overlay */}
        {isProfileOpen && (
          <button className="admin-navbar__logout-btn" onClick={logout}>
            <span className="material-symbols-outlined">logout</span>
            LogOut
          </button>
        )}
      </div>
    </nav>
  );
}
