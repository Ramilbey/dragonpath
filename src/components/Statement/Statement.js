// src/components/Statement/Statement.js
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Statement.css';

const Statement = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const floatImageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const translations = {
    english: {
      label: "THE JOURNEY",
      quoteLine1: "CHOOSING A UNIVERSITY IS NOT JUST ABOUT WHERE YOU STUDY.",
      quoteLine2: "IT'S ABOUT ",
      highlight: "WHERE YOU'RE GOING."
    },
    russian: {
      label: "ПУТЕШЕСТВИЕ",
      quoteLine1: "ВЫБОР УНИВЕРСИТЕТА — ЭТО НЕ ПРОСТО МЕСТО ОБУЧЕНИЯ.",
      quoteLine2: "ЭТО ТО, ",
      highlight: "КУДА ТЫ ИДЕШЬ."
    },
    uzbek: {
      label: "SAFAR",
      quoteLine1: "UNIVERSITET TANLASH QAYERDA O'QISH HAQIDA EMAS.",
      quoteLine2: "BU SIZNING ",
      highlight: "QAYERGA KETAYOTGANINGIZ HAQIDA."
    }
  };

  const t = translations[language] || translations.english;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatY = (scrollProgress - 0.5) * 120; // Scroll-linked vertical translation
  const floatRotate = (scrollProgress - 0.5) * 12; // Scroll-linked rotation

  return (
    <section id="statement" ref={sectionRef} className="statement-section">
      <div className="container statement-container">
        {/* Large Outlined Background Index Number */}
        <div className="outlined-num statement-index">01</div>

        <div className="statement-content">
          <span className="label-uppercase statement-label">{t.label}</span>
          <h2 className="statement-quote">
            {t.quoteLine1}
            <br />
            {t.quoteLine2}
            <span className="text-crimson">{t.highlight}</span>
          </h2>
        </div>

        {/* Scroll-Linked Floating Photograph */}
        <div
          ref={floatImageRef}
          className="statement-float-wrapper"
          style={{
            transform: `translate3d(0, ${floatY}px, 0) rotate(${floatRotate}deg)`,
            opacity: Math.sin(scrollProgress * Math.PI)
          }}
        >
          <div
            className="statement-float-img"
            style={{ backgroundImage: `url(/images/univerpics/uni3.jpg)` }}
          />
        </div>
      </div>
      <div className="hairline-divider" />
    </section>
  );
};

export default Statement;
