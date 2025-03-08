import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';
import './navbar.css';

function CustomNavbar() {
  const location = useLocation();
  const { language } = useContext(LanguageContext); 

  return (
    <nav className="glass-navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            {language === "pt" ? "Início" : "Home"}  
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
            {language === "pt" ? "Projetos" : "Projects"} 
          </Link>
          <Link
            to="/resume"
            className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>
            {language === "pt" ? "Currículo" : "Resume"}  
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
