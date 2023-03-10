import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem("theme") == "true" ? true : false);

  useEffect(() => {
    localStorage.setItem("theme", darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}