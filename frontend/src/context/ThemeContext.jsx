import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // LocalStorage check karein, agar nahi mile to system theme check karein
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Purani class hatayein aur nayi lagayein
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // LocalStorage mein save karein
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Navbar mein aapne 'darkMode' boolean use kiya hai, isliye ise convert kar rahe hain
  const darkMode = theme === "dark";

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook
export const useTheme = () => {
  return useContext(ThemeContext);
};
