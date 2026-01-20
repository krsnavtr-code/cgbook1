import React, { createContext, useState, useEffect, useContext } from "react";
import { api } from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Set auth token
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  };

  // Load user
  const loadUser = async () => {
    try {
      setAuthToken(token);
      const res = await api.get("/auth/me");
      setUser(res.data);
    } catch (err) {
      console.error("Error loading user", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Register user
  const register = async (formData) => {
    try {
      const res = await api.post("/auth/register", formData);
      const { token, user } = res.data;
      setAuthToken(token);
      setUser(user);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Registration failed",
      };
    }
  };

  // Login user
  const login = async (formData) => {
    try {
      const res = await api.post("/auth/login", formData);
      const { token, user } = res.data;
      setAuthToken(token);
      setToken(token);
      setUser(user);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Login failed",
      };
    }
  };

  // Logout
  const logout = () => {
    setAuthToken(null);
    setToken(null);
    setUser(null);
  };

  // Check for token on initial load
  useEffect(() => {
    if (token) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
