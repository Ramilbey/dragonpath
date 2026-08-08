// src/components/Universities/Universities.js
import React, { useState, useRef } from "react";
import { useLanguage } from '../../context/LanguageContext';
import "./Universities.css";

const Universities = () => {
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);
  const [selectedUni, setSelectedUni] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isThrowing, setIsThrowing] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const deckRef = useRef(null);

  const { language } = useLanguage();

  const translations = {
    english: {
      label: "UNIVERSITIES",
      title: "THE CATALOGUE",
      subtitle: "Explore premier partner institutions across China.",
      dragHint: "DRAG OR USE ARROW KEYS TO EXPLORE",
      detailsBtn: "VIEW UNIVERSITY DETAILS",
      modal: {
        location: "Location",
        ranking: "Category",
        programs: "Programs Offered",
        fees: "Tuition & Fees Breakdown",
        documents: "Required Documents",
        otherInfo: "Admissions Information",
        ageLimit: "Age Limit:",
        deadline: "Application Deadline:",
        intake: "Intake Period:",
        dormitory: "Dormitory:",
        tuition: "Tuition Fee:",
        accommodation: "Accommodation Fee:",
        insurance: "Insurance Fee:",
        visa: "Visa Extension Fee:",
        medicalCheckup: "Medical Checkup:",
        applicationFee: "Application Fee:",
        books: "Textbooks:",
        deposit: "Housing Deposit:",
        note: "Admissions Note:",
        scholarships: "Available Scholarships:",
        feesAfterScholarship: "Total Fee After Scholarship:",
        cta: "APPLY VIA TELEGRAM BOT"
      }
    },
    russian: {
      label: "УНИВЕРСИТЕТЫ",
      title: "КАТАЛОГ ВУЗОВ",
      subtitle: "Исследуйте ведущие партнерские университеты Китая.",
      dragHint: "ПЕРЕТАЩИТЕ ИЛИ ИСПОЛЬЗУЙТЕ СТРЕЛКИ",
      detailsBtn: "ПОДРОБНЕЕ ОБ УНИВЕРСИТЕТЕ",
      modal: {
        location: "Локация",
        ranking: "Категория",
        programs: "Доступные программы",
        fees: "Стоимость обучения и проживания",
        documents: "Необходимые документы",
        otherInfo: "Информация о поступлении",
        ageLimit: "Возраст:",
        deadline: "Крайний срок:",
        intake: "Период набора:",
        dormitory: "Общежитие:",
        tuition: "Обучение:",
        accommodation: "Проживание:",
        insurance: "Страховка:",
        visa: "Виза:",
        medicalCheckup: "Медосмотр:",
        applicationFee: "Рег. взнос:",
        books: "Учебники:",
        deposit: "Депозит:",
        note: "Примечание:",
        scholarships: "Доступные стипендии:",
        feesAfterScholarship: "Стоимость со стипендией:",
        cta: "ПОДАТЬ ЗАЯВКУ В TELEGRAM"
      }
    },
    uzbek: {
      label: "UNIVERSITETLAR",
      title: "OTM KATALOGI",
      subtitle: "Xitoy bo'ylab etakchi hamkor OTMlarni kashf eting.",
      dragHint: "SURING YOKI TUGMALARDAN FOYDALANING",
      detailsBtn: "BATAFSIL MA'LUMOT",
      modal: {
        location: "Manzil",
        ranking: "Kategoriya",
        programs: "Mavjud dasturlar",
        fees: "Ta'lim va yashash xarajatlari",
        documents: "Zarur hujjatlar",
        otherInfo: "Qabul ma'lumotlari",
        ageLimit: "Yosh chegarasi:",
        deadline: "Oxirgi muddat:",
        intake: "Qabul davri:",
        dormitory: "Yotoqxona:",
        tuition: "Ta'lim to'lovi:",
        accommodation: "Yashash to'lovi:",
        insurance: "Sug'urta:",
        visa: "Viza to'lovi:",
        medicalCheckup: "Tibbiy ko'rik:",
        applicationFee: "Ariza to'lovi:",
        books: "Darsliklar:",
        deposit: "Depozit:",
        note: "Eslatma:",
        scholarships: "Mavjud grantlar:",
        feesAfterScholarship: "Grantdan keyingi xarajat:",
        cta: "TELEGRAM BOTDA ARIZA TOPSHIRISH"
      }
    }
  };

  const t = translations[language] || translations.english;

  const universities = [
    {
      id: "uni-1",
      name: "Jiangsu Normal University",
      location: "Xuzhou, Jiangsu",
      ranking: "Partner University",
      programs: "One Year Preparatory Program",
      logo: "/images/logo/Jiangsu_Normal_University_Logo.png",
      image: "/images/univerpics/uni1.jpg",
      details: {
        tuition: "15,000 CNY/Year",
        accommodation: "1,500 CNY/Year (Quad) | 3,000 CNY/Year (Double) | 6,000 CNY/Year (Single)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "400-600 CNY",
        applicationFee: "400 CNY",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Photo" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Highest Educational Transcript and Certificate" : language === 'russian' ? "Академическая справка и диплом" : "Oliy ma'lumot to'g'risidagi hujjat va attestat",
          language === 'english' ? "Medical Check up" : language === 'russian' ? "Медицинский осмотр" : "Tibbiy ko'rik",
          language === 'english' ? "English Proficiency Certificate" : language === 'russian' ? "Сертификат знания английского" : "Ingliz tili sertifikati",
          language === 'english' ? "Non-Criminal Record" : language === 'russian' ? "Справка о несудимости" : "Jinoiy yozuv yo'qligi to'g'risida guvohnoma",
          language === 'english' ? "Resume & Bank Statement" : language === 'russian' ? "Резюме и выписка из банка" : "Rezyume va bank hisob varag'asi"
        ],
        ageLimit: "18–30 years old",
        deadline: "August 10, 2025",
        intake: "September 2025",
        note: "University will arrange an admission interview."
      }
    },
    {
      id: "uni-2",
      name: "Hainan Medical University",
      location: "Haikou City, Hainan Province",
      ranking: "Medical University",
      programs: "Clinical Medicine, Traditional Chinese Medicine, Nursing (Taught in English)",
      logo: "/images/logo/hainan.jpg",
      image: "/images/univerpics/uni2.jpg",
      details: {
        tuition: "20,500 CNY/Year",
        accommodation: "2,100 CNY/Year (4 beds) | 2,800 CNY/Year (3 beds)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400 CNY",
        applicationFee: "400 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и Фото" : "Pasport va Rasm",
          language === 'english' ? "Diploma & Transcript" : language === 'russian' ? "Диплом и академическая справка" : "Diplom va ma'lumot",
          language === 'english' ? "English Proficiency Certificate" : language === 'russian' ? "Сертификат знания английского" : "Ingliz tili sertifikati",
          language === 'english' ? "Health Check Up & Non Criminal Record" : language === 'russian' ? "Медицинский осмотр и справка о несудимости" : "Tibbiy ko'rik va spravka",
          language === 'english' ? "Bank Statement (at least $5000)" : language === 'russian' ? "Выписка из банка (мин. $5000)" : "Bank hisobi (kamida $5000)"
        ],
        ageLimit: "17–35 years old",
        deadline: "August 15, 2025",
        intake: "September 2025",
        note: "Students must pass HSK-3 before finishing the first academic year."
      }
    },
    {
      id: "uni-3",
      name: "Hubei University",
      location: "Wuhan City, Hubei Province",
      ranking: "University",
      programs: "Foundation Program & Degree Pathways",
      logo: "/images/logo/Hubei_University_logo.png",
      image: "/images/univerpics/uni3.jpg",
      details: {
        tuition: "10,000 CNY/Year (Includes Tuition & Accommodation)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "300 CNY",
        applicationFee: "400 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и фото" : "Pasport va rasm",
          language === 'english' ? "School Certificate & Transcript" : language === 'russian' ? "Аттестат и справка" : "Attestat va ma'lumot",
          language === 'english' ? "English Certificate (IELTS 6.0)" : language === 'russian' ? "Сертификат английского (IELTS 6.0)" : "Ingliz tili sertifikati",
          language === 'english' ? "Physical Exam & Non Criminal Record" : language === 'russian' ? "Медосмотр и справка о несудимости" : "Tibbiy ko'rik va spravka",
          language === 'english' ? "Study Plan (1000 words)" : language === 'russian' ? "План обучения (1000 слов)" : "O'qish rejasi (1000 so'z)"
        ],
        ageLimit: "17–25 years old",
        deadline: "August 14, 2025",
        intake: "October 2025",
        note: "Admission requires passing the online interview."
      }
    },
    {
      id: "uni-4",
      name: "Hezhou University",
      location: "Hezhou City, Guangxi Province",
      ranking: "University",
      programs: "Software Engineering, AI, E-commerce, Business English (English Taught)",
      logo: "/images/logo/hezhou-university.png",
      image: "/images/univerpics/uni4.jpg",
      details: {
        tuition: "11,000 CNY/Year (Arts) | 13,000 CNY/Year (Science & Eng)",
        accommodation: "2,000-3,000 CNY/Year",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400-600 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и фото" : "Pasport va rasm",
          language === 'english' ? "Highest Degree Certificate & Transcript" : language === 'russian' ? "Диплом и транскрипт" : "Diplom va transkript",
          language === 'english' ? "Police Clearance & Health Check" : language === 'russian' ? "Справка о несудимости и медосмотр" : "Spravka va tibbiy ko'rik"
        ],
        ageLimit: "18–25 years old",
        deadline: "September 15, 2025",
        intake: "October 2025",
        scholarships: {
          firstYear: "1,000 CNY Freshmen Scholarship",
          subsequentYears: "First-prize: 6000 CNY | Second-prize: 3000 CNY | Third-prize: 2000 CNY"
        }
      }
    },
    {
      id: "uni-5",
      name: "Jiangsu Food & Pharmaceutical Science College",
      location: "Huaian City, Jiangsu Province",
      ranking: "College",
      programs: "Pharmacy, Food Smart Processing, E-commerce, Culinary Art (3-Yr Diploma)",
      logo: "/images/logo/jiangsu.jpg",
      image: "/images/univerpics/uni5.jpg",
      details: {
        tuition: "Scholarship: FREE | Original: 4,700-6,200 CNY/Year",
        accommodation: "1,200 CNY/Year (Double room)",
        insurance: "600 CNY/Year",
        books: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "450 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и фото" : "Pasport va rasm",
          language === 'english' ? "High School Transcript" : language === 'russian' ? "Школьный транскрипт" : "Maktab ma'lumotnomasi",
          language === 'english' ? "Self Introduction Video" : language === 'russian' ? "Видео самопрезентации" : "O'zi haqida video"
        ],
        ageLimit: "17–25 years old",
        deadline: "August 10, 2025",
        intake: "September 2025",
        scholarships: {
          jiangsuGov: "10,000 CNY (Government Scholarship)",
          presidential: "100% of admitted international students receive tuition waiver coverage."
        }
      }
    },
    {
      id: "uni-6",
      name: "Hezhou University - Language Program",
      location: "Hezhou City, Guangxi Province",
      ranking: "Language Center",
      programs: "Chinese Language Intensive (One Semester / One Year)",
      logo: "/images/logo/hezhou.jpg",
      image: "/images/univerpics/uni6.jpg",
      details: {
        tuition: "5,000 CNY/Semester | 10,000 CNY/Year",
        accommodation: "2,000-3,000 CNY/Year",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400-600 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и фото" : "Pasport va rasm",
          language === 'english' ? "High School Certificate" : language === 'russian' ? "Аттестат" : "Attestat"
        ],
        ageLimit: "17–35 years old",
        deadline: "September 15, 2025",
        intake: "October 2025"
      }
    },
    {
      id: "uni-7",
      name: "Guangzhou International Economics College",
      location: "Guangzhou, Guangdong",
      ranking: "College",
      programs: "One Year Chinese Language & Cultural Immersion",
      logo: "/images/logo/guangzhou int.jpg",
      image: "/images/univerpics/uni7.jpg",
      details: {
        tuition: "13,800 CNY/Year",
        accommodation: "5,000 CNY/Year (Double Room)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "400-600 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и фото" : "Pasport va rasm",
          language === 'english' ? "High School Certificate" : language === 'russian' ? "Аттестат" : "Attestat"
        ],
        ageLimit: "18–30 years old",
        deadline: "August 20, 2025",
        intake: "September 2025"
      }
    },
    {
      id: "uni-8",
      name: "Sichuan Tourism University",
      location: "Chengdu City, Sichuan Province",
      ranking: "University",
      programs: "Software Engineering, Trade & Economics (English Taught)",
      logo: "/images/logo/sichuan.webp",
      image: "/images/univerpics/uni8.jpg",
      details: {
        feesAfterScholarship: "6,200 CNY/Year (Covers Tuition & Accommodation)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "500 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и фото" : "Pasport va rasm",
          language === 'english' ? "Secondary School Transcript" : language === 'russian' ? "Академический транскрипт" : "Transkript"
        ],
        deadline: "Depends on Seats",
        intake: "September 2025"
      }
    },
    {
      id: "uni-9",
      name: "Guilin University of Electronic Technology",
      location: "Guilin City, Guangxi Province",
      ranking: "University",
      programs: "Chinese Language & Preparatory Science",
      logo: "/images/logo/Guilin-University-of-Electronic-Technology.png",
      image: "/images/univerpics/uni9.jpg",
      details: {
        tuition: "7,800 CNY/Year",
        accommodation: "2,000 CNY/Year",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400 CNY",
        documents: [
          language === 'english' ? "Passport & Photo" : language === 'russian' ? "Паспорт и фото" : "Pasport va rasm",
          language === 'english' ? "High School Transcript" : language === 'russian' ? "Транскрипт" : "Transkript"
        ],
        ageLimit: "18–30 years old",
        deadline: "August 20, 2025",
        intake: "September 2025"
      }
    }
  ];

  const throwNext = (direction = 1) => {
    if (isThrowing) return;
    setIsThrowing(true);
    setTimeout(() => {
      setActiveDeckIndex((prev) => (prev + direction + universities.length) % universities.length);
      setDragOffset({ x: 0, y: 0 });
      setIsThrowing(false);
    }, 280);
  };

  // Pointer drag handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging || isThrowing) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = e.clientY - dragStartRef.current.y;
    setDragOffset({ x: deltaX, y: deltaY });
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 70; // 70px drag threshold to throw card
    if (Math.abs(dragOffset.x) > threshold) {
      throwNext(dragOffset.x > 0 ? 1 : -1);
    } else {
      setDragOffset({ x: 0, y: 0 }); // reset position
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      throwNext(1);
    } else if (e.key === 'ArrowLeft') {
      throwNext(-1);
    }
  };

  return (
    <section id="universities" className="catalogue-section">
      <div className="container catalogue-container">
        {/* Section Header */}
        <div className="catalogue-header">
          <div>
            <span className="label-uppercase text-crimson">{t.label}</span>
            <h2 className="catalogue-title">{t.title}</h2>
          </div>
          <p className="catalogue-subtitle">{t.subtitle}</p>
        </div>

        {/* Physical Throwable Card Deck Stage */}
        <div
          ref={deckRef}
          className="deck-stage"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          aria-label="University physical card deck catalogue"
        >
          <div className="deck-stack">
            {/* Render 3 Stacked Cards (Top card + 2 background cards) */}
            {[2, 1, 0].map((stackOffset) => {
              const uniIndex = (activeDeckIndex + stackOffset) % universities.length;
              const uni = universities[uniIndex];
              const isTop = stackOffset === 0;

              // Stack styling
              const baseRotate = stackOffset === 0 ? 0 : stackOffset === 1 ? -3 : 4;
              const baseTranslateY = stackOffset * 16;
              const baseScale = 1 - stackOffset * 0.04;

              const dragX = isTop ? dragOffset.x : 0;
              const dragY = isTop ? dragOffset.y : 0;
              const dragRotate = isTop ? dragX * 0.06 : 0;
              const dragScale = isTop && isDragging ? 1.02 : baseScale;

              const transformStr = isTop && isThrowing
                ? `translate3d(${dragX * 3}px, ${dragY}px, 0) rotate(${dragRotate * 2}deg) scale(0.9)`
                : `translate3d(${dragX}px, ${baseTranslateY + dragY}px, 0) rotate(${baseRotate + dragRotate}deg) scale(${dragScale})`;

              return (
                <div
                  key={uni.id}
                  className={`deck-card ${isTop ? 'top-card' : 'background-card'}`}
                  style={{
                    transform: transformStr,
                    zIndex: 10 - stackOffset,
                    opacity: isTop && isThrowing ? 0.2 : 1 - stackOffset * 0.15,
                    transition: isDragging ? 'none' : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s'
                  }}
                  onClick={() => {
                    if (isTop && !isDragging && Math.abs(dragOffset.x) < 5) {
                      setSelectedUni(uni);
                    }
                  }}
                >
                  {/* Card Campus Image */}
                  <div
                    className="deck-card-image"
                    style={{ backgroundImage: `url(${uni.image})` }}
                  >
                    <div className="deck-card-veil" />
                    <div className="deck-card-badge">{uni.ranking}</div>
                  </div>

                  {/* Card Content */}
                  <div className="deck-card-body">
                    <div className="deck-card-top-row">
                      <img
                        src={uni.logo}
                        alt={`${uni.name} logo`}
                        className="deck-uni-logo"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="label-uppercase uni-loc-tag">
                        <i className="fas fa-map-marker-alt" /> {uni.location}
                      </span>
                    </div>

                    <h3 className="deck-uni-name">{uni.name}</h3>
                    <p className="deck-uni-programs">{uni.programs}</p>

                    <button className="btn-editorial btn-deck-details">
                      {t.detailsBtn} <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deck Controls & Drag Hint */}
        <div className="deck-controls">
          <span className="label-uppercase deck-hint-text">{t.dragHint}</span>

          <div className="deck-dots">
            {universities.map((_, idx) => (
              <button
                key={idx}
                className={`deck-dot ${idx === activeDeckIndex ? 'active' : ''}`}
                onClick={() => setActiveDeckIndex(idx)}
                aria-label={`Go to university ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Editorial University Detail Modal */}
      {selectedUni && (
        <div className="editorial-modal-backdrop" onClick={() => setSelectedUni(null)}>
          <div className="editorial-modal-panel" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="editorial-modal-close"
              onClick={() => setSelectedUni(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Banner Image */}
            <div
              className="modal-banner-image"
              style={{ backgroundImage: `url(${selectedUni.image})` }}
            >
              <div className="modal-banner-overlay" />
              <div className="modal-banner-content">
                <span className="label-uppercase text-crimson">{selectedUni.ranking}</span>
                <h2 className="modal-uni-title">{selectedUni.name}</h2>
                <p className="modal-uni-loc"><i className="fas fa-map-marker-alt" /> {selectedUni.location}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="modal-body-content">
              {/* Programs */}
              <div className="modal-section">
                <h3 className="label-uppercase modal-section-title">{t.modal.programs}</h3>
                <p className="modal-programs-text">{selectedUni.programs}</p>
              </div>

              {/* Fee Breakdown Grid */}
              {selectedUni.details && (
                <div className="modal-section">
                  <h3 className="label-uppercase modal-section-title">{t.modal.fees}</h3>
                  <div className="modal-fees-grid">
                    {selectedUni.details.tuition && (
                      <div className="fee-item">
                        <span className="fee-label">{t.modal.tuition}</span>
                        <span className="fee-value">{selectedUni.details.tuition}</span>
                      </div>
                    )}
                    {selectedUni.details.accommodation && (
                      <div className="fee-item">
                        <span className="fee-label">{t.modal.accommodation}</span>
                        <span className="fee-value">{selectedUni.details.accommodation}</span>
                      </div>
                    )}
                    {selectedUni.details.insurance && (
                      <div className="fee-item">
                        <span className="fee-label">{t.modal.insurance}</span>
                        <span className="fee-value">{selectedUni.details.insurance}</span>
                      </div>
                    )}
                    {selectedUni.details.visa && (
                      <div className="fee-item">
                        <span className="fee-label">{t.modal.visa}</span>
                        <span className="fee-value">{selectedUni.details.visa}</span>
                      </div>
                    )}
                    {selectedUni.details.medicalCheckup && (
                      <div className="fee-item">
                        <span className="fee-label">{t.modal.medicalCheckup}</span>
                        <span className="fee-value">{selectedUni.details.medicalCheckup}</span>
                      </div>
                    )}
                    {selectedUni.details.feesAfterScholarship && (
                      <div className="fee-item fee-item-highlight">
                        <span className="fee-label">{t.modal.feesAfterScholarship}</span>
                        <span className="fee-value text-crimson">{selectedUni.details.feesAfterScholarship}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Required Documents Checklist */}
              {selectedUni.details?.documents && (
                <div className="modal-section">
                  <h3 className="label-uppercase modal-section-title">{t.modal.documents}</h3>
                  <ul className="modal-docs-list">
                    {selectedUni.details.documents.map((doc, idx) => (
                      <li key={idx}><i className="fas fa-check text-crimson" /> {doc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Admissions Info & CTA */}
              <div className="modal-section modal-footer-actions">
                <div className="modal-meta-info">
                  {selectedUni.details?.deadline && (
                    <span><strong>{t.modal.deadline}</strong> {selectedUni.details.deadline}</span>
                  )}
                  {selectedUni.details?.intake && (
                    <span><strong>{t.modal.intake}</strong> {selectedUni.details.intake}</span>
                  )}
                </div>

                <a
                  href="https://t.me/china_connect_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-editorial btn-editorial-accent modal-cta-btn"
                >
                  <i className="fab fa-telegram" /> {t.modal.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="hairline-divider" />
    </section>
  );
};

export default Universities;