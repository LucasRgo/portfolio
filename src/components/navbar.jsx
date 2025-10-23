import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import "./navbar.css";

function CustomNavbar() {
    const location = useLocation();
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang) => {
        if (language !== lang) {
            setLanguage(lang);
        }
    };

    return (
        <nav className="glass-navbar">
            <div className="navbar-container">
                <div className="navbar-links">
                    <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
                        {language === "pt" ? "Início" : "Home"}
                    </Link>
                    <Link
                        to="/projects"
                        className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`}>
                        {language === "pt" ? "Projetos" : "Projects"}
                    </Link>
                    <Link to="/resume" className={`nav-link ${location.pathname === "/resume" ? "active" : ""}`}>
                        {language === "pt" ? "Currículo" : "Resume"}
                    </Link>
                </div>
                <div className="language-switch" aria-label="Language selector">
                    <button
                        type="button"
                        className="toggle-switch"
                        onClick={() => handleLanguageChange(language === "en" ? "pt" : "en")}
                        aria-label={`Switch to ${language === "en" ? "Portuguese" : "English"}`}>
                        <span className="language-label left">EN</span>
                        <span className={`toggle-slider ${language === "pt" ? "active" : ""}`}></span>
                        <span className="language-label right">PT</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default CustomNavbar;
