import React from 'react';

const HomePage = ({ showWelcome, immunizationData, handleEnterButtonClick }) => {
  return (
    <div>
      {showWelcome && (
        <section id="welcome">
          <h1>Welcome to Immunizer Scheduler!</h1>
          <p>Just like the way computers need updates and anti-viruses to prevent attacks from malware, our little ones need protection from biological viruses. Let Immunizer Scheduler help you keep track of your child's immunization schedule.</p>
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

