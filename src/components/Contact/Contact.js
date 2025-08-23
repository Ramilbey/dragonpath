// src/components/Contact/Contact.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();

  const translations = {
    english: {
      title: "Contact Us",
      subtitle: "Start your educational journey with us",
      chinaNotice: "Important Notice for China-Based Students",
      chinaNoticeText: "Since we are based in China where some international platforms are restricted, we recommend using WhatsApp or Telegram for the fastest response.",
      responseTime: "Response Time: 24-48 hours",
      socialMedia: "Get in Touch",
      followUs: "We're most active on:",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
      emailUs: "Email Us",
    },
    russian: {
      title: "Свяжитесь с нами",
      subtitle: "Начните свой образовательный путь с нами",
      chinaNotice: "Важное уведомление для студентов в Китае",
      chinaNoticeText: "Так как мы находимся в Китае, где некоторые платформы ограничены, рекомендуем использовать WhatsApp или Telegram для быстрого ответа.",
      responseTime: "Время ответа: 24-48 часов",
      socialMedia: "Связаться с нами",
      followUs: "Мы наиболее активны в:",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
      emailUs: "Эл. почта",
    },
    uzbek: {
      title: "Bog'laning",
      subtitle: "O'quv safariingizni biz bilan boshlang",
      chinaNotice: "Xitoydagi talabalar uchun muhim eslatma",
      chinaNoticeText: "Biz Xitoyda joylashganmiz, ba'zi platformalar cheklangan, shuning uchun WhatsApp yoki Telegramdan foydalanishni tavsiya qilamiz.",
      responseTime: "Javob vaqti: 24-48 soat",
      socialMedia: "Biz bilan bog'laning",
      followUs: "Eng faolimiz shu yerda:",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
      emailUs: "Email",
    }
  };

  const t = translations[language] || translations.english;

  const openWhatsApp = () => {
    window.open('https://wa.me/998901234567', '_blank');
  };
  const openTelegram = () => {
    window.open('https://t.me/dragonpath', '_blank');
  };
  const openInstagram = () => {
    window.open('https://instagram.com/dragonpath', '_blank');
  };
  const sendEmail = () => {
    window.location.href = 'mailto:info@dragonpath.com';
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="contact-notice">
          <div className="notice-content">
            <h3>📢 {t.chinaNotice}</h3>
            <p>{t.chinaNoticeText}</p>
            <p className="response-time"><strong>⏰ {t.responseTime}</strong></p>
          </div>
        </div>

        <div className="social-connect">
          <h3>{t.socialMedia}</h3>
          <p className="follow-text">{t.followUs}</p>

          <div className="social-buttons">
            <button className="social-btn whatsapp" onClick={openWhatsApp}>
              <i className="fab fa-whatsapp"></i> {t.whatsapp}
            </button>
            <button className="social-btn telegram" onClick={openTelegram}>
              <i className="fab fa-telegram"></i> {t.telegram}
            </button>
            <button className="social-btn instagram" onClick={openInstagram}>
              <i className="fab fa-instagram"></i> {t.instagram}
            </button>
            <button className="social-btn email" onClick={sendEmail}>
              <i className="fas fa-envelope"></i> {t.emailUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
