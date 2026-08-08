// src/components/Hero/Hero.js
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useAnalytics } from '../../hooks/useAnalytics';
import { getGSAP, lerp } from '../../animations/scrollEngine';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const { language } = useLanguage();
  const { trackButtonClick } = useAnalytics();
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);
  const wordmarkLeftRef = useRef(null);
  const wordmarkRightRef = useRef(null);
  const bgImageRef = useRef(null);
  const dotCrimsonRef = useRef(null);
  const dotGoldRef = useRef(null);
  const metaRef = useRef(null);
  const ctaRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleTelegramClick = () => {
    trackButtonClick('Hero CTA to Telegram Bot');
    window.open('https://t.me/china_connect_bot', '_blank');
  };

  const translations = {
    english: {
      meta: "EST. 2025 · CHINA · MALAYSIA · CIS",
      heading: "YOUR PATH\nSTARTS HERE.",
      subtitle: "Universities. Opportunities. A future beyond borders.",
      cta: "START WITH TELEGRAM BOT",
      ctaSecondary: "EXPLORE UNIVERSITIES"
    },
    russian: {
      meta: "ОСН. 2025 · КИТАЙ · МАЛАЙЗИЯ · СНГ",
      heading: "ТВОЙ ПУТЬ\nНАЧИНАЕТСЯ ЗДЕСЬ.",
      subtitle: "Университеты. Возможности. Будущее без границ.",
      cta: "НАЧАТЬ В TELEGRAM",
      ctaSecondary: "УНИВЕРСИТЕТЫ"
    },
    uzbek: {
      meta: "TASHKIL 2025 · XITOY · MALAYZIYA · MDH",
      heading: "SIZNING YO'LINGIZ\nSHU YERDAN BOSHLANADI.",
      subtitle: "Universitetlar. Imkoniyatlar. Chegaralarsiz kelajak.",
      cta: "TELEGRAM BOTDA BOSHLASH",
      ctaSecondary: "UNIVERSITETLAR"
    }
  };

  const t = translations[language] || translations.english;

  // GSAP ScrollTrigger setup with RAF calculation fallback
  useEffect(() => {
    const gsap = getGSAP();
    const heroEl = heroRef.current;
    const stageEl = stageRef.current;

    if (!heroEl || !stageEl) return;

    let triggerInstance = null;

    if (gsap && gsap.timeline && window.ScrollTrigger) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
          }
        }
      });

      // Panels move outward
      tl.to(leftPanelRef.current, { xPercent: -102, ease: "none" }, 0)
        .to(rightPanelRef.current, { xPercent: 102, ease: "none" }, 0)
        // Background scale down from 1.12 to 1.0
        .to(bgImageRef.current, { scale: 1.0, opacity: 0.9, ease: "none" }, 0)
        // Wordmark left span moves left and scales up
        .to(wordmarkLeftRef.current, { x: "-26vw", scale: 1.4, ease: "none" }, 0)
        // Wordmark right span moves right and scales up
        .to(wordmarkRightRef.current, { x: "26vw", scale: 1.4, ease: "none" }, 0)
        // Accent dots travel outward
        .to(dotCrimsonRef.current, { x: "-38vw", ease: "none" }, 0)
        .to(dotGoldRef.current, { x: "38vw", ease: "none" }, 0)
        // Metadata & Headline reveal
        .to(metaRef.current, { opacity: 1, y: 0, ease: "none" }, 0.3)
        .to(ctaRef.current, { opacity: 1, y: 0, ease: "none" }, 0.5);

      triggerInstance = tl.scrollTrigger;
    }

    // Scroll listener fallback for smooth calculation if GSAP CDN is loading/unavailable
    const handleScroll = () => {
      if (triggerInstance) return; // GSAP handled it
      const rect = heroEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = heroEl.offsetHeight - windowHeight;
      if (totalScroll <= 0) return;
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (triggerInstance) triggerInstance.kill();
    };
  }, []);

  // Compute inline styles for fallbacks or direct CSS transforms
  const p = scrollProgress;
  const leftPanelX = -p * 102;
  const rightPanelX = p * 102;
  const bgScale = lerp(1.12, 1.0, p);
  const wordmarkLeftX = -p * 26;
  const wordmarkRightX = p * 26;
  const wordmarkScale = lerp(1.0, 1.4, p);
  const dotLeftX = -p * 38;
  const dotRightX = p * 38;

  return (
    <section id="home" ref={heroRef} className="portal-hero">
      <div ref={stageRef} className="portal-stage">
        {/* Layer 1: Background Full-Bleed Campus Photography */}
        <div
          ref={bgImageRef}
          className="portal-bg-image"
          style={{
            backgroundImage: `url(/images/univerpics/uni5.jpg)`,
            transform: `scale(${bgScale})`
          }}
        />

        {/* Layer 2: Visual Veil */}
        <div className="portal-veil" />

        {/* Layer 3: Opaque Portal Panels (Closed at 0% scroll) */}
        <div
          ref={leftPanelRef}
          className="portal-panel panel-left"
          style={{ transform: `translate3d(${leftPanelX}%, 0, 0)` }}
        />
        <div
          ref={rightPanelRef}
          className="portal-panel panel-right"
          style={{ transform: `translate3d(${rightPanelX}%, 0, 0)` }}
        />

        {/* Layer 4: Accent Dots Travelling Outward */}
        <div
          ref={dotCrimsonRef}
          className="accent-dot dot-crimson"
          style={{ transform: `translate3d(${dotLeftX}vw, -50%, 0)` }}
        />
        <div
          ref={dotGoldRef}
          className="accent-dot dot-gold"
          style={{ transform: `translate3d(${dotRightX}vw, -50%, 0)` }}
        />

        {/* Layer 5: Signature Wordmark Split (DRAGON | PATH) */}
        <div className="portal-wordmark-wrapper">
          <span
            ref={wordmarkLeftRef}
            className="wordmark-span wordmark-left"
            style={{
              transform: `translate3d(${wordmarkLeftX}vw, 0, 0) scale(${wordmarkScale})`
            }}
          >
            DRAGON
          </span>
          <span
            ref={wordmarkRightRef}
            className="wordmark-span wordmark-right"
            style={{
              transform: `translate3d(${wordmarkRightX}vw, 0, 0) scale(${wordmarkScale})`
            }}
          >
            PATH
          </span>
        </div>

        {/* Layer 6: Editorial Metadata & Supporting Headline */}
        <div className="portal-content-layer">
          <div
            ref={metaRef}
            className="portal-metadata"
            style={{ opacity: Math.min(Math.max((p - 0.2) * 2, 0), 1) }}
          >
            <span className="label-uppercase">{t.meta}</span>
          </div>

          <div
            ref={ctaRef}
            className="portal-headline-box"
            style={{ opacity: Math.min(Math.max((p - 0.4) * 2, 0), 1) }}
          >
            <h1 className="portal-title">
              {t.heading.split('\n').map((line, i) => (
                <span key={i} className="portal-title-line">
                  {line}
                  {i < t.heading.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="portal-subtitle">{t.subtitle}</p>

            <div className="portal-cta-group">
              <button
                className="btn-editorial btn-editorial-accent"
                onClick={handleTelegramClick}
              >
                <i className="fab fa-telegram" />
                {t.cta}
              </button>
              <button
                className="btn-editorial"
                onClick={() => scrollToSection('universities')}
              >
                {t.ctaSecondary}
                <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="portal-scroll-hint"
          onClick={() => scrollToSection('statement')}
          style={{ opacity: 1 - p * 2 }}
        >
          <span className="label-uppercase">SCROLL TO OPEN PORTAL</span>
          <div className="scroll-indicator-line" />
        </div>
      </div>
    </section>
  );
};

export default Hero;