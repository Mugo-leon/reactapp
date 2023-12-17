import React from 'react';
import ImmunizationDisplay from './ImmunizationDisplay';

const ImmunizationDisplayPage = ({ selectedAge, immunizationData }) => {
  return (
    <div>
      <h1>Immunization Display Page</h1>
      {immunizationData && <ImmunizationDisplay selectedAge={selectedAge} immunizationData={immunizationData} />}
    </div>
  );
};

export default ImmunizationDisplayPage;
