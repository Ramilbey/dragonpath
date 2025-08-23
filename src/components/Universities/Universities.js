// src/components/Universities/Universities.js
import React, { useState } from "react";
import { useLanguage } from '../../context/LanguageContext';
import "./Universities.css";

const Universities = () => {
  const [selectedUni, setSelectedUni] = useState(null);
  const { language } = useLanguage();

  // Translation object
  const translations = {
    english: {
      title: "Partner Universities",
      subtitle: "We have partnerships with top universities across China",
      learnMore: "Learn More",
      modal: {
        location: "Location:",
        ranking: "Ranking:",
        programs: "Programs:",
        fees: "Fees",
        documents: "Documents Required",
        otherInfo: "Other Information",
        ageLimit: "Age Limit:",
        deadline: "Application Deadline:",
        intake: "Intake:",
        dormitory: "Dormitory:",
        tuition: "Tuition:",
        accommodation: "Accommodation:",
        insurance: "Insurance:",
        visa: "Visa:",
        medicalCheckup: "Medical Check-up:",
        applicationFee: "Application Fee:",
        books: "Books:",
        deposit: "Deposit:",
        note: "Note:",
        scholarships: "Scholarships:",
        feesAfterScholarship: "Fees After Scholarship:"
      }
    },
    russian: {
      title: "Партнерские Университеты",
      subtitle: "У нас есть партнерские отношения с ведущими университетами Китая",
      learnMore: "Узнать больше",
      modal: {
        location: "Местоположение:",
        ranking: "Рейтинг:",
        programs: "Программы:",
        fees: "Стоимость",
        documents: "Необходимые документы",
        otherInfo: "Другая информация",
        ageLimit: "Возрастное ограничение:",
        deadline: "Крайний срок подачи заявок:",
        intake: "Набор:",
        dormitory: "Общежитие:",
        tuition: "Обучение:",
        accommodation: "Проживание:",
        insurance: "Страховка:",
        visa: "Виза:",
        medicalCheckup: "Медицинский осмотр:",
        applicationFee: "Регистрационный взнос:",
        books: "Книги:",
        deposit: "Депозит:",
        note: "Примечание:",
        scholarships: "Стипендии:",
        feesAfterScholarship: "Стоимость после стипендии:"
      }
    },
    uzbek: {
      title: "Hamkor Universitetlar",
      subtitle: "Biz Xitoyning eng yaxshi universitetlari bilan hamkorlik qilamiz",
      learnMore: "Batafsil",
      modal: {
        location: "Manzil:",
        ranking: "Reyting:",
        programs: "Dasturlar:",
        fees: "Xarajatlar",
        documents: "Talab qilinadigan hujjatlar",
        otherInfo: "Boshqa ma'lumotlar",
        ageLimit: "Yosh chegarasi:",
        deadline: "Ariza topshirish muddati:",
        intake: "Qabul:",
        dormitory: "Yotoqxona:",
        tuition: "Ta'lim:",
        accommodation: "Yashash joyi:",
        insurance: "Sug'urta:",
        visa: "Viza:",
        medicalCheckup: "Tibbiy ko'rik:",
        applicationFee: "Ariza to'lovi:",
        books: "Kitoblar:",
        deposit: "Depozit:",
        note: "Eslatma:",
        scholarships: "Stypendiyalar:",
        feesAfterScholarship: "Stypendiyadan keyingi xarajatlar:"
      }
    }
  };

  const t = translations[language] || translations.english;

  const universities = [
    {
      name: "Jiangsu Normal University",
      location: "Xuzhou, Jiangsu",
      ranking: "Partner University",
      programs: "One Year Preparatory Program",
      logo: "/images/logo/Jiangsu_Normal_University_Logo.png",
      details: {
        tuition: "15000 CNY/Year",
        accommodation: "1500 CNY/Year (Quad) | 3000 CNY/Year (Double) | 6000 CNY/Year (Single)",
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
          language === 'english' ? "Resume" : language === 'russian' ? "Резюме" : "Rezyume",
          language === 'english' ? "Bank statement" : language === 'russian' ? "Выписка из банка" : "Bank hisob varag'asi"
        ],
        ageLimit: "18–30 years old",
        deadline: "August 10, 2025",
        intake: "September 2025",
        note: "University will arrange an interview."
      }
    },
    {
      name: "Hainan Medical University",
      location: "Haikou City, Hainan Province",
      ranking: "Medical University",
      programs: "Clinical Medicine, Traditional Chinese Medicine, Nursing, Social Medicine and Health Administration (Taught in English)",
      logo: "/images/logo/hainan.jpg",
      details: {
        tuition: "20500 CNY/Year",
        accommodation: "2100 CNY/Year (4 beds) | 2800 CNY/Year (3 beds)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400 CNY",
        applicationFee: "400 CNY",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Photo" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Highest diploma Certificate and Transcript" : language === 'russian' ? "Диплом и академическая справка" : "Diplom va akademik ma'lumot",
          language === 'english' ? "English Proficiency Certificate" : language === 'russian' ? "Сертификат знания английского" : "Ingliz tili sertifikati",
          language === 'english' ? "Health Check Up" : language === 'russian' ? "Медицинский осмотр" : "Tibbiy ko'rik",
          language === 'english' ? "Non Criminal Record" : language === 'russian' ? "Справка о несудимости" : "Jinoiy yozuv yo'qligi to'g'risida guvohnoma",
          language === 'english' ? "Bank Statement (at least 5000$)" : language === 'russian' ? "Выписка из банка (минимум 5000$)" : "Bank hisobi (kamida 5000$)",
          language === 'english' ? "Application Form" : language === 'russian' ? "Форма заявления" : "Ariza formasi"
        ],
        ageLimit: "17–35 years old",
        deadline: "August 15, 2025 (Depends on seats)",
        intake: "September 2025",
        note: "Students must pass HSK-3 before finishing the first year."
      }
    },
    {
      name: "Hubei University",
      location: "Wuhan City, Hubei Province",
      ranking: "University",
      programs: "Foundation Program",
      logo: "/images/logo/Hubei_University_logo.png",
      details: {
        tuition: "10000 CNY/Year (Includes Tuition & Accommodation)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "300 CNY (1st Year only)",
        applicationFee: "400 CNY",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Photo" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Higher Secondary School Certificate & Transcript" : language === 'russian' ? "Аттестат о среднем образовании и справка" : "O'rta maktab attestati va ma'lumoti",
          language === 'english' ? "English Proficiency Certificate (e.g., IELTS 6.0)" : language === 'russian' ? "Сертификат знания английского (например, IELTS 6.0)" : "Ingliz tili sertifikati (masalan, IELTS 6.0)",
          language === 'english' ? "Physical Examination Form for Foreigners" : language === 'russian' ? "Медицинская форма для иностранцев" : "Chet elliklar uchun tibbiy ko'rik formasi",
          language === 'english' ? "Non Criminal Record" : language === 'russian' ? "Справка о несудимости" : "Jinoiy yozuv yo'qligi to'g'risida guvohnoma",
          language === 'english' ? "Bank Statement (balance > 5000$)" : language === 'russian' ? "Выписка из банка (баланс > 5000$)" : "Bank hisobi (balans > 5000$)",
          language === 'english' ? "Application Form or CV" : language === 'russian' ? "Форма заявления или резюме" : "Ariza formasi yoki CV",
          language === 'english' ? "Study Plan (1000 words)" : language === 'russian' ? "План обучения (1000 слов)" : "O'qish rejasi (1000 so'z)"
        ],
        ageLimit: "17–25 years old",
        deadline: "August 14, 2025 (Depends on seats)",
        intake: "October 2025",
        note: "Only those who pass the interview can be admitted. Must abide by Chinese laws."
      }
    },
    {
      name: "Hezhou University",
      location: "Hezhou City, Guangxi Province",
      ranking: "University",
      programs: "International Economics and Trade, Cross-border E-commerce, Business English, Software Engineering, Communication Engineering, Artificial Intelligence (Bachelor's, English Taught)",
      logo: "/images/logo/hezhou-university.png",
      details: {
        tuition: "11000 CNY/Year (Liberal Arts) | 13000 CNY/Year (Science/Engineering)",
        accommodation: "2000-3000 CNY/Month (4-6 students)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400-600 CNY",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Picture" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Highest degree Certificate and Transcript" : language === 'russian' ? "Диплом и академическая справка" : "Oliy daraja sertifikati va ma'lumoti",
          language === 'english' ? "Health Check Up" : language === 'russian' ? "Медицинский осмотр" : "Tibbiy ko'rik",
          language === 'english' ? "English Proficiency Certificate" : language === 'russian' ? "Сертификат знания английского" : "Ingliz tili sertifikati",
          language === 'english' ? "Non Criminal Record / Police Clearance" : language === 'russian' ? "Справка о несудимости / Полицейская справка" : "Jinoiy yozuv yo'qligi / Politsiya spravkasi",
          language === 'english' ? "Bank Statement" : language === 'russian' ? "Выписка из банка" : "Bank hisobi",
          language === 'english' ? "Application Form" : language === 'russian' ? "Форма заявления" : "Ariza formasi"
        ],
        ageLimit: "18–25 years old",
        deadline: "September 15, 2025",
        intake: "October 2025",
        note: "Not open to students from Bangladesh or non-stable countries.",
        scholarships: {
          firstYear: "1000 CNY (Freshmen Scholarship)",
          subsequentYears: "First-prize: 6000 CNY (10%) | Second-prize: 3000 CNY (20%) | Third-prize: 2000 CNY (50%)"
        }
      }
    },
    {
      name: "Jiangsu Food & Pharmaceutical Science College",
      location: "Huaian City, Jiangsu Province",
      ranking: "College",
      programs: "Pharmacy, Food Smart Processing Technology, E-commerce, Culinery Art and Nutrition (3-Year Diploma, English Taught)",
      logo: "/images/logo/jiangsu.jpg",
      details: {
        tuition: "Scholarship: FREE | Original: 4700-6200 CNY/Year",
        accommodation: "1200 CNY/Year (2 beds room)",
        insurance: "600 CNY/Year",
        books: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "450 CNY",
        deposit: "2000 CNY (After pre-admission)",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Picture" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Higher Secondary School / Grade 12th / A Level / High School Certificate and Transcript" : language === 'russian' ? "Аттестат о среднем образовании / 12 класс / A Level и академическая справка" : "O'rta maktab / 12-sinf / A Level attestati va ma'lumoti",
          language === 'english' ? "Health Check Up" : language === 'russian' ? "Медицинский осмотр" : "Tibbiy ko'rik",
          language === 'english' ? "English Proficiency Certificate" : language === 'russian' ? "Сертификат знания английского" : "Ingliz tili sertifikati",
          language === 'english' ? "Non Criminal Record / Police Clearance" : language === 'russian' ? "Справка о несудимости / Полицейская справка" : "Jinoiy yozuv yo'qligi / Politsiya spravkasi",
          language === 'english' ? "Bank Statement" : language === 'russian' ? "Выписка из банка" : "Bank hisobi",
          language === 'english' ? "Video of self Introduction" : language === 'russian' ? "Видео самопрезентации" : "O'zi haqida video",
          language === 'english' ? "Application Form" : language === 'russian' ? "Форма заявления" : "Ariza formasi"
        ],
        ageLimit: "17–25 years old",
        deadline: "August 10, 2025",
        intake: "September 2025",
        note: "School will arrange an interview after initial review.",
        scholarships: {
          jiangsuGov: "10000 CNY (Excellent Scholarship)",
          presidential: "2350-3100 CNY/Year (100% of students, covers half of tuition)",
          academic: "Excellent: 5000 CNY (10%) | First Class: 3000 CNY (40%) | Second Class: 2000 CNY (40%)"
        }
      }
    },
    {
      name: "Hezhou University - Chinese Language Program",
      location: "Hezhou City, Guangxi Province",
      ranking: "University",
      programs: "Chinese Language Program (One Semester/One Year)",
      logo: "/images/logo/hezhou.jpg",
      details: {
        tuition: "5000 CNY/Semester | 10000 CNY/Year",
        accommodation: "2000-3000 CNY/Month (4-6 students)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400-600 CNY",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Picture" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Highest degree Certificate and Transcript" : language === 'russian' ? "Диплом и академическая справка" : "Oliy daraja sertifikati va ma'lumoti",
          language === 'english' ? "Health Check Up" : language === 'russian' ? "Медицинский осмотр" : "Tibbiy ko'rik",
          language === 'english' ? "English Proficiency Certificate" : language === 'russian' ? "Сертификат знания английского" : "Ingliz tili sertifikati",
          language === 'english' ? "Non Criminal Record / Police Clearance" : language === 'russian' ? "Справка о несудимости / Полицейская справка" : "Jinoiy yozuv yo'qligi / Politsiya spravkasi",
          language === 'english' ? "Bank Statement" : language === 'russian' ? "Выписка из банка" : "Bank hisobi",
          language === 'english' ? "Application Form" : language === 'russian' ? "Форма заявления" : "Ariza formasi"
        ],
        ageLimit: "17–35 years old",
        deadline: "September 15, 2025",
        intake: "October 2025",
        note: "Not open to students from Bangladesh or non-stable countries."
      }
    },
    {
      name: "Guangzhou International Economics College",
      location: "Guangzhou, Guangdong",
      ranking: "College",
      programs: "One Year Chinese Language Program",
      logo: "/images/logo/guangzhou int.jpg",
      details: {
        tuition: "13800 CNY/Year",
        accommodation: "5000 CNY/Year (Double Room)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "400-600 CNY",
        applicationFee: "500 CNY",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Photo" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Highest Educational Transcript and Certificate" : language === 'russian' ? "Академическая справка и диплом" : "Oliy ma'lumot to'g'risidagi hujjat va attestat",
          language === 'english' ? "Medical Check up" : language === 'russian' ? "Медицинский осмотр" : "Tibbiy ko'rik",
          language === 'english' ? "English Proficiency Certificate" : language === 'russian' ? "Сертификат знания английского" : "Ingliz tili sertifikati",
          language === 'english' ? "Non-Criminal Record" : language === 'russian' ? "Справка о несудимости" : "Jinoiy yozuv yo'qligi to'g'risida guvohnoma",
          language === 'english' ? "Resume" : language === 'russian' ? "Резюме" : "Rezyume",
          language === 'english' ? "Bank statement" : language === 'russian' ? "Выписка из банка" : "Bank hisob varag'asi"
        ],
        ageLimit: "18–30 years old",
        deadline: "August 20, 2025",
        intake: "September 2025"
      }
    },
    {
      name: "Sichuan Tourism University",
      location: "Chengdu City, Sichuan Province",
      ranking: "University",
      programs: "Software Engineering, Trade and Economics (Bachelor's, English Taught)",
      logo: "/images/logo/sichuan.webp",
      details: {
        feesAfterScholarship: "6200 CNY/Year (Tuition & Accommodation)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "500 CNY (1st Year only)",
        documents: [
          language === 'english' ? "Passport" : language === 'russian' ? "Паспорт" : "Pasport",
          language === 'english' ? "Picture" : language === 'russian' ? "Фото" : "Rasm",
          language === 'english' ? "Higher Secondary School / Grade 12th / A Level / High School Certificate and Transcript" : language === 'russian' ? "Аттестат о среднем образовании / 12 класс / A Level и академическая справка" : "O'rta maktab / 12-sinf / A Level attestati va ma'lumoti",
          language === 'english' ? "Health Check Up" : language === 'russian' ? "Медицинский осмотр" : "Tibbiy ko'rik",
          language === 'english' ? "Non Criminal Record / Police Clearance" : language === 'russian' ? "Справка о несудимости / Полицейская справка" : "Jinoiy yozuv yo'qligi / Politsiya spravkasi",
          language === 'english' ? "Application Form" : language === 'russian' ? "Форма заявления" : "Ariza formasi"
        ],
        deadline: "Depends on Seats",
        intake: "September 2025"
      }
    }
  ];

  return (
    <section id="universities" className="universities">
      <div className="container">
        <div className="section-title">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>
        <div className="universities-grid">
          {universities.map((uni, index) => (
            <div key={index} className="university-card">
              <div className="uni-logo">
                <img 
                  src={uni.logo} 
                  alt={`${uni.name} logo`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="logo-fallback" style={{display: 'none'}}>
                  {uni.name.charAt(0)}
                </div>
              </div>
              <div className="uni-content">
                <h3>{uni.name}</h3>
                <p className="uni-location">
                  <i className="fas fa-map-marker-alt"></i> {uni.location}
                </p>
                <p className="uni-ranking">{uni.ranking}</p>
                <p className="uni-programs">{uni.programs}</p>
                <button
                  className="btn-outline"
                  onClick={() => setSelectedUni(uni)}
                >
                  {t.learnMore}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedUni && (
        <div className="uni-modal">
          <div className="uni-modal-content">
            <span
              className="uni-modal-close"
              onClick={() => setSelectedUni(null)}
            >
              &times;
            </span>
            <h2>{selectedUni.name}</h2>
            <p>
              <strong>{t.modal.location}</strong> {selectedUni.location}
            </p>
            <p>
              <strong>{t.modal.ranking}</strong> {selectedUni.ranking}
            </p>
            <p>
              <strong>{t.modal.programs}</strong> {selectedUni.programs}
            </p>

            {selectedUni.details && (
              <div className="uni-details">
                <h3>{t.modal.fees}</h3>
                <ul>
                  {selectedUni.details.tuition && (
                    <li><strong>{t.modal.tuition}</strong> {selectedUni.details.tuition}</li>
                  )}
                  {selectedUni.details.accommodation && (
                    <li><strong>{t.modal.accommodation}</strong> {selectedUni.details.accommodation}</li>
                  )}
                  {selectedUni.details.insurance && (
                    <li><strong>{t.modal.insurance}</strong> {selectedUni.details.insurance}</li>
                  )}
                  {selectedUni.details.visa && (
                    <li><strong>{t.modal.visa}</strong> {selectedUni.details.visa}</li>
                  )}
                  {selectedUni.details.medicalCheckup && (
                    <li><strong>{t.modal.medicalCheckup}</strong> {selectedUni.details.medicalCheckup}</li>
                  )}
                  {selectedUni.details.applicationFee && (
                    <li><strong>{t.modal.applicationFee}</strong> {selectedUni.details.applicationFee}</li>
                  )}
                  {selectedUni.details.books && (
                    <li><strong>{t.modal.books}</strong> {selectedUni.details.books}</li>
                  )}
                  {selectedUni.details.deposit && (
                    <li><strong>{t.modal.deposit}</strong> {selectedUni.details.deposit}</li>
                  )}
                  {selectedUni.details.feesAfterScholarship && (
                    <li><strong>{t.modal.feesAfterScholarship}</strong> {selectedUni.details.feesAfterScholarship}</li>
                  )}
                </ul>

                <h3>{t.modal.documents}</h3>
                <ul>
                  {selectedUni.details.documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>

                <h3>{t.modal.otherInfo}</h3>
                {selectedUni.details.ageLimit && (
                  <p><strong>{t.modal.ageLimit}</strong> {selectedUni.details.ageLimit}</p>
                )}
                {selectedUni.details.deadline && (
                  <p><strong>{t.modal.deadline}</strong> {selectedUni.details.deadline}</p>
                )}
                {selectedUni.details.intake && (
                  <p><strong>{t.modal.intake}</strong> {selectedUni.details.intake}</p>
                )}
                {selectedUni.details.note && (
                  <p><strong>{t.modal.note}</strong> {selectedUni.details.note}</p>
                )}
                {selectedUni.details.scholarships && (
                  <>
                    <p><strong>{t.modal.scholarships}</strong></p>
                    {selectedUni.details.scholarships.firstYear && (
                      <p>• {selectedUni.details.scholarships.firstYear}</p>
                    )}
                    {selectedUni.details.scholarships.subsequentYears && (
                      <p>• {selectedUni.details.scholarships.subsequentYears}</p>
                    )}
                    {selectedUni.details.scholarships.jiangsuGov && (
                      <p>• {selectedUni.details.scholarships.jiangsuGov}</p>
                    )}
                    {selectedUni.details.scholarships.presidential && (
                      <p>• {selectedUni.details.scholarships.presidential}</p>
                    )}
                    {selectedUni.details.scholarships.academic && (
                      <p>• {selectedUni.details.scholarships.academic}</p>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Universities;