// src/components/About/About.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    english: {
      title: "About Us",
      subtitle: "Your trusted partner in educational journey to China",
      sectionTitle: "Bridging Cultures Through Education",
      paragraph1: "DragonPath was founded with a mission to strengthen educational ties between China and Uzbekistan. Our team consists of education experts who have studied in China themselves and understand the challenges international students face.",
      paragraph2: "With offices in Tashkent and Beijing, we provide localized support throughout your educational journey. We maintain strong relationships with top Chinese universities to ensure our students receive the best opportunities.",
      paragraph3: "Our services don't stop at admission - we offer pre-departure orientation, accommodation assistance, and ongoing support throughout your studies in China.",
      stats: {
        students: "Students Helped",
        universities: "Partner Universities",
        successRate: "Success Rate",
        experience: "Years Experience"
      },
      teamLabel: "DragonPath Team"
    },
    russian: {
      title: "О нас",
      subtitle: "Ваш надежный партнер в образовательном путешествии в Китай",
      sectionTitle: "Объединяем культуры через образование",
      paragraph1: "DragonPath была основана с миссией укрепления образовательных связей между Китаем и Узбекистаном. Наша команда состоит из экспертов в области образования, которые сами учились в Китае и понимают проблемы, с которыми сталкиваются иностранные студенты.",
      paragraph2: "С офисами в Ташкенте и Пекине мы обеспечиваем локальную поддержку на протяжении всего вашего образовательного пути. Мы поддерживаем прочные отношения с ведущими китайскими университетами, чтобы наши студенты получали лучшие возможности.",
      paragraph3: "Наши услуги не заканчиваются поступлением - мы предлагаем ориентацию перед отъездом, помощь с проживанием и постоянную поддержку на протяжении вашего обучения в Китае.",
      stats: {
        students: "Студентов",
        universities: "Партнерских университетов",
        successRate: "Успешность",
        experience: "Лет опыта"
      },
      teamLabel: "Команда DragonPath"
    },
    uzbek: {
      title: "Biz haqimizda",
      subtitle: "Xitoyga ta'lim safari uchun ishonchli hamkoringiz",
      sectionTitle: "Ta'lim orqali madaniyatlarni birlashtirish",
      paragraph1: "DragonPath Xitoy va O'zbekiston o'rtasidagi ta'lim aloqalarini mustahkamlash missiyasi bilan tashkil etilgan. Bizning jamoamiz Xitoyda o'qigan va xalqaro talabalar duch keladigan qiyinchiliklarni tushunadigan ta'lim mutaxassislaridan iborat.",
      paragraph2: "Toshkent va Pekindagi ofislarimiz bilan biz sizning ta'lim safaringiz davomida mahalliy yordam ko'rsatamiz. Talabalarimiz eng yaxshi imkoniyatlarni olishini ta'minlash uchun biz yetakchi Xitoy universitetlari bilan mustahkam aloqalar o'rnatamiz.",
      paragraph3: "Bizning xizmatlarimiz qabul bilan tugamaydi - biz jo'nashdan oldingi orientatsiya, turar joy yordami va Xitoydagi o'qishingiz davomida doimiy yordam taklif qilamiz.",
      stats: {
        students: "Talabalarga yordam",
        universities: "Hamkor universitetlar",
        successRate: "Muvaffaqiyat darajasi",
        experience: "Yillik tajriba"
      },
      teamLabel: "DragonPath jamoasi"
    }
  };

  const t = translations[language] || translations.english;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>{t.sectionTitle}</h3>
            <p>{t.paragraph1}</p>
            <p>{t.paragraph2}</p>
            <p>{t.paragraph3}</p>

            <div className="stats-grid">
              <div className="stat">
                <h4>500+</h4>
                <p>{t.stats.students}</p>
              </div>
              <div className="stat">
                <h4>10+</h4>
                <p>{t.stats.universities}</p>
              </div>
              <div className="stat">
                <h4>98%</h4>
                <p>{t.stats.successRate}</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>{t.stats.experience}</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-users"></i>
              <p>{t.teamLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;