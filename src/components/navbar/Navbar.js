import React from 'react';
import './navbar.css';

const Navbar = () => (
  <div className="nav-container">
    <nav className="nav-bar">
      <div>
        <ul>
          <li>
            <h2>Book Store</h2>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
        </ul>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo" />
      </div>
    </nav>
  </div>
);
export default Navbar;
