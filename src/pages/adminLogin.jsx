import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext.jsx"; // 1. Import the hook
import img from "../assets/group_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

export default function AdminLogin() {
  const { login } = useAuth(); // 2. Destructure login function
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (formData.username === "admin" && formData.password === "Admin@123") {
      login("dummy-admin-token");

      navigate("/admin/project-admin-dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src={img} alt="lock icon" className="lock-icon" />
          <h2>Welcome Back</h2>
          <p>Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">
              <img src={img} alt="username" />
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="you@example.com"
              value={formData.username}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              <img src={img} alt="password" />
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={isLoading}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? (
              <>
                <img src={img} alt="loading" className="loading-icon" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button type="button" className="google-btn" disabled={isLoading}>
            <img src={img} alt="google" />
            Sign in with Google
          </button>

          <div className="signup-link">
            <p>
              Don't have an account?{" "}
              <Link to="/" className="signup-text">
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
