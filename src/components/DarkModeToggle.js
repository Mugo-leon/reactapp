import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // Check local storage for the saved dark mode preference
  const savedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false;

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    // Apply dark mode styles to the body
    document.body.classList.toggle('dark-mode', isDarkMode);

    // Save the dark mode preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div class = "toggle">
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        {isDarkMode ? 'Toggle Light Mode ☀️' : 'Toggle Dark Mode 🌙'}
      </label>
    </div>
  );
};

export default DarkModeToggle;