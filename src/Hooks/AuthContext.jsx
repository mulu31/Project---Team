import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  admin: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(() => localStorage.getItem("adminToken"));

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setAdmin(token);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
