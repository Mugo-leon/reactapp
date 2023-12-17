import React from 'react';
import ChildAgeSelector from './ChildAgeSelector';

const ChildAgeSelectorPage = ({ onSelect }) => {
  return (
    <div>
      <h1>Child Age Selector Page</h1>
      <ChildAgeSelector onSelect={onSelect} />
    </div>
  );
};

export default ChildAgeSelectorPage;
