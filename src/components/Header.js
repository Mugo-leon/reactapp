import React, { useState } from 'react';

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  console.log({isLoggedIn, setIsLoggedIn})
  
  function handleClick(event) {
    setIsLoggedIn(!isLoggedIn)
  }
  
  return <button onClick={handleClick}>{isLoggedIn ? "You are logged In" : "Please Log In"}</button>
}

export default Header;