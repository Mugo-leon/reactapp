import React, { useState, useEffect } from 'react';
import ChildAgeSelector from './ChildAgeSelector';
import ImmunizationDisplay from './ImmunizationDisplay';
import DarkModeToggle from './DarkModeToggle';
import Header from "./Header";
import Landing from './Landing';
import './App.css'; 

const App = () => {
  const [selectedAge, setSelectedAge] = useState(1);
  const [immunizationData, setImmunizationData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/Immunizations');
        const data = await response.json();
        setImmunizationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDarkModeChange = (newMode) => {
    setIsDarkMode(newMode);
  };

  const handleEnterButtonClick = () => {
    setShowWelcome(false);
    setShowLanding(true);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <DarkModeToggle isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeChange} />
      <br></br>
      {showWelcome && (
        <section id="welcome">
        <h1>Hi There, Welcome to Immunizer App</h1>
        <h2>Press Enter to Check the Status of your Child</h2>
          <button id="enterButton" onClick={handleEnterButtonClick}>
            Enter
          </button>
          <br></br>
        </section>
      )}

{showLanding && immunizationData && (
        <>
          <Header isLoggedIn={true} />
          <ChildAgeSelector onSelect={(age) => setSelectedAge(age)} />
          <ImmunizationDisplay selectedAge={selectedAge} immunizationData={immunizationData} />
          <Landing />
        </>
      )}

      {!immunizationData && <p>Loading immunization data...</p>}
    </div>
  );
};

export default App;










