// src/components/Testimonials/Testimonials.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Testimonials.css';

const Testimonials = () => {
  const { language } = useLanguage();

  const translations = {
    english: {
      label: "STUDENT STORIES",
      title: "VOICES OF THE JOURNEY",
      subtitle: "Personal accounts of students who crossed borders and shaped their future.",
      testimonials: [
        {
          id: "story-1",
          num: "01",
          name: "Azizbek Nurmatov",
          program: "Computer Science, Tsinghua University",
          text: "DragonPath helped me navigate the entire application and scholarship process for Tsinghua University. Their direct contact with admissions officers made my master's journey smooth and stress-free.",
          image: "/images/univerpics/uni2.jpg"
        },
        {
          id: "story-2",
          num: "02",
          name: "Nigora Davletova",
          program: "Clinical Medicine, Peking University",
          text: "The student visa and medical documentation was daunting, but the DragonPath team walked me through every single form. Now I am fulfilling my dream studying medicine in Beijing.",
          image: "/images/univerpics/uni4.jpg"
        },
        {
          id: "story-3",
          num: "03",
          name: "Sanjar Jumanov",
          program: "Business Administration, Fudan University",
          text: "I received acceptance letters from three premier Chinese universities through DragonPath. Their expertise in scholarship requirements gave me a decisive advantage.",
          image: "/images/univerpics/uni7.jpg"
        },
        {
          id: "story-4",
          num: "04",
          name: "Farida Karimova",
          program: "Software Engineering, Zhejiang University",
          text: "The scholarship guidance was exceptional. DragonPath secured a full provincial scholarship for me, covering 100% of my tuition and accommodation costs.",
          image: "/images/univerpics/uni9.jpg"
        }
      ]
    },
    russian: {
      label: "ИСТОРИИ СТУДЕНТОВ",
      title: "ГОЛОСА ПУТЕШЕСТВЕННИКОВ",
      subtitle: "Личные истории студентов, изменивших свое будущее с DragonPath.",
      testimonials: [
        {
          id: "story-1",
          num: "01",
          name: "Азизбек Нурматов",
          program: "Компьютерные науки, Университет Цинхуа",
          text: "DragonPath помог мне пройти весь процесс подачи заявления и получения гранта в Университет Цинхуа. Их прямые связи с приемной комиссией сделали поступительный путь легким.",
          image: "/images/univerpics/uni2.jpg"
        },
        {
          id: "story-2",
          num: "02",
          name: "Нигора Давлетова",
          program: "Медицина, Пекинский университет",
          text: "Оформление студенческой визы казалось сложным, но команда DragonPath провела меня через каждый документ. Теперь я изучаю медицину в Пекине!",
          image: "/images/univerpics/uni4.jpg"
        },
        {
          id: "story-3",
          num: "03",
          name: "Санжар Жуманов",
          program: "Бизнес-администрирование, Университет Фудань",
          text: "Я получил приглашения из трех лучших университетов Китая через DragonPath. Их знание нюансов грантов стало ключевым фактором.",
          image: "/images/univerpics/uni7.jpg"
        },
        {
          id: "story-4",
          num: "04",
          name: "Фарида Каримова",
          program: "Инженерия, Чжэцзянский университет",
          text: "Консультация по стипендиям была безупречной. DragonPath помог мне получить полный правительственный грант, покрывающий 100% обучения и жилья.",
          image: "/images/univerpics/uni9.jpg"
        }
      ]
    },
    uzbek: {
      label: "TALABALAR HIKOYALARI",
      title: "SAFARDAGI OVOZLAR",
      subtitle: "Chegaralarni oshib, o'z kelajagini yaratgan talabalarimiz tajribalari.",
      testimonials: [
        {
          id: "story-1",
          num: "01",
          name: "Azizbek Nurmatov",
          program: "Kompyuter fanlari, Tsingxua universiteti",
          text: "DragonPath menga Tsingxua universitetiga ariza topshirish va grant olish jarayonini osonlashtirishda yordam berdi. Ularning yordami bilan magistraturaga qabul qilindim.",
          image: "/images/univerpics/uni2.jpg"
        },
        {
          id: "story-2",
          num: "02",
          name: "Nigora Davletova",
          program: "Tibbiyot, Pekin universiteti",
          text: "Viza va tibbiy hujjatlar jarayoni murakkab edi, lekin DragonPath jamoasi har bir qadamda yordam berdi. Hozir Pekinda tibbiyot bo'yicha ta'lim olmoqdaman.",
          image: "/images/univerpics/uni4.jpg"
        },
        {
          id: "story-3",
          num: "03",
          name: "Sanjar Jumanov",
          program: "Biznes boshqaruvi, Fudan universiteti",
          text: "DragonPath yordamida Xitoyning uchta yetakchi universitetidan taklifnomalarga ega bo'ldim. Ularning bilim va tajribasi hal qiluvchi bo'ldi.",
          image: "/images/univerpics/uni7.jpg"
        },
        {
          id: "story-4",
          num: "04",
          name: "Farida Karimova",
          program: "Muhandislik, Chjetszyan universiteti",
          text: "Men olgan stipendiya ko'magi ajoyib edi. DragonPath menga 100% o'qish va yashash xarajatlarini qoplaydigan to'liq davlat grantini taqdim etdi.",
          image: "/images/univerpics/uni9.jpg"
        }
      ]
    }
  };

  const t = translations[language] || translations.english;

  return (
    <section id="testimonials" className="stories-section">
      <div className="container stories-container">
        {/* Section Title */}
        <div className="stories-header">
          <span className="label-uppercase text-crimson">{t.label}</span>
          <h2 className="stories-title">{t.title}</h2>
          <p className="stories-subtitle">{t.subtitle}</p>
        </div>

        {/* Vertical Editorial Story Sequence */}
        <div className="stories-list">
          {t.testimonials.map((story) => (
            <div key={story.id} className="story-row">
              <div className="story-meta-col">
                <span className="outlined-num story-num">{story.num}</span>
              </div>

              {/* Story Quote & Info */}
              <div className="story-content-col">
                <blockquote className="story-quote">
                  "{story.text}"
                </blockquote>

                <div className="story-author">
                  <span className="story-author-name">{story.name}</span>
                  <span className="label-uppercase story-author-prog">{story.program}</span>
                </div>
              </div>

              {/* Story Photograph */}
              <div className="story-photo-col">
                <div
                  className="story-photo-frame"
                  style={{ backgroundImage: `url(${story.image})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hairline-divider" />
    </section>
  );
};

export default Testimonials;