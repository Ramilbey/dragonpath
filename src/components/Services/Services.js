// src/components/Services/Services.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Services.css';

const Services = () => {
  const { language } = useLanguage();

  // Translation object
  const translations = {
    english: {
      title: "Our Services",
      subtitle: "We provide end-to-end support for your educational journey",
      services: [
        {
          icon: 'fas fa-school',
          title: 'University Selection',
          description: 'We help you choose the right university and program based on your academic background, interests, and career goals from our network of partner institutions across China.'
        },
        {
          icon: 'fas fa-file-alt',
          title: 'Application Assistance',
          description: 'Our experts guide you through the entire application process, ensuring all documents are properly prepared and submitted on time to maximize your chances of acceptance.'
        },
        {
          icon: 'fas fa-passport',
          title: 'Visa Support',
          description: 'We provide comprehensive visa application guidance, including documentation preparation, interview coaching, and follow-up with embassies to ensure success.'
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'Scholarship Guidance',
          description: 'We help you identify and apply for scholarships, grants, and financial aid opportunities to make your education in China more affordable.'
        },
        {
          icon: 'fas fa-home',
          title: 'Accommodation Assistance',
          description: 'We help you find safe and comfortable housing options near your university, whether on-campus dormitories or off-campus apartments.'
        },
        {
          icon: 'fas fa-language',
          title: 'Language Preparation',
          description: 'We offer Chinese language courses and cultural orientation programs to help you adapt quickly to life and studies in China.'
        }
      ]
    },
    russian: {
      title: "Наши Услуги",
      subtitle: "Мы предоставляем полную поддержку для вашего образовательного пути",
      services: [
        {
          icon: 'fas fa-school',
          title: 'Выбор Университета',
          description: 'Мы помогаем выбрать подходящий университет и программу на основе вашего академического опыта, интересов и карьерных целей из нашей сети партнерских учреждений по всему Китаю.'
        },
        {
          icon: 'fas fa-file-alt',
          title: 'Помощь с Заявлением',
          description: 'Наши эксперты проводят вас через весь процесс подачи заявления, обеспечивая правильную подготовку и своевременную подачу всех документов для максимизации ваших шансов на принятие.'
        },
        {
          icon: 'fas fa-passport',
          title: 'Поддержка с Визами',
          description: 'Мы предоставляем комплексное руководство по заявлению на визу, включая подготовку документации, подготовку к собеседованию и последующее наблюдение с посольствами для обеспечения успеха.'
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'Помощь со Стипендиями',
          description: 'Мы помогаем вам найти и подать заявку на стипендии, гранты и возможности финансовой помощи, чтобы сделать ваше образование в Китае более доступным.'
        },
        {
          icon: 'fas fa-home',
          title: 'Помощь с Жильем',
          description: 'Мы помогаем найти безопасные и комфортабельные варианты жилья рядом с вашим университетом, будь то общежития на кампусе или квартиры вне кампуса.'
        },
        {
          icon: 'fas fa-language',
          title: 'Языковая Подготовка',
          description: 'Мы предлагаем курсы китайского языка и программы культурной ориентации, чтобы помочь вам быстро адаптироваться к жизни и учебе в Китае.'
        }
      ]
    },
    uzbek: {
      title: "Bizning Xizmatlarimiz",
      subtitle: "Biz sizning ta'lim safariingiz uchun to'liq qo'llab-quvvatlashni ta'minlaymiz",
      services: [
        {
          icon: 'fas fa-school',
          title: 'Universitet Tanlash',
          description: 'Biz sizning akademik tajribangiz, qiziqishlaringiz va karera maqsadlaringiz asosida butun Xitoy bo\'ylab hamkorlik qiladigan institutlarimiz tarmog\'idan mos universitet va dasturni tanlashda yordam beramiz.'
        },
        {
          icon: 'fas fa-file-alt',
          title: 'Ariza Yordami',
          description: 'Bizning mutaxassislarimiz barcha hujjatlarning to\'g\'ri tayyorlanishi va o\'z vaqtida topshirilishini ta\'minlab, ariza topshirish jarayonining barcha bosqichlarida sizga yo\'l-yo\'riq ko\'rsatadi.'
        },
        {
          icon: 'fas fa-passport',
          title: 'Viza Yordami',
          description: 'Biz hujjatlarni tayyorlash, suhbatga tayyorgarlik va elchixonalar bilan keyingi aloqani o\'z ichiga olgan holda vizaga ariza topshirish bo\'yicha kompleks yo\'riqnoma taqdim etamiz.'
        },
        {
          icon: 'fas fa-graduation-cap',
          title: 'Grant va Stipendiyalar',
          description: 'Biz sizga Xitoyda ta\'lim olishni yanada arzonroq qilish uchun stipendiyalar, grantlar va moliyaviy yordam imkoniyatlarini topish va ularga ariza topshirishda yordam beramiz.'
        },
        {
          icon: 'fas fa-home',
          title: 'Turar Joy Yordami',
          description: 'Biz sizga universitetingiz yaqinidagi xavfsiz va qulay turar joy variantlarini topishda yordam beramiz, kampustagi yotoqxonalar yoki kampusdan tashqari kvartiralar bo\'lsin.'
        },
        {
          icon: 'fas fa-language',
          title: 'Til Tayyorgarligi',
          description: 'Biz Xitoyda hayot va o\'qishga tezda moslashishingizga yordam berish uchun xitoy tili kurslari va madaniy orientatsiya dasturlarini taklif etamiz.'
        }
      ]
    }
  };

  const currentLang = translations[language] || translations.english;

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>{currentLang.title}</h2>
          <p>{currentLang.subtitle}</p>
        </div>
        <div className="services-grid">
          {currentLang.services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-img">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;