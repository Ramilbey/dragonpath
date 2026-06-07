// src/components/Chatbot/Chatbot.js
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Chatbot.css';

const chatData = {
  english: {
    greeting: "👋 Hi! I'm DragonBot, your guide to studying in China. Choose a question to get started!",
    placeholder: "Choose a question below...",
    quickReplies: [
      { id: 'docs', label: "📄 What documents do I need?" },
      { id: 'grant', label: "🏅 Can I get a scholarship/grant?" },
      { id: 'chinese', label: "🈵 Do I need to speak Chinese?" },
      { id: 'office', label: "🏢 Do you have an office?" },
      { id: 'cost', label: "💰 How much does it cost?" },
      { id: 'timeline', label: "🗓️ When should I apply?" },
      { id: 'visa', label: "🛂 How does the visa work?" },
      { id: 'housing', label: "🏠 Where will I live?" },
      { id: 'process', label: "🔄 What is the admission process?" },
      { id: 'telegram', label: "📲 How does the Telegram bot help?" },
    ],
    answers: {
      docs: "📄 **Documents Required:**\n\n• Passport (valid at least 2 years)\n• High school diploma & transcripts\n• Medical certificate & HIV test\n• 2 passport photos\n• Application form\n• Financial guarantee letter\n\n✅ We help you prepare and translate ALL documents!",
      grant: "🏅 **Scholarships & Grants:**\n\nYes! There are multiple options:\n\n• **CSC Scholarship** – Full government scholarship covering tuition + dorm\n• **Provincial Scholarships** – Offered by specific provinces\n• **University Scholarships** – Partial tuition waivers\n• **DragonPath Discount** – Special fee reduction for early applicants\n\n💡 Our team will assess your eligibility for free!",
      chinese: "🈵 **Chinese Language Requirement:**\n\nNo worries! Most of our partner universities offer:\n\n• **1-year Chinese language prep courses** before your degree\n• English-taught programs in some faculties\n• HSK preparation classes\n\nYou don't need to know Chinese to START. We prepare you step by step 🎓",
      office: "🏢 **Our Office:**\n\nYes, we have a physical office!\n\n📍 **Location:** Tashkent city, Mirobod district, Business Center\n\n🕐 **Working Hours:** Mon–Sat, 9:00 – 18:00\n\n📞 You can also reach us on Telegram or WhatsApp anytime!",
      cost: "💰 **Cost Breakdown:**\n\nOur consultation is **FREE** 🎉\n\nTypical annual costs in China:\n• Tuition: $2,000 – $5,000/year\n• Dormitory: $500 – $1,500/year\n• Food & Living: ~$200/month\n\n🏅 With CSC scholarship, tuition + dorm can be fully covered!",
      timeline: "🗓️ **Application Timeline:**\n\n• **January–March** – Best time to start preparation\n• **March–April** – Submit applications\n• **May–June** – Receive admission letters\n• **July–August** – Visa processing\n• **September** – University enrollment begins\n\n⚡ The earlier you start, the more scholarship options you have!",
      visa: "🛂 **Visa Process:**\n\n1. Receive your **JW201/202 form** from the university\n2. We assist with **X1 student visa** application\n3. Gather required documents (offer letter, medical, etc.)\n4. Submit at Chinese Embassy in Tashkent\n5. Processing takes ~7–10 business days\n\n✅ We guide you through every step!",
      housing: "🏠 **Accommodation:**\n\nAll our partner universities offer:\n\n• **Campus dormitories** – Safe, clean, affordable ($50–$150/month)\n• **Off-campus apartments** – More independence (~$200–$400/month)\n• **Shared apartments** – Popular among students\n\n🛡️ We help you secure accommodation before you arrive!",
      process: "🔄 **Admission Process:**\n\n1️⃣ Free consultation with DragonPath\n2️⃣ Select suitable universities\n3️⃣ Prepare & translate documents\n4️⃣ Submit application\n5️⃣ Receive admission letter\n6️⃣ Apply for visa\n7️⃣ Fly to China & start your journey!\n\n⏱️ Total process: 2–4 months",
      telegram: "📲 **Our Telegram Bot (CSCA):**\n\nOur AI-powered bot helps you:\n\n• 📝 Take **mock HSK tests**\n• 📚 Access study materials\n• 🔔 Get admission deadline reminders\n• 💬 Chat with advisors\n• 🗺️ Navigate university campuses\n\n👉 Start now: @china_connect_bot",
    },
    back: "⬅️ Back to questions",
    askMore: "❓ Ask another question",
  },

  russian: {
    greeting: "👋 Привет! Я DragonBot — ваш гид по учёбе в Китае. Выберите вопрос, чтобы начать!",
    placeholder: "Выберите вопрос ниже...",
    quickReplies: [
      { id: 'docs', label: "📄 Какие документы нужны?" },
      { id: 'grant', label: "🏅 Можно ли получить грант?" },
      { id: 'chinese', label: "🈵 Нужно ли знать китайский?" },
      { id: 'office', label: "🏢 Есть ли у вас офис?" },
      { id: 'cost', label: "💰 Сколько это стоит?" },
      { id: 'timeline', label: "🗓️ Когда подавать документы?" },
      { id: 'visa', label: "🛂 Как оформить визу?" },
      { id: 'housing', label: "🏠 Где я буду жить?" },
      { id: 'process', label: "🔄 Как проходит поступление?" },
      { id: 'telegram', label: "📲 Как помогает Telegram-бот?" },
    ],
    answers: {
      docs: "📄 **Необходимые документы:**\n\n• Паспорт (действителен минимум 2 года)\n• Аттестат и транскрипт\n• Медицинская справка и тест на ВИЧ\n• 2 фотографии на паспорт\n• Анкета-заявление\n• Финансовая гарантия\n\n✅ Мы помогаем подготовить и перевести ВСЕ документы!",
      grant: "🏅 **Стипендии и гранты:**\n\nДа! Доступны несколько вариантов:\n\n• **Стипендия CSC** – Полная государственная стипендия: обучение + общежитие\n• **Провинциальные стипендии** – От конкретных провинций\n• **Университетские стипендии** – Частичное освобождение от оплаты\n• **Скидка DragonPath** – Для ранних абитуриентов\n\n💡 Наша команда бесплатно оценит ваши шансы!",
      chinese: "🈵 **Требование к китайскому языку:**\n\nНе волнуйтесь! Большинство наших университетов предлагают:\n\n• **Годичные курсы китайского** перед основной программой\n• Программы на английском языке\n• Подготовку к HSK\n\nНачать можно без знания китайского. Мы готовим вас шаг за шагом 🎓",
      office: "🏢 **Наш офис:**\n\nДа, у нас есть физический офис!\n\n📍 **Адрес:** Ташкент, Мирабадский район, Бизнес-центр\n\n🕐 **Часы работы:** Пн–Сб, 9:00 – 18:00\n\n📞 Также доступны в Telegram и WhatsApp в любое время!",
      cost: "💰 **Расходы:**\n\nКонсультация — **БЕСПЛАТНО** 🎉\n\nТипичные годовые расходы в Китае:\n• Обучение: $2,000 – $5,000/год\n• Общежитие: $500 – $1,500/год\n• Питание и проживание: ~$200/месяц\n\n🏅 Стипендия CSC может покрыть обучение и общежитие полностью!",
      timeline: "🗓️ **График подачи документов:**\n\n• **Январь–Март** – Лучшее время для подготовки\n• **Март–Апрель** – Подача документов\n• **Май–Июнь** – Получение приглашения\n• **Июль–Август** – Оформление визы\n• **Сентябрь** – Начало учёбы\n\n⚡ Чем раньше начнёте — тем больше вариантов стипендий!",
      visa: "🛂 **Оформление визы:**\n\n1. Получите форму **JW201/202** от университета\n2. Мы помогаем с заявкой на **визу X1**\n3. Сбор документов (приглашение, медсправка и др.)\n4. Подача в посольство Китая в Ташкенте\n5. Обработка: ~7–10 рабочих дней\n\n✅ Мы сопровождаем вас на каждом этапе!",
      housing: "🏠 **Проживание:**\n\nВсе наши партнёрские университеты предлагают:\n\n• **Кампусное общежитие** – Безопасно, чисто, доступно ($50–$150/мес)\n• **Квартиры вне кампуса** – Больше свободы (~$200–$400/мес)\n• **Квартиры с соседями** – Популярно среди студентов\n\n🛡️ Помогаем заселиться до приезда!",
      process: "🔄 **Процесс поступления:**\n\n1️⃣ Бесплатная консультация DragonPath\n2️⃣ Выбор подходящих университетов\n3️⃣ Подготовка и перевод документов\n4️⃣ Подача заявки\n5️⃣ Получение приглашения\n6️⃣ Оформление визы\n7️⃣ Перелёт в Китай и начало обучения!\n\n⏱️ Общее время: 2–4 месяца",
      telegram: "📲 **Наш Telegram-бот (CSCA):**\n\nНаш бот на базе ИИ помогает:\n\n• 📝 Пройти **пробные тесты HSK**\n• 📚 Получить учебные материалы\n• 🔔 Напоминания о дедлайнах\n• 💬 Общение с консультантами\n• 🗺️ Навигация по кампусам\n\n👉 Начать: @china_connect_bot",
    },
    back: "⬅️ К вопросам",
    askMore: "❓ Задать другой вопрос",
  },

  uzbek: {
    greeting: "👋 Salom! Men DragonBot — Xitoyda o'qish bo'yicha sizning yo'lboshchingizman. Boshlash uchun savol tanlang!",
    placeholder: "Quyidan savol tanlang...",
    quickReplies: [
      { id: 'docs', label: "📄 Qanday hujjatlar kerak?" },
      { id: 'grant', label: "🏅 Grant olish mumkinmi?" },
      { id: 'chinese', label: "🈵 Xitoy tilini bilish kerakmi?" },
      { id: 'office', label: "🏢 Ofis mavjudmi?" },
      { id: 'cost', label: "💰 Narxi qancha?" },
      { id: 'timeline', label: "🗓️ Qachon ariza topshirish kerak?" },
      { id: 'visa', label: "🛂 Viza qanday rasmiylashtiriladi?" },
      { id: 'housing', label: "🏠 Qayerda yashaymen?" },
      { id: 'process', label: "🔄 Qabul jarayoni qanday?" },
      { id: 'telegram', label: "📲 Telegram bot qanday yordam beradi?" },
    ],
    answers: {
      docs: "📄 **Kerakli hujjatlar:**\n\n• Pasport (kamida 2 yil amal qiladi)\n• Maktab diplomi va transkript\n• Tibbiy ma'lumotnoma va OIV testi\n• 2 ta pasport fotosuratlari\n• Ariza shakli\n• Moliyaviy kafolat xati\n\n✅ Biz BARCHA hujjatlarni tayyorlash va tarjima qilishda yordam beramiz!",
      grant: "🏅 **Stipendiya va grantlar:**\n\nHa! Bir nechta imkoniyatlar mavjud:\n\n• **CSC Stipendiyasi** – To'liq davlat stipendiyasi: o'qish + yotoqxona\n• **Viloyat stipendiyalari** – Muayyan viloyatlar tomonidan\n• **Universitet stipendiyalari** – Qisman o'qish to'lovi\n• **DragonPath chegirmasi** – Erta abituriyentlar uchun\n\n💡 Jamoamiz siz uchun bepul baholaydi!",
      chinese: "🈵 **Xitoy tili talabi:**\n\nXavotir olmang! Ko'pgina hamkor universitetlarimiz taklif qiladi:\n\n• **1 yillik xitoy tili tayyorlov kurslari**\n• Ba'zi fakultetlarda ingliz tilida o'qitish\n• HSK tayyorlov darslari\n\nBoshlash uchun xitoycha bilish shart emas. Sizi bosqichma-bosqich tayyorlaymiz 🎓",
      office: "🏢 **Bizning ofis:**\n\nHa, bizda jismoniy ofis mavjud!\n\n📍 **Manzil:** Toshkent shahri, Mirobod tumani, Biznes markazi\n\n🕐 **Ish vaqti:** Dush–Shan, 9:00 – 18:00\n\n📞 Telegram va WhatsApp orqali istalgan vaqt bog'laning!",
      cost: "💰 **Xarajatlar:**\n\nMaslahat — **BEPUL** 🎉\n\nXitoydagi yillik o'rtacha xarajatlar:\n• O'qish: $2,000 – $5,000/yil\n• Yotoqxona: $500 – $1,500/yil\n• Oziq-ovqat va turmush: ~$200/oy\n\n🏅 CSC stipendiyasi o'qish va yotoqxonani to'liq qoplashi mumkin!",
      timeline: "🗓️ **Hujjat topshirish grafigi:**\n\n• **Yanvar–Mart** – Tayyorlash uchun eng yaxshi vaqt\n• **Mart–Aprel** – Arizalar topshiriladi\n• **May–Iyun** – Qabul xatlari olinadi\n• **Iyul–Avgust** – Viza rasmiylashtiriladi\n• **Sentabr** – O'qish boshlanadi\n\n⚡ Qancha erta boshlasangiz, shuncha ko'p stipendiya tanlovsangiz!",
      visa: "🛂 **Viza jarayoni:**\n\n1. Universitetdan **JW201/202 shakli** oling\n2. **X1 talaba vizasi** arizasida yordam beramiz\n3. Hujjatlar to'plami (taklif xati, tibbiy va boshqalar)\n4. Toshkentdagi Xitoy elchixonasiga topshirish\n5. Ko'rib chiqish: ~7–10 ish kuni\n\n✅ Har bir qadamda sizni boshqaramiz!",
      housing: "🏠 **Turar joy:**\n\nBarcha hamkor universitetlarimiz taklif qiladi:\n\n• **Kampus yotoqxonalari** – Xavfsiz, toza, arzon ($50–$150/oy)\n• **Kampusdan tashqari kvartiralar** – Ko'proq mustaqillik (~$200–$400/oy)\n• **Shared kvartiralar** – Talabalar orasida mashhur\n\n🛡️ Kelishdan oldin turar joy topishda yordam beramiz!",
      process: "🔄 **Qabul jarayoni:**\n\n1️⃣ DragonPath bilan bepul maslahat\n2️⃣ Mos universitetlarni tanlash\n3️⃣ Hujjatlarni tayyorlash va tarjima qilish\n4️⃣ Ariza topshirish\n5️⃣ Qabul xati olish\n6️⃣ Viza rasmiylashtirish\n7️⃣ Xitoyga uchish va o'qishni boshlash!\n\n⏱️ Umumiy vaqt: 2–4 oy",
      telegram: "📲 **Telegram botimiz (CSCA):**\n\nSun'iy intellektli botimiz yordam beradi:\n\n• 📝 **Sinov HSK testlari**\n• 📚 O'quv materiallariga kirish\n• 🔔 Muddatlar haqida eslatmalar\n• 💬 Maslahatchilar bilan muloqot\n• 🗺️ Kampus navigatsiyasi\n\n👉 Boshlang: @china_connect_bot",
    },
    back: "⬅️ Savollarga qaytish",
    askMore: "❓ Boshqa savol berish",
  }
};

function formatMessage(text) {
  return text
    .split('\n')
    .map((line, i) => {
      const boldLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return `<span key="${i}">${boldLine}</span>`;
    })
    .join('\n');
}

const Chatbot = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showQuestions, setShowQuestions] = useState(true);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef(null);

  const lang = chatData[language] || chatData.english;

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setMessages([{ type: 'bot', text: lang.greeting, id: Date.now() }]);
    }
  }, [isOpen, hasOpened, lang.greeting]);

  // Reset when language changes
  useEffect(() => {
    if (hasOpened) {
      setMessages([{ type: 'bot', text: lang.greeting, id: Date.now() }]);
      setShowQuestions(true);
    }
    // eslint-disable-next-line
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleQuestionClick = (item) => {
    setShowQuestions(false);
    const userMsg = { type: 'user', text: item.label, id: Date.now() };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const answer = lang.answers[item.id] || "I don't have an answer for that yet. Please contact us directly!";
      setMessages(prev => [...prev, { type: 'bot', text: answer, id: Date.now() + 1 }]);
    }, 600);
  };

  const handleAskMore = () => {
    setShowQuestions(true);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat assistant"
        id="chatbot-toggle-btn"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            <span className="chatbot-pulse" />
          </>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`} role="dialog" aria-label="Chat assistant">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">🐉</div>
          <div className="chatbot-header-info">
            <h4>DragonBot</h4>
            <span className="chatbot-status">
              <span className="status-dot" />
              Online · Answers instantly
            </span>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-message ${msg.type}`}>
              {msg.type === 'bot' && <div className="bot-icon">🐉</div>}
              <div
                className="message-bubble"
                dangerouslySetInnerHTML={{
                  __html: formatMessage(msg.text)
                    .split('\n')
                    .map(line => line || '<br/>')
                    .join('<br/>')
                }}
              />
            </div>
          ))}

          {/* Quick reply buttons */}
          {showQuestions && (
            <div className="quick-replies">
              {lang.quickReplies.map((item) => (
                <button
                  key={item.id}
                  className="quick-reply-btn"
                  onClick={() => handleQuestionClick(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Ask more button */}
          {!showQuestions && messages.length > 1 && (
            <div className="ask-more-wrap">
              <button className="ask-more-btn" onClick={handleAskMore}>
                {lang.askMore}
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div className="chatbot-footer">
          <span>🐉 DragonPath · <a href="https://t.me/china_connect_bot" target="_blank" rel="noreferrer">@china_connect_bot</a></span>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
