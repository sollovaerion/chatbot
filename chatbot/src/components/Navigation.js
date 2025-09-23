import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-top">
          <Link to="/" className="nav-logo">
            <img src="/images/IMG_9695.jpeg" alt="Infra Project Logo" className="logo-image" />
          </Link>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Kryefaqja
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shërbimet
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Rreth Nesh
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakto
            </Link>
            <Link 
              to="/chatbot" 
              className={`nav-link chatbot-link ${isActive('/chatbot') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              💬 Asistenti Virtual
            </Link>
          </div>

          <button 
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>

        <div className="nav-text">
          <span className="logo-main">Infra Project</span>
          <span className="logo-sub">Nderrmarrje Ndertimore</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

