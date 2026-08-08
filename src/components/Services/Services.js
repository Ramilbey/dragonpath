// src/components/Services/Services.js
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getGSAP } from '../../animations/scrollEngine';
import './Services.css';

const Services = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const translations = {
    english: {
      label: "SERVICES",
      title: "THE JOURNEY",
      subtitle: "DragonPath guides the student through every phase of the international educational path.",
      steps: [
        {
          num: "01",
          name: "UNIVERSITY SELECTION",
          desc: "Tailored matching with top accredited Chinese universities based on academic goals, budget, and desired programs.",
          image: "/images/univerpics/uni1.jpg"
        },
        {
          num: "02",
          name: "APPLICATION ASSISTANCE",
          desc: "Complete document preparation, certified translation, and direct filing with partner admissions offices.",
          image: "/images/univerpics/uni2.jpg"
        },
        {
          num: "03",
          name: "SCHOLARSHIP GUIDANCE",
          desc: "Expert assistance securing CSC Government, Provincial, and University tuition & accommodation waivers.",
          image: "/images/univerpics/uni3.jpg"
        },
        {
          num: "04",
          name: "VISA & DOCUMENT SUPPORT",
          desc: "Official JW201/202 form processing, medical checkup validation, and X1 student visa embassy guidance.",
          image: "/images/univerpics/uni4.jpg"
        },
        {
          num: "05",
          name: "LANGUAGE PREPARATION",
          desc: "1-year Chinese language prep program placement, HSK study materials, and English-medium degree options.",
          image: "/images/univerpics/uni5.jpg"
        },
        {
          num: "06",
          name: "ARRIVAL & ACCOMMODATION",
          desc: "Pre-departure briefings, campus dorm reservation, airport reception in China, and local CIS student community support.",
          image: "/images/univerpics/uni6.jpg"
        }
      ]
    },
    russian: {
      label: "УСЛУГИ",
      title: "ЭТАПЫ ПУТИ",
      subtitle: "DragonPath сопровождает студента на каждом этапе международного образовательного пути.",
      steps: [
        {
          num: "01",
          name: "ВЫБОР УНИВЕРСИТЕТА",
          desc: "Индивидуальный подбор аккредитованных вузов Китая по специальности, бюджету и образовательным целям.",
          image: "/images/univerpics/uni1.jpg"
        },
        {
          num: "02",
          name: "ПОДАЧА ЗАЯВКИ",
          desc: "Полная подготовка документов, заверенный перевод и прямая подача в приемные комиссии партнерских вузов.",
          image: "/images/univerpics/uni2.jpg"
        },
        {
          num: "03",
          name: "СТИПЕНДИИ И ГРАНТЫ",
          desc: "Помощь в получении правительственных грантов CSC, провинциальных и университетских стипендий.",
          image: "/images/univerpics/uni3.jpg"
        },
        {
          num: "04",
          name: "ВИЗА И ДОКУМЕНТЫ",
          desc: "Оформление форм JW201/202, медицинских справок и поддержка при получении студенческой визы X1.",
          image: "/images/univerpics/uni4.jpg"
        },
        {
          num: "05",
          name: "ЯЗЫКОВАЯ ПОДГОТОВКА",
          desc: "Годичные языковые курсы в Китае, подготовка к HSK и программы обучения на английском языке.",
          image: "/images/univerpics/uni5.jpg"
        },
        {
          num: "06",
          name: "ПРИЕЛЕТ И ПРОЖИВАНИЕ",
          desc: "Инструктаж перед вылетом, бронирование общежития, встреча в аэропорту и поддержка в Китае.",
          image: "/images/univerpics/uni6.jpg"
        }
      ]
    },
    uzbek: {
      label: "XIZMATLAR",
      title: "SAFAR BOSQICHLARI",
      subtitle: "DragonPath talabani xalqaro ta'lim yo'lining har bir bosqichida boshqaradi.",
      steps: [
        {
          num: "01",
          name: "UNIVERSITET TANLASH",
          desc: "Talabaning maqsadlari, byudjeti va yo'nalishlariga mos keladigan etakchi Xitoy universitetlarini tanlash.",
          image: "/images/univerpics/uni1.jpg"
        },
        {
          num: "02",
          name: "ARIZA TOPSHIRISH",
          desc: "Hujjatlarni to'liq tayyorlash, tarjima qilish va universitet qabul komissiyalariga bevosita topshirish.",
          image: "/images/univerpics/uni2.jpg"
        },
        {
          num: "03",
          name: "GRANT VA STIPENDIYALAR",
          desc: "CSC davlat grantlari, viloyat va universitet stipendiyalarini olishda professional yordam.",
          image: "/images/univerpics/uni3.jpg"
        },
        {
          num: "04",
          name: "VIZA VA HUJJATLAR",
          desc: "JW201/202 shakllarini rasmiylashtirish, tibbiy ko'rik va X1 talaba vizasini olishda ko'maklashish.",
          image: "/images/univerpics/uni4.jpg"
        },
        {
          num: "05",
          name: "TIL DARS TAYYORLOVI",
          desc: "1 yillik xitoy tili tayyorlov kurslari, HSK sinovlari va ingliz tilidagi ta'lim dasturlari.",
          image: "/images/univerpics/uni5.jpg"
        },
        {
          num: "06",
          name: "KULUSH VA TURAR JOY",
          desc: "Jo'nashdan oldingi ko'rsatmalar, yotoqxona bron qilish, kutib olish va Xitoyda qo'llab-quvvatlash.",
          image: "/images/univerpics/uni6.jpg"
        }
      ]
    }
  };

  const t = translations[language] || translations.english;
  const currentStepData = t.steps[activeStep] || t.steps[0];

  useEffect(() => {
    const gsap = getGSAP();
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    let triggerInstance = null;

    if (gsap && window.ScrollTrigger) {
      triggerInstance = window.ScrollTrigger.create({
        trigger: sectionEl,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const stepIndex = Math.min(
            Math.floor(self.progress * t.steps.length),
            t.steps.length - 1
          );
          setActiveStep(stepIndex);
        }
      });
    }

    const handleScroll = () => {
      if (triggerInstance) return;
      const rect = sectionEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScroll = sectionEl.offsetHeight - windowHeight;
      if (totalScroll <= 0) return;
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      const stepIndex = Math.min(
        Math.floor(progress * t.steps.length),
        t.steps.length - 1
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (triggerInstance) triggerInstance.kill();
    };
  }, [t.steps.length]);

  return (
    <section id="services" ref={sectionRef} className="journey-section">
      <div ref={stageRef} className="journey-pinned-stage">
        <div className="container journey-container">
          {/* Left Column: Pinned Heading & Progress */}
          <div className="journey-left">
            <span className="label-uppercase text-crimson">{t.label}</span>
            <h2 className="journey-title">{t.title}</h2>
            <p className="journey-subtitle">{t.subtitle}</p>

            <div className="journey-step-counter">
              <span className="current-num">{currentStepData.num}</span>
              <span className="counter-slash">/</span>
              <span className="total-num">06</span>
            </div>

            <div className="journey-step-dots">
              {t.steps.map((step, idx) => (
                <button
                  key={idx}
                  className={`journey-dot ${idx === activeStep ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  aria-label={`Jump to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Active Step Photo & Details */}
          <div className="journey-right">
            <div className="journey-card-display">
              {/* Photo Area */}
              <div className="journey-image-frame">
                {t.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`journey-photo ${idx === activeStep ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                ))}
                <div className="journey-image-veil" />
                <div className="journey-badge-num">{currentStepData.num}</div>
              </div>

              {/* Step Info */}
              <div className="journey-info-box">
                <h3 className="journey-step-name">{currentStepData.name}</h3>
                <p className="journey-step-desc">{currentStepData.desc}</p>

                <div className="journey-step-actions">
                  <a
                    href="https://t.me/china_connect_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-editorial btn-editorial-accent"
                  >
                    INQUIRE ABOUT THIS STEP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hairline-divider" />
    </section>
  );
};

export default Services;