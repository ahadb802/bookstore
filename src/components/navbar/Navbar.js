import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
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
