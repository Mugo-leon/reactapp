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
      
    </div>
  );
};

export default App;