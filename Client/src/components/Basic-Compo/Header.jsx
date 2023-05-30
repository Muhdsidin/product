import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="fixed-header">
      <nav className="menu">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Affiliate</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      
    </header>
  );
};

export default Header;
