import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <h1>Rent-A-Pup: Your Daily Dog Companion</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dogs">Available Dogs</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;