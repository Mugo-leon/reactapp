import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ChildAgeSelectorPage from './ChildAgeSelectorPage';
import ImmunizationDisplayPage from './ImmunizationDisplayPage';
import DarkModeToggle from './DarkModeToggle';
import HomePage from './HomePage'; 
import Header from './Header';      
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
        const response = await fetch('https://immunizer-scheduler-backend.onrender.com/Immunizations');
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
    <Router>
      <div className={isDarkMode ? 'dark-mode' : ''}>
        <DarkModeToggle isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeChange} />

        <nav>
          <ul>
            <li>
              <Link to="/" className="button-link">Home</Link>
            </li>
            <li>
              <Link to="/child-age-selector"className="button-link">Child Age Selector</Link>
            </li>
            <li>
              <Link to="/immunization-display"className="button-link">Immunization Display</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage showWelcome={showWelcome} showLanding={showLanding} immunizationData={immunizationData} handleEnterButtonClick={handleEnterButtonClick} />} />

          <Route path="/child-age-selector" element={<ChildAgeSelectorPage onSelect={(age) => setSelectedAge(age)} />} />

          <Route path="/immunization-display" element={<ImmunizationDisplayPage selectedAge={selectedAge} immunizationData={immunizationData} />} />
        </Routes>
        <Header />
      </div>
    </Router>
  );
};

export default App;