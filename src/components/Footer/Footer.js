// src/components/Footer/Footer.js
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAnalytics } from "../../hooks/useAnalytics";
import "./Footer.css";

const Footer = ({ scrollToSection }) => {
  const { trackEvent } = useAnalytics();
  const { language } = useLanguage();

  const translations = {
    english: {
      closeHeading: "YOUR PATH\nSTARTS HERE.",
      closeSubtitle: "Universities. Opportunities. A future beyond borders.",
      ctaPrimary: "START YOUR JOURNEY",
      ctaSecondary: "CONTACT DRAGONPATH",
      description: "Your trusted partner for studying in China. Complete guidance from application to arrival.",
      address: "Tashkent, Mirobod District Business Center",
      copyright: "© 2025 DRAGONPATH EDUCATION AGENCY. ALL RIGHTS RESERVED."
    },
    russian: {
      closeHeading: "ТВОЙ ПУТЬ\nНАЧИНАЕТСЯ ЗДЕСЬ.",
      closeSubtitle: "Университеты. Возможности. Будущее без границ.",
      ctaPrimary: "НАЧАТЬ ПУТЬ В TELEGRAM",
      ctaSecondary: "СВЯЗАТЬСЯ С DRAGONPATH",
      description: "Ваш надежный партнер для обучения в Китае. Сопровождение от заявки до приезда.",
      address: "г. Ташкент, Мирабадский район, Бизнес-центр",
      copyright: "© 2025 DRAGONPATH EDUCATION AGENCY. ВСЕ ПРАВА ЗАЩИЩЕНЫ."
    },
    uzbek: {
      closeHeading: "SIZNING YO'LINGIZ\nSHU YERDAN BOSHLANADI.",
      closeSubtitle: "Universitetlar. Imkoniyatlar. Chegaralarsiz kelajak.",
      ctaPrimary: "TELEGRAM BOTDA BOSHLASH",
      ctaSecondary: "DRAGONPATH BILAN BOG'LANISH",
      description: "Xitoyda ta'lim olish uchun ishonchli hamkoringiz. Arizadan tortib yetib borishgacha to'liq yordam.",
      address: "Toshkent shahri, Mirobod tumani, Biznes markazi",
      copyright: "© 2025 DRAGONPATH EDUCATION AGENCY. BARCHA HUQUQLAR HIMOYALANGAN."
    }
  };

  const t = translations[language] || translations.english;

  const handleSocialLinkClick = (platform) => {
    trackEvent("social_media_click", "Engagement", `Clicked ${platform} link`);
  };

  return (
    <footer className="footer-editorial">
      {/* Final Close Section */}
      <div className="final-close-section">
        <div className="container final-close-container">
          <span className="label-uppercase text-crimson">THE GATEWAY</span>
          <h2 className="final-close-title">
            {t.closeHeading.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < t.closeHeading.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="final-close-subtitle">{t.closeSubtitle}</p>

          <div className="final-close-actions">
            <a
              href="https://t.me/china_connect_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial btn-editorial-accent"
              onClick={() => handleSocialLinkClick("Telegram CTA")}
            >
              <i className="fab fa-telegram" /> {t.ctaPrimary}
            </a>
            <a
              href="tel:+8613025955119"
              className="btn-editorial"
            >
              <i className="fas fa-phone-alt" /> {t.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Giant Cropped Wordmark Running Across Bottom Edge */}
        <div className="bottom-wordmark-wrapper">
          <span className="bottom-giant-wordmark">DRAGONPATH</span>
        </div>
      </div>

      <div className="hairline-divider" />

      {/* Editorial Minimal Footer */}
      <div className="minimal-footer">
        <div className="container footer-bottom-container">
          {/* Brand Info & Address */}
          <div className="footer-col brand-col">
            <span className="brand-wordmark">DRAGONPATH<span className="brand-dot">.</span></span>
            <p className="footer-desc-text">{t.description}</p>
            <p className="footer-addr-text"><i className="fas fa-map-marker-alt" /> {t.address}</p>
          </div>

          {/* Contact Details */}
          <div className="footer-col contact-col">
            <span className="label-uppercase text-muted">CONTACT</span>
            <a href="mailto:info@dragonpath.uz" className="footer-contact-link">info@dragonpath.uz</a>
            <a href="tel:+8613025955119" className="footer-contact-link">+86 130 2595 5119</a>
            <a href="tel:+998871905119" className="footer-contact-link">+998 87 190 5119</a>
          </div>

          {/* Social Links */}
          <div className="footer-col social-col">
            <span className="label-uppercase text-muted">CONNECT</span>
            <div className="footer-social-icons">
              <a
                href="https://t.me/dragon_path_uz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Telegram Channel")}
                aria-label="Telegram"
              >
                <i className="fab fa-telegram" />
              </a>
              <a
                href="https://www.instagram.com/dragon.path/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Instagram")}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://wa.me/60105071503"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("WhatsApp")}
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="https://www.facebook.com/ramil.qutlimuratov"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Facebook")}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("qutlimuratov5119");
                  alert("WeChat ID copied: qutlimuratov5119");
                  handleSocialLinkClick("WeChat");
                }}
                aria-label="WeChat"
              >
                <i className="fab fa-weixin" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="copyright-bar">
          <div className="container copyright-container">
            <span className="label-uppercase copyright-text">{t.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
