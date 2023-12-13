import React, { useState } from 'react';
import './App.css';

import DarkModeToggle from './DarkModeToggle';



const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeChange = (newMode) => {
    setIsDarkMode(newMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <DarkModeToggle isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeChange} />
      
        
      
    </div>
  );
};

export default App;
