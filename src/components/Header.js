import React, { useState, useEffect } from 'react';

function Header() {
  // Check for stored credentials on initial load
  const storedUsername = localStorage.getItem('username') || '';
  const [username, setUsername] = useState(storedUsername);
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedUsername);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    // If username is present, consider the user as logged in
    setIsLoggedIn(!!storedUsername);
  }, [storedUsername]);

  function handleLogin() {
    // Validate username only when the login button is clicked
    if (username.trim() !== '') {
      setIsLoggedIn(true);

      // Store username in localStorage
      localStorage.setItem('username', username);

      // Clear any previous login error
      setLoginError('');
    } else {
      // Display an error message or handle authentication failure appropriately.
      setLoginError('Invalid username');
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);

    // Clear stored username on logout
    localStorage.removeItem('username');
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>You are logged in as {username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
          <button onClick={handleLogin}>Login</button>
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </div>
      )}
    </div>
  );
}

export default Header;



