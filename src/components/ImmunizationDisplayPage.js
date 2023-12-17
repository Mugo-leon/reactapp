import React from 'react';
import ImmunizationDisplay from './ImmunizationDisplay';

const ImmunizationDisplayPage = ({ selectedAge, immunizationData }) => {
  return (
    <div>
      {immunizationData && <ImmunizationDisplay selectedAge={selectedAge} immunizationData={immunizationData} />}
    </div>
  );
};

export default ImmunizationDisplayPage;
