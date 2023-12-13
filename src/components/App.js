<<<<<<< HEAD
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
      
        
=======
import React, { useState, useEffect } from 'react';

import Header from "./Header";


const App = () => {
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/Immunizations');
  //       const data = await response.json();
  //       setImmunizationData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <div >
  

          <Header isLoggedIn={true} />
>>>>>>> origin/development
      
    </div>
  );
};

export default App;