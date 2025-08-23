// src/components/Header/Header.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = ({ scrollToSection, activeSection, menuOpen, setMenuOpen }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <img src="/images/logo/dragon.jpg" alt='dragon path logo' className='dragonImage' />
            <h1>Dragon<span>Path</span></h1>
            <div className="logo-subtitle">учеба в китае</div>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</a>
            <a href="#universities" className={activeSection === 'universities' ? 'active' : ''} onClick={() => scrollToSection('universities')}>Universities</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a>
            <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={() => scrollToSection('testimonials')}>Testimonials</a>

            
            {/* Language Switcher */}
            <div className="language-switcher">
              <button 
                className={language === 'english' ? 'active' : ''} 
                onClick={() => setLanguage('english')}
              >
                EN
              </button>
              <button 
                className={language === 'russian' ? 'active' : ''} 
                onClick={() => setLanguage('russian')}
              >
                RU
              </button>
              <button 
                className={language === 'uzbek' ? 'active' : ''} 
                onClick={() => setLanguage('uzbek')}
              >
                UZ
              </button>
            </div>
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