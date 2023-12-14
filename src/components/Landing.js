import React, { useState } from 'react';

const Landing= () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLandingPage, setShowLandingPage] = useState(false);

  const handleEnterClick = () => {
    setShowWelcome(false);
    setShowLandingPage(true);
  };

  return (
    <div>
      {showWelcome && (
        <div id="welcome">
          <button onClick={handleEnterClick} id="enterButton">
          </button>
        </div>
      )}
      {showLandingPage && (
        <div id="landing">
        </div>
      )}
    </div>
  );
};

export default Landing;