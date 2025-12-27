import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Try to read from localStorage safely
    try {
      const savedTheme = localStorage.getItem("theme");
      console.log("Initial theme from localStorage:", savedTheme);
      return savedTheme === "dark";
    } catch (error) {
      console.log("Error reading localStorage, defaulting to light:", error);
      return false;
    }
  });

  useEffect(() => {
    console.log("Theme changed to:", isDark ? "dark" : "light");

    // Apply class to html or body element
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("Applied dark theme class");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("Removed dark theme class");
    }
  }, [isDark]);

  const toggleTheme = () => {
    console.log("Toggling theme from:", isDark ? "dark" : "light");
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    console.error("useTheme must be used within ThemeProvider");
  }
  return context;
};
