import React, { useState, useEffect } from 'react';
import ChildAgeSelector from './ChildAgeSelector';
import DarkModeToggle from './DarkModeToggle';
import Header from "./Header";
import './App.css';

const App = () => {
  const [selectedAge, setSelectedAge] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeChange = (newMode) => {
    setIsDarkMode(newMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <DarkModeToggle isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeChange} />
      <>
        <Header isLoggedIn={true} />
        <ChildAgeSelector onSelect={(age) => setSelectedAge(age)} />
      </>
    </div>
  );
};

export default App;
