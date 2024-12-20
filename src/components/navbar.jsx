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
            to="/lucas-portfolio/"
            className={`nav-link ${location.pathname === '/portfolio/home' ? 'active' : ''}`}>
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname === '/portfolio/projects' ? 'active' : ''}`}>
            Projects
          </Link>
          <Link
            to="/resume"
            className={`nav-link ${location.pathname === '/portfolio/resume' ? 'active' : ''}`}>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
