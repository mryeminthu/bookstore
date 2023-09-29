import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <div className="navbar-title">
        <h1>BookStore CMS</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <div className="navbar-right">
      <i className="fa-solid fa-user" />
    </div>
  </nav>
);

export default Navbar;
