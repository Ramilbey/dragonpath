// src/components/Testimonials/Testimonials.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
  const { language } = useLanguage();

  // Translations
  const translations = {
    english: {
      title: "Success Stories",
      subtitle: "Hear from our students who achieved their dreams",
      testimonials: [
        {
          initials: 'AZ',
          name: 'Azizbek Nurmatov',
          program: 'Computer Science, Tsinghua University',
          text: '"DragonPath helped me get into Tsinghua University for my master\'s degree. Their guidance through the application process was invaluable. I couldn\'t have done it without them!"',
          rating: 5
        },
        {
          initials: 'ND',
          name: 'Nigora Davletova',
          program: 'Medicine, Peking University',
          text: '"The visa process was complicated, but the team walked me through every step. Now I\'m studying medicine at Peking University and loving the experience!"',
          rating: 5
        },
        {
          initials: 'SJ',
          name: 'Sanjar Jumanov',
          program: 'Business Administration, Fudan University',
          text: '"I received acceptance letters from three top universities with DragonPath\'s help. Their knowledge of the Chinese education system made all the difference in my applications."',
          rating: 5
        },
        {
          initials: 'FK',
          name: 'Farida Karimova',
          program: 'Engineering, Zhejiang University',
          text: '"The scholarship guidance I received was exceptional. DragonPath helped me secure a full scholarship that made studying in China possible for me."',
          rating: 5
        }
      ]
    },
    russian: {
      title: "Истории успеха",
      subtitle: "Узнайте от наших студентов, которые осуществили свои мечты",
      testimonials: [
        {
          initials: 'AZ',
          name: 'Азизбек Нурматов',
          program: 'Компьютерные науки, Университет Цинхуа',
          text: '"DragonPath помог мне поступить в Университет Цинхуа на магистратуру. Их руководство в процессе подачи заявления было бесценным. Я бы не справился без них!"',
          rating: 5
        },
        {
          initials: 'ND',
          name: 'Нигора Давлетова',
          program: 'Медицина, Пекинский университет',
          text: '"Процесс получения визы был сложным, но команда провела меня через каждый шаг. Теперь я учусь медицине в Пекинском университете и наслаждаюсь опытом!"',
          rating: 5
        },
        {
          initials: 'SJ',
          name: 'Санжар Жуманов',
          program: 'Бизнес-администрирование, Университет Фудань',
          text: '"Я получил письма о зачислении из трех ведущих университетов с помощью DragonPath. Их знание китайской системы образования сыграло решающую роль в моих заявлениях."',
          rating: 5
        },
        {
          initials: 'FK',
          name: 'Фарида Каримова',
          program: 'Инженерия, Чжэцзянский университет',
          text: '"Консультации по стипендиям, которые я получила, были исключительными. DragonPath помог мне получить полную стипендию, которая сделала обучение в Китае возможным для меня."',
          rating: 5
        }
      ]
    },
    uzbek: {
      title: "Muvaffaqiyat hikoyalari",
      subtitle: "Orzularini amalga oshirgan talabalarimizdan eshiting",
      testimonials: [
        {
          initials: 'AZ',
          name: 'Azizbek Nurmatov',
          program: 'Kompyuter fanlari, Tsingxua universiteti',
          text: '"DragonPath menga magistratura uchun Tsingxua universitetiga kirishda yordam berdi. Ularning ariza topshirish jarayonidagi ko\'rsatmalari bebaho edi. Ularsiz bunga erisholmasdim!"',
          rating: 5
        },
        {
          initials: 'ND',
          name: 'Nigora Davletova',
          program: 'Tibbiyot, Pekin universiteti',
          text: '"Viza olish jarayoni murakkab edi, lekin jamoa meni har bir qadamda yo\'l-yo\'riq ko\'rsatdi. Endi Pekin universitetida tibbiyot o\'qiyapman va tajribadan zavqlanayapman!"',
          rating: 5
        },
        {
          initials: 'SJ',
          name: 'Sanjar Jumanov',
          program: 'Biznes boshqaruvi, Fudan universiteti',
          text: '"DragonPath yordamida uchta yetakchi universitetdan qabul xatlarini oldim. Ularning Xitoy ta\'lim tizimi haqidagi bilimlari mening arizalarimda hal qiluvchi farq yaratdi."',
          rating: 5
        },
        {
          initials: 'FK',
          name: 'Farida Karimova',
          program: 'Muhandislik, Chjetszyan universiteti',
          text: '"Men olgan stipendiya bo\'yicha maslahatlar ajoyib edi. DragonPath menga Xitoyda o\'qishni imkon bergan to\'liq stipendiyani olishda yordam berdi."',
          rating: 5
        }
      ]
    }
  };

  const t = translations[language] || translations.english;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="testimonial-grid">
          {t.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.initials}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;