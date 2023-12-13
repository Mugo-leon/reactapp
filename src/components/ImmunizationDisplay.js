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
    <div>
      <h2>Recommended Immunizations for Selected Age:</h2>
      <ul>
        {recommendedImmunizations.map((immunization, index) => (
          <li key={index}>{immunization.trim()}</li>
        ))}
      </ul>

      <h2>Prior Immunization:</h2>
      <p>{priorImmunization}</p>
    </div>
  );
};

export default ImmunizationDisplay;

