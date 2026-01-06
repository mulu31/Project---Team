import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  isTransitioning: false,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Try to read from localStorage safely
    try {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme === "dark";
    } catch (error) {
      console.log("Error reading localStorage, defaulting to light:", error);
      return false;
    }
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Add transition class to body for smooth theme changes
    document.body.classList.add('theme-transition');
    
    // Apply theme classes
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Add a slight delay to make the transition more noticeable
    setTimeout(() => {
      setIsDark((prev) => !prev);
      
      // Reset transition state after theme change
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 50);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isTransitioning }}>
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
