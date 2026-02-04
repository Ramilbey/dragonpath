// src/components/Hero/Hero.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAnalytics } from '../../hooks/useAnalytics';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const { language } = useLanguage();
  const { trackButtonClick } = useAnalytics();

  const universityImages = [
    '/images/univerpics/uni1.jpg',
    '/images/univerpics/uni2.jpg',
    '/images/univerpics/uni3.jpg',
    '/images/univerpics/uni4.jpg',
    '/images/univerpics/uni5.jpg',
    '/images/univerpics/uni6.jpg',
    '/images/univerpics/uni7.jpg',
    '/images/univerpics/uni8.jpg',
    '/images/univerpics/uni9.jpg',
    '/images/univerpics/uni10.jpg'
  ];

  const handleTelegramClick = () => {
    trackButtonClick('Hero CTA to Telegram Bot');
    window.open('https://t.me/china_connect_bot', '_blank');
  };

  // Translation object
  const translations = {
    english: {
      title: "Your Gateway to World-Class Education in China",
      subtitle: "We help students from Uzbekistan and Central Asia achieve their dreams of studying at top Chinese universities with comprehensive support and guidance.",
      buttonText: "Get Started Today"
    },
    russian: {
      title: "Ваш путь к мировому образованию в Китае",
      subtitle: "Мы помогаем студентам из Узбекистана и Центральной Азии достичь своей мечты об учебе в ведущих китайских университетах с комплексной поддержкой и руководством.",
      buttonText: "Начать сегодня"
    },
    uzbek: {
      title: "Xitoyda jahon darajasidagi ta'limga kirish eshigi",
      subtitle: "Biz O'zbekiston va Markaziy Osiyo talabalariga yuqori darajadagi Xitoy universitetlarida o'qish orzularini amalga oshirishda kompleks yordam va ko'rsatma beramiz.",
      buttonText: "Bugun Boshlang"
    }
  };

  const t = translations[language] || translations.english;

  return (
    <section id="home" className="hero">
      <div className="scrolling-background">
        <div className="image-scroll">
          {universityImages.map((image, index) => (
            <div
              key={index}
              className="bg-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="image-scroll">
          {universityImages.map((image, index) => (
            <div
              key={`duplicate-${index}`}
              className="bg-image"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </div>

      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
          <button className="btn" onClick={handleTelegramClick}>
            <i className="fab fa-telegram"></i>
            {t.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;