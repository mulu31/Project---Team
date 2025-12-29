import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import App from "./App";

function Router() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Routes>
        <Route path="/admin/project-team-admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="*" element={<App />} />
      </Routes>
    </div>
  );
}

export default Router;
