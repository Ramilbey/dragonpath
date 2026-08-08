// src/components/About/About.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { language } = useLanguage();

  const translations = {
    english: {
      label: "ABOUT DRAGONPATH",
      titleLine1: "WE DON'T JUST SEND STUDENTS.",
      titleLine2: "WE HELP THEM ",
      highlight: "FIND THEIR PATH.",
      paragraph1: "DragonPath Agency was founded with a singular mission: to open direct, reliable, and transparent gateways for students from Uzbekistan and Central Asia into leading Chinese universities.",
      paragraph2: "We manage every single milestone — from academic career orientation and scholarship application to visa issuance, campus dorm allocation, and ongoing local guidance in China.",
      stats: [
        { number: "100+", label: "STUDENTS PLACED IN CHINA" },
        { number: "25+", label: "DIRECT PARTNER UNIVERSITIES" },
        { number: "98%", label: "ADMISSION SUCCESS RATE" },
        { number: "7+", label: "YEARS FIELD EXPERIENCE" }
      ]
    },
    russian: {
      label: "О DRAGONPATH",
      titleLine1: "МЫ НЕ ПРОСТО ОТПРАВЛЯЕМ СТУДЕНТОВ.",
      titleLine2: "МЫ ПОМОГАЕМ ИМ ",
      highlight: "НАЙТИ СВОЙ ПУТЬ.",
      paragraph1: "Агентство DragonPath было основано с единой целью: открыть надежные, прозрачные и прямые пути для студентов из Узбекистана и СНГ в ведущие университеты Китая.",
      paragraph2: "Мы сопровождаем каждый этап — от профориентации и подачи документов на грант до получения визы, заселения в общежитие и непрерывной поддержки в Китае.",
      stats: [
        { number: "100+", label: "СТУДЕНТОВ ПОСТУПИЛО" },
        { number: "25+", label: "ПРЯМЫХ ПАРТНЕРСКИХ ВУЗОВ" },
        { number: "98%", label: "УСПЕШНЫХ ЗАЧИСЛЕНИЙ" },
        { number: "7+", label: "ЛЕТ ОПЫТА В СФЕРЕ" }
      ]
    },
    uzbek: {
      label: "DRAGONPATH HAQIDA",
      titleLine1: "BIZ SHUNCHAKI TALABALARNI YUBORMAYMIZ.",
      titleLine2: "BIZ ULARGA ",
      highlight: "O'Z YO'LINI TOPISHGA YORDAM BERAMIZ.",
      paragraph1: "DragonPath agentligi yagona maqsad bilan tashkil etilgan: O'zbekiston va MDH talabalari uchun Xitoyning etakchi universitetlariga to'g'ridan-to'g'ri va shaffof yo'llarni ochish.",
      paragraph2: "Biz har bir bosqichni boshqaramiz — kasbga yo'naltirish va grantga ariza topshirishdan tortib, viza olish, yotoqxonaga joylashish va Xitoyda doimiy qo'llab-quvvatlashgacha.",
      stats: [
        { number: "100+", label: "TALABA XITOYGA YUBORILGAN" },
        { number: "25+", label: "TO'G'RIDAN-TO'G'RI HAMKOR OTM" },
        { number: "98%", label: "QABUL MUVAFFAQIYATI" },
        { number: "7+", label: "YILLIK TAJRIBA" }
      ]
    }
  };

  const t = translations[language] || translations.english;

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        {/* Editorial Top Headline */}
        <div className="about-header">
          <span className="label-uppercase text-crimson">{t.label}</span>
          <h2 className="about-title">
            {t.titleLine1}
            <br />
            {t.titleLine2}
            <span className="text-crimson">{t.highlight}</span>
          </h2>
        </div>

        {/* 2-Part Composition */}
        <div className="about-grid">
          {/* Left Column: Text Story & Image Composition */}
          <div className="about-story-col">
            <p className="about-paragraph">{t.paragraph1}</p>
            <p className="about-paragraph">{t.paragraph2}</p>

            <div className="about-image-wrapper">
              <div
                className="about-image"
                style={{ backgroundImage: `url(/images/univerpics/uni8.jpg)` }}
              />
              <div className="about-image-badge">
                <span className="label-uppercase text-gold">CHINA ADMISSIONS DIRECT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Integrated Enormous Typography Stats */}
          <div className="about-stats-col">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="about-stat-row">
                <span className="stat-big-num">{stat.number}</span>
                <span className="label-uppercase stat-big-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hairline-divider" />
    </section>
  );
};

export default About;