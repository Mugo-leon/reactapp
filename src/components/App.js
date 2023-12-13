import React from 'react';
import ChildAgeSelector from './ChildAgeSelector';

const App = () => {

  return (
    <div>
        <>
          <ChildAgeSelector onSelect={(age) => (age)} />
        </>
    </div>
  );
};

export default App;










