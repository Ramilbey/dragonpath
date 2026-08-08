// src/components/Header/Header.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = ({ scrollToSection, activeSection, menuOpen, setMenuOpen, isScrolled }) => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Navigation translations
  const translations = {
    english: {
      about: "ABOUT",
      services: "SERVICES",
      universities: "UNIVERSITIES",
      stories: "STORIES",
      cta: "START YOUR JOURNEY"
    },
    russian: {
      about: "О НАС",
      services: "УСЛУГИ",
      universities: "УНИВЕРСИТЕТЫ",
      stories: "ИСТОРИИ",
      cta: "НАЧАТЬ ПУТЬ"
    },
    uzbek: {
      about: "BIZ HAQIMIZDA",
      services: "XIZMATLAR",
      universities: "UNIVERSITETLAR",
      stories: "HIKOYALAR",
      cta: "SAFARNI BOSHLASH"
    }
  };

  const t = translations[language] || translations.english;

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <nav className="header-nav">
          <div
            className={`nav-overlay ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Left Brand Wordmark */}
          <div
            className="brand-logo"
            onClick={() => scrollToSection('home')}
            role="button"
            tabIndex={0}
          >
            <span className="brand-wordmark">DRAGONPATH<span className="brand-dot">.</span></span>
          </div>

          {/* Center Links */}
          <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => { setMenuOpen(false); scrollToSection('about'); }}
            >
              {t.about}
            </a>
            <a
              href="#services"
              className={activeSection === 'services' ? 'active' : ''}
              onClick={() => { setMenuOpen(false); scrollToSection('services'); }}
            >
              {t.services}
            </a>
            <a
              href="#universities"
              className={activeSection === 'universities' ? 'active' : ''}
              onClick={() => { setMenuOpen(false); scrollToSection('universities'); }}
            >
              {t.universities}
            </a>
            <a
              href="#testimonials"
              className={activeSection === 'testimonials' ? 'active' : ''}
              onClick={() => { setMenuOpen(false); scrollToSection('testimonials'); }}
            >
              {t.stories}
            </a>

            {/* Mobile Controls */}
            <div className="mobile-actions">
              <div className="language-switcher">
                <button className={language === 'english' ? 'active' : ''} onClick={() => setLanguage('english')}>EN</button>
                <button className={language === 'russian' ? 'active' : ''} onClick={() => setLanguage('russian')}>RU</button>
                <button className={language === 'uzbek' ? 'active' : ''} onClick={() => setLanguage('uzbek')}>UZ</button>
              </div>

              <a
                href="https://t.me/china_connect_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-editorial-accent nav-cta"
              >
                {t.cta}
              </a>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="header-right">
            <div className="language-switcher desktop-only">
              <button className={language === 'english' ? 'active' : ''} onClick={() => setLanguage('english')}>EN</button>
              <button className={language === 'russian' ? 'active' : ''} onClick={() => setLanguage('russian')}>RU</button>
              <button className={language === 'uzbek' ? 'active' : ''} onClick={() => setLanguage('uzbek')}>UZ</button>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
            </button>

            <a
              href="https://t.me/china_connect_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial btn-editorial-accent nav-cta desktop-only"
            >
              {t.cta}
            </a>

            {/* Mobile Hamburger */}
            <div
              className={`burger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;