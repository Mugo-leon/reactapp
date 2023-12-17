import React from 'react';

const HomePage = ({ showWelcome, immunizationData, handleEnterButtonClick }) => {
  return (
    <div>
      {showWelcome && (
        <section id="welcome">
        </section>
      )}

      {immunizationData && (
        <>
        </>
      )}

      {!immunizationData && <p>Loading immunization data...</p>}
    </div>
  );
};

export default HomePage;
