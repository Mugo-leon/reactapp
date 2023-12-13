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
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <DarkModeToggle isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeChange} />
      {immunizationData ? (
        <>
          <Header isLoggedIn={true} />
          <ChildAgeSelector onSelect={(age) => setSelectedAge(age)} />
          <ImmunizationDisplay selectedAge={selectedAge} immunizationData={immunizationData} />
        </>
      ) : (
        <p>Loading immunization data...</p>
      )}
    </div>
  );
};

export default App;