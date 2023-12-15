import React, { useEffect, useState } from 'react';

const ImmunizationDisplay = ({ selectedAge, immunizationData }) => {
  const [recommendedImmunizations, setRecommendedImmunizations] = useState([]);
  const [priorImmunization, setPriorImmunization] = useState('');

  useEffect(() => {
    // Find the immunization data based on the selected age
    const selectedImmunization = immunizationData.find(
      (immunization) => immunization.id === selectedAge
    );

    // Extract recommended immunizations and prior immunization from the selected data
    const recommended = selectedImmunization ? selectedImmunization.name.split('\n') : [];
    const prior = selectedImmunization ? selectedImmunization.prior_immunization : '';

    setRecommendedImmunizations(recommended);
    setPriorImmunization(prior);
  }, [selectedAge, immunizationData]);

  return (
    
    <div className = "immune-display">
      <h2>Recommended Immunizations for Selected Age:</h2>
      <ul>
        {recommendedImmunizations.map((immunization, index) => (
          <div key={index}>{immunization.trim()}</div>
        ))}
      </ul>

      <h2>Prior Immunization:</h2>
      <p className = "immune-content">{priorImmunization}</p>
      
    </div>
    
  );
};

export default ImmunizationDisplay;



