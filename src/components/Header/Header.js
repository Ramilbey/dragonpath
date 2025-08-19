// src/components/Header/Header.js
import React from 'react';
import './Header.css';


const Header = ({ scrollToSection, activeSection, menuOpen, setMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
                  <div className="logo">
            <img src="/images/dragon.jpg" className='dragonImage'></img>
            {/* <i className="fas fa-graduation-cap"></i> */}
            <h1>Dragon<span>Path</span></h1>
            <div className="logo-subtitle"> учеба в китае</div>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</a>
            <a href="#universities" className={activeSection === 'universities' ? 'active' : ''} onClick={() => scrollToSection('universities')}>Universities</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a>
            <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={() => scrollToSection('testimonials')}>Testimonials</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;