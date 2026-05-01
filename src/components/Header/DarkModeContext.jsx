import React, { createContext, useContext, useState, useEffect } from 'react';
import './DarkMode.css';

// Create the context
const DarkModeContext = createContext();

// Custom hook to use the context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Provider component
export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme ? savedTheme === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (isDark) {
      htmlElement.classList.add('dark-mode');
      htmlElement.classList.remove('light-mode');
      bodyElement.classList.add('dark-mode');
      bodyElement.classList.remove('light-mode');
      
      // Force background color
      bodyElement.style.backgroundColor = '#111827';
      bodyElement.style.color = '#f1f5f9';
    } else {
      htmlElement.classList.add('light-mode');
      htmlElement.classList.remove('dark-mode');
      bodyElement.classList.add('light-mode');
      bodyElement.classList.remove('dark-mode');
      
      // Reset to light colors
      bodyElement.style.backgroundColor = '#ffffff';
      bodyElement.style.color = '#111827';
    }
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  const value = {
    isDark,
    toggleTheme
  };

  return (
    <DarkModeContext.Provider value={value}>
      <div className={`app-container ${isDark ? 'dark-mode' : 'light-mode'}`}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};