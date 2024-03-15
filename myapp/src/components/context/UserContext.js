import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userApis from "../apis/UserApis";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("userId") ? true : false
  );
  const navigate = useNavigate();

  const login = async (emailOrPhone, password) => {
    try {
      const response = await userApis.login(emailOrPhone, password);
      if (response.status === 200) {
        const userId = response.data.host._id;
        localStorage.setItem("userId", userId);
        setUser(response.data.host);
        setIsAuthenticated(true);
        navigate("/");

        setError(null);
      } else {
        setIsAuthenticated(false);
        setError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      setIsAuthenticated(false);
      setError("An error occurred while logging in. Please try again.");
      console.error("Login error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, login, logout, error }}
    >
      {children}
    </UserContext.Provider>
  );
};
