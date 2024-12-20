import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function CustomNavbar() {
  const location = useLocation();

  return (
    <nav className="glass-navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link
            to="/portfolio/"
            className={`nav-link ${location.pathname === '/portfolio/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link
            to="/portfolio/projects"
            className={`nav-link ${location.pathname === '/portfolio/projects' ? 'active' : ''}`}>
            Projects
          </Link>
          <Link
            to="/portfolio/resume"
            className={`nav-link ${location.pathname === '/portfolio/resume' ? 'active' : ''}`}>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
