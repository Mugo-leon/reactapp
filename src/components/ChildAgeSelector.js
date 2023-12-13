import React, { useState } from 'react';

const ChildAgeSelector = ({ onSelect }) => {
  const ageOptions = [
    { label: 'At Birth', value: 1 },
    { label: '6 Weeks', value: 2 },
    { label: '10 Weeks', value: 3 },
    { label: '14 Weeks', value: 4 },
    { label: '6 Months', value: 5 },
  ];

  const [selectedAge, setSelectedAge] = useState(ageOptions[0].value);

  const handleAgeSelect = (e) => {
    setSelectedAge(parseInt(e.target.value, 10));
    onSelect(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label>
        Select Child's Age:
        <select value={selectedAge} onChange={handleAgeSelect}>
          {ageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ChildAgeSelector;
