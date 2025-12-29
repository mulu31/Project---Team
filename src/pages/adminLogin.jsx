import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthContext.jsx";

// Simple Icon Component for consistent styling
const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined shrink-0 ${className}`}>
    {name}
  </span>
);

export default function AdminLogin() {
  const { login } = useAuth();
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

    // Mock Auth Logic
    setTimeout(() => {
      if (formData.username === "admin" && formData.password === "Admin@123") {
        login("dummy-admin-token");
        navigate("/admin/project-team-admin");
      } else {
        setError("Invalid credentials. Use admin / Admin@123");
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white mb-4 shadow-lg shadow-blue-500/30">
                <Icon name="admin_panel_settings" className="text-4xl" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Welcome Back
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
                Sign in to your admin portal
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3 animate-shake">
                <Icon name="error" className="text-red-500" />
                <p className="text-sm font-bold text-red-600 dark:text-red-400">
                  {error}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                  <Icon name="person" className="text-[18px]" /> Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter admin username"
                    className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white placeholder:text-slate-400"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                  <Icon name="lock" className="text-[18px]" /> Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white placeholder:text-slate-400"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="text-slate-600 dark:text-slate-400 group-hover:text-blue-600 transition-colors">
                    Remember me
                  </span>
                </label>
                <Link
                  to="/"
                  className="text-blue-600 hover:underline font-bold"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Icon name="login" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                social access
              </span>
              <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full mt-6 flex items-center justify-center gap-3 px-4 py-3.5 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300 font-bold text-sm"
            >
              <img src="www.gstatic.com" className="w-5 h-5" alt="G" />
              Sign in with Google
            </button>
          </div>

          {/* Footer Link */}
          <div className="py-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Don't have an account?{" "}
              <span className="text-blue-600 hover:text-blue-700 font-bold">
                Contact Super Admin
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
