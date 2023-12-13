import React, { useState, useEffect } from 'react';
import ChildAgeSelector from './ChildAgeSelector';
import ImmunizationDisplay from './ImmunizationDisplay';
import DarkModeToggle from './DarkModeToggle';
import Header from "./Header";
import './App.css';

const App = () => {
  const [selectedAge, setSelectedAge] = useState(1);
  const [immunizationData, setImmunizationData] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

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









