import React from 'react';

const HomePage = ({ showWelcome, showLanding, immunizationData, handleEnterButtonClick }) => {
  return (
    <div>
      {showWelcome && (
        <section id="welcome">
          {/* ... existing code ... */}
        </section>
      )}

      {showLanding && immunizationData && (
        <>
          {/* ... existing code ... */}
        </>
      )}

      {!immunizationData && <p>Loading immunization data...</p>}
    </div>
  );
};

export default HomePage;
