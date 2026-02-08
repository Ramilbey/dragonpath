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
      home: "Home",
      services: "Services",
      universities: "Universities",
      about: "About",
      testimonials: "Testimonials",
      subtitle: "Study in China"
    },
    russian: {
      home: "Главная",
      services: "Услуги",
      universities: "Университеты",
      about: "О нас",
      testimonials: "Отзывы",
      subtitle: "Учеба в Китае"
    },
    uzbek: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      universities: "Universitetlar",
      about: "Biz haqimizda",
      testimonials: "Izohlar",
      subtitle: "Xitoyda ta'lim"
    }
  };

  const t = translations[language] || translations.english;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div
            className={`nav-overlay ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>

          <div className="logo">
            <img src="/images/logo/dragon.jpg" alt='DragonPath logo' className='dragonImage' />
            <div className="logo-text">
              <h1><span className="dragon-text">Dragon</span><span className="path-text">Path</span></h1>
              <div className="logo-subtitle">{t.subtitle}</div>
            </div>
          </div>

          <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => scrollToSection('home')}
            >
              {t.home}
            </a>
            <a
              href="#services"
              className={activeSection === 'services' ? 'active' : ''}
              onClick={() => scrollToSection('services')}
            >
              {t.services}
            </a>
            <a
              href="#universities"
              className={activeSection === 'universities' ? 'active' : ''}
              onClick={() => scrollToSection('universities')}
            >
              {t.universities}
            </a>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => scrollToSection('about')}
            >
              {t.about}
            </a>
            <a
              href="#testimonials"
              className={activeSection === 'testimonials' ? 'active' : ''}
              onClick={() => scrollToSection('testimonials')}
            >
              {t.testimonials}
            </a>

            {/* Theme Toggle & Language Switcher */}
            <div className="header-actions">
              <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
              </button>

              <div className="language-switcher">
                <button
                  className={language === 'english' ? 'active' : ''}
                  onClick={() => setLanguage('english')}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  className={language === 'russian' ? 'active' : ''}
                  onClick={() => setLanguage('russian')}
                  aria-label="Переключить на русский"
                >
                  RU
                </button>
                <button
                  className={language === 'uzbek' ? 'active' : ''}
                  onClick={() => setLanguage('uzbek')}
                  aria-label="O'zbek tiliga o'tish"
                >
                  UZ
                </button>
              </div>
            </div>
          </div>

          <div
            className={`burger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
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