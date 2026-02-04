// src/components/Footer/Footer.js
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useAnalytics } from "../../hooks/useAnalytics";
import "./Footer.css";

const Footer = ({ scrollToSection }) => {
  const { trackEvent } = useAnalytics();
  const { language } = useLanguage();

  // Translations
  const translations = {
    english: {
      description: "Your trusted partner for studying in China. We provide comprehensive support services to help students from Uzbekistan achieve their academic dreams.",
      quickLinks: "Quick Links",
      home: "Home",
      services: "Services",
      universities: "Universities",
      aboutUs: "About Us",
      servicesTitle: "Services",
      universitySelection: "University Selection",
      applicationAssistance: "Application Assistance",
      visaSupport: "Visa Support",
      scholarshipGuidance: "Scholarship Guidance",
      accommodationAssistance: "Accommodation Assistance",
      contactUs: "Contact Us",
      copyright: "© 2025 DragonPath Education. All rights reserved."
    },
    russian: {
      description: "Ваш надежный партнер для обучения в Китае. Мы предоставляем комплексные услуги поддержки, чтобы помочь студентам из Узбекистана осуществить свои академические мечты.",
      quickLinks: "Быстрые ссылки",
      home: "Главная",
      services: "Услуги",
      universities: "Университеты",
      aboutUs: "О нас",
      servicesTitle: "Услуги",
      universitySelection: "Выбор университета",
      applicationAssistance: "Помощь с заявлением",
      visaSupport: "Виза поддержка",
      scholarshipGuidance: "Консультации по стипендиям",
      accommodationAssistance: "Помощь с жильем",
      contactUs: "Контакты",
      copyright: "© 2025 DragonPath Education. Все права защищены."
    },
    uzbek: {
      description: "Xitoyda o'qish uchun ishonchli hamkoringiz. Biz O'zbekistonlik talabalarga akademik orzularini amalga oshirishda yordam berish uchun keng qamrovli qo'llab-quvvatlash xizmatlarini taqdim etamiz.",
      quickLinks: "Tezkor havolalar",
      home: "Bosh sahifa",
      services: "Xizmatlar",
      universities: "Universitetlar",
      aboutUs: "Biz haqimizda",
      servicesTitle: "Xizmatlar",
      universitySelection: "Universitet tanlash",
      applicationAssistance: "Ariza yordami",
      visaSupport: "Viza yordami",
      scholarshipGuidance: "Stipendiya maslahat",
      accommodationAssistance: "Turar joy yordami",
      contactUs: "Bog'lanish",
      copyright: "© 2025 DragonPath Education. Barcha huquqlar himoyalangan."
    }
  };

  const t = translations[language] || translations.english;

  const handleSocialLinkClick = (platform) => {
    trackEvent("social_media_click", "Engagement", `Clicked ${platform} link`);
  };

  const handleFooterLinkClick = (linkName) => {
    trackEvent(
      "footer_link_click",
      "Navigation",
      `Clicked footer link: ${linkName}`
    );
  };

  const handleScrollToSection = (sectionId, sectionName) => {
    trackEvent(
      "footer_navigation",
      "Navigation",
      `Navigated to: ${sectionName}`
    );
    scrollToSection(sectionId);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo and Social Links */}
          <div className="footer-column footer-brand">
            <div className="logo">
              <img src="/images/logo/dragon.jpg" alt="DragonPath logo" className="footer-logo-img" />
              <h3>DragonPath</h3>
            </div>
            <p>{t.description}</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/ramil.qutlimuratov"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Facebook")}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/dragon.path/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Instagram")}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://t.me/dragon_path_uz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Telegram")}
                aria-label="Telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="https://wa.me/60105071503"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("WhatsApp")}
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("qutlimuratov5119");
                  alert("WeChat ID copied: qutlimuratov5119");
                  handleSocialLinkClick("WeChat");
                }}
                role="button"
                aria-label="WeChat"
              >
                <i className="fab fa-weixin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>{t.quickLinks}</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="#home"
                  onClick={() => handleScrollToSection("home", "Home")}
                >
                  {t.home}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => handleScrollToSection("services", "Services")}
                >
                  {t.services}
                </a>
              </li>
              <li>
                <a
                  href="#universities"
                  onClick={() =>
                    handleScrollToSection("universities", "Universities")
                  }
                >
                  {t.universities}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handleScrollToSection("about", "About Us")}
                >
                  {t.aboutUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-column">
            <h3>{t.servicesTitle}</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="#services"
                  onClick={() => handleFooterLinkClick("University Selection")}
                >
                  {t.universitySelection}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() =>
                    handleFooterLinkClick("Application Assistance")
                  }
                >
                  {t.applicationAssistance}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => handleFooterLinkClick("Visa Support")}
                >
                  {t.visaSupport}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => handleFooterLinkClick("Scholarship Guidance")}
                >
                  {t.scholarshipGuidance}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() =>
                    handleFooterLinkClick("Accommodation Assistance")
                  }
                >
                  {t.accommodationAssistance}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column">
            <h3>{t.contactUs}</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <a
                  href="mailto:info@dragonpath.com"
                  onClick={() => handleFooterLinkClick("Email Contact")}
                >
                  info@dragonpath.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a
                  href="tel:+89130225955119"
                  onClick={() => handleFooterLinkClick("Phone Contact")}
                >
                  +89130225955119
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Beijing, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
