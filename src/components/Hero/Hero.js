// src/components/Hero/Hero.js
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAnalytics } from '../../hooks/useAnalytics';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const { language } = useLanguage();
  const { trackButtonClick } = useAnalytics();
  const [activeSlide, setActiveSlide] = useState(0);

  const universityImages = [
    '/images/univerpics/uni1.jpg',
    '/images/univerpics/uni2.jpg',
    '/images/univerpics/uni3.jpg',
    '/images/univerpics/uni4.jpg',
    '/images/univerpics/uni5.jpg',
    '/images/univerpics/uni6.jpg',
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % universityImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [universityImages.length]);

  const handleTelegramClick = () => {
    trackButtonClick('Hero CTA to Telegram Bot');
    window.open('https://t.me/china_connect_bot', '_blank');
  };

  const translations = {
    english: {
      tag: "🐉 Trusted by 100+ Students",
      title: "Your Gateway to\nWorld-Class\nEducation in China",
      subtitle: "We guide students from Uzbekistan & Central Asia to top Chinese universities — from application to arrival.",
      cta: "Start with Telegram Bot",
      ctaSecondary: "Explore Universities",
      stats: [
        { number: "100+", label: "Students Placed" },
        { number: "25+", label: "Partner Universities" },
        { number: "98%", label: "Success Rate" },
        { number: "7+", label: "Years Experience" },
      ]
    },
    russian: {
      tag: "🐉 Доверяют 100+ студентов",
      title: "Ваш путь к\nмировому\nобразованию в Китае",
      subtitle: "Мы сопровождаем студентов из Узбекистана и Центральной Азии в лучшие китайские университеты — от заявки до приезда.",
      cta: "Написать в Telegram",
      ctaSecondary: "Университеты",
      stats: [
        { number: "100+", label: "Студентов" },
        { number: "25+", label: "Университетов" },
        { number: "98%", label: "Успешность" },
        { number: "7+", label: "Лет опыта" },
      ]
    },
    uzbek: {
      tag: "🐉 100+ talabaning ishonchi",
      title: "Xitoyda jahon\nta'limiga\nkirish eshigi",
      subtitle: "Biz O'zbekiston va Markaziy Osiyodan talabalarni yetakchi Xitoy universitetlariga yo'llashda ko'maklashamiz.",
      cta: "Telegram botni boshlash",
      ctaSecondary: "Universitetlar",
      stats: [
        { number: "100+", label: "Talabalar" },
        { number: "25+", label: "Universitetlar" },
        { number: "98%", label: "Muvaffaqiyat" },
        { number: "7+", label: "Yil tajriba" },
      ]
    }
  };

  const t = translations[language] || translations.english;

  return (
    <section id="home" className="hero">
      {/* Background Slideshow */}
      <div className="hero-bg">
        {universityImages.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay" />
        {/* Decorative orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* Content */}
      <div className="container hero-container">
        <div className="hero-content">


          {/* Title */}
          <h1 className="hero-title">
            {t.title.split('\n').map((line, i) => (
              <span key={i} className={i === 1 ? 'hero-title-accent' : ''}>
                {line}
                {i < t.title.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">{t.subtitle}</p>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="btn hero-btn-primary" onClick={handleTelegramClick} id="hero-telegram-btn">
              <i className="fab fa-telegram" />
              {t.cta}
            </button>
            <button
              className="btn btn-ghost hero-btn-secondary"
              onClick={() => scrollToSection('universities')}
              id="hero-explore-btn"
            >
              {t.ctaSecondary}
              <i className="fas fa-arrow-right" />
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            {t.stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-number">{stat.number}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="hero-indicators">
          {universityImages.map((_, i) => (
            <button
              key={i}
              className={`hero-indicator ${i === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" onClick={() => scrollToSection('services')}>
        <div className="scroll-hint-mouse">
          <div className="scroll-hint-wheel" />
        </div>
      </div>
    </section>
  );
};

export default Hero;