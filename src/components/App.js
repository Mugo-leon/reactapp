
import React from 'react';
import ChildAgeSelector from './ChildAgeSelector';
import React, { useState } from 'react';
import Header from "./Header";
import DarkModeToggle from './DarkModeToggle';
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeChange = (newMode) => {
    setIsDarkMode(newMode);
  };

  return (
    <div>
          <ChildAgeSelector onSelect={(age) => (age)} />
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <DarkModeToggle isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeChange} />
          <Header isLoggedIn={true} />
    </div>
  );
};

export default App;