import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

// eslint-disable-next-line react/prop-types
export const DarkModeProvider = ({ children }) => {
  const savedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(savedDarkMode);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
