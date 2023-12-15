import React, { useEffect, useState } from 'react';

const ImmunizationDisplay = ({ selectedAge, immunizationData }) => {
  const [recommendedImmunizations, setRecommendedImmunizations] = useState([]);
  const [nextImmunization, setNextImmunization] = useState('');

  useEffect(() => {
    // Find the immunization data based on the selected age
    const selectedImmunization = immunizationData.find(
      (immunization) => immunization.id === selectedAge
    );

    // Extract recommended immunizations and prior immunization from the selected data
    const recommended = selectedImmunization ? selectedImmunization.name.split('\n') : [];
    const prior = selectedImmunization ? selectedImmunization.next_immunization : '';

    setRecommendedImmunizations(recommended);
    setNextImmunization(prior);
  }, [selectedAge, immunizationData]);

  return (
    
    <div className = "immune-display">
      <h2>Recommended Immunizations for Selected Age:</h2>
      <ul>
        {recommendedImmunizations.map((immunization, index) => (
          <div key={index}>{immunization.trim()}</div>
        ))}
      </ul>

      <h2>Next Immunization:</h2>
      <p className = "immune-content">{nextImmunization}</p>
      
    </div>
    
  );
};

export default ImmunizationDisplay;



