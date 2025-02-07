import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a ThemeContext with default value 'light'
const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  // Check saved theme in localStorage or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // State to manage the current theme
  const [theme, setTheme] = useState(savedTheme);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save the theme in localStorage
  };

  // Update the body's class based on the theme
  useEffect(() => {
    document.body.className = theme; // Apply the theme to the body element
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
