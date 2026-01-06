import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";

function Router() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </div>
  );
}

export default Router;
