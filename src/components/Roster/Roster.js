// src/components/Roster/Roster.js
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './Roster.css';

const Roster = () => {
  const { language } = useLanguage();

  const translations = {
    english: {
      rosterLabel: "PARTNER ROSTER",
      rosterTitle: "DIRECT UNIVERSITY PARTNERSHIPS",
      intakeLabel: "INTAKE SCHEDULE",
      intakeTitle: "UPCOMING ADMISSION CYCLES",
      tableHeaders: { uni: "UNIVERSITY", intake: "INTAKE", status: "STATUS" },
      statusOpen: "OPEN FOR APPLICATIONS",
      partners: [
        { num: "01", name: "Jiangsu Normal University", location: "Xuzhou", intake: "SEPT 2026", status: "OPEN" },
        { num: "02", name: "Hainan Medical University", location: "Haikou", intake: "SEPT 2026", status: "OPEN" },
        { num: "03", name: "Hubei University", location: "Wuhan", intake: "OCT 2026", status: "OPEN" },
        { num: "04", name: "Hezhou University", location: "Hezhou", intake: "OCT 2026", status: "OPEN" },
        { num: "05", name: "Jiangsu Food & Pharmaceutical College", location: "Huaian", intake: "SEPT 2026", status: "OPEN" },
        { num: "06", name: "Sichuan Tourism University", location: "Chengdu", intake: "SEPT 2026", status: "OPEN" },
        { num: "07", name: "Guilin University of Electronic Technology", location: "Guilin", intake: "SEPT 2026", status: "OPEN" }
      ]
    },
    russian: {
      rosterLabel: "СПИСОК ПАРТНЕРОВ",
      rosterTitle: "ПРЯМЫЕ ПАРТНЕРСКИЕ ВУЗЫ",
      intakeLabel: "РАСПИСАНИЕ НАБОРА",
      intakeTitle: "ПРЕДСТОЯЩИЕ ЦИКЛЫ ПРИЕМА",
      tableHeaders: { uni: "УНИВЕРСИТЕТ", intake: "НАБОР", status: "СТАТУС" },
      statusOpen: "ОТКРЫТ ПРИЕМ",
      partners: [
        { num: "01", name: "Педагогический университет Цзянсу", location: "Сюйчжоу", intake: "СЕН 2026", status: "ОТКРЫТО" },
        { num: "02", name: "Медицинский университет Хайнаня", location: "Хайкоу", intake: "СЕН 2026", status: "ОТКРЫТО" },
        { num: "03", name: "Университет Хубэй", location: "Ухань", intake: "ОКТ 2026", status: "ОТКРЫТО" },
        { num: "04", name: "Университет Хэчжоу", location: "Хэчжоу", intake: "ОКТ 2026", status: "ОТКРЫТО" },
        { num: "05", name: "Колледж пищевых наук Цзянсу", location: "Хуайань", intake: "СЕН 2026", status: "ОТКРЫТО" },
        { num: "06", name: "Сычуаньский университет туризма", location: "Чэнду", intake: "СЕН 2026", status: "ОТКРЫТО" },
        { num: "07", name: "Гуйлиньский электронный университет", location: "Гуйлинь", intake: "СЕН 2026", status: "ОТКРЫТО" }
      ]
    },
    uzbek: {
      rosterLabel: "HAMKORLAR RO'YXATI",
      rosterTitle: "TO'G'RIDAN-TO'G'RI OTM HAMKORLIGI",
      intakeLabel: "QABUL JADVALI",
      intakeTitle: "KUTILAYOTGAN QABUL BOSQICHLARI",
      tableHeaders: { uni: "UNIVERSITET", intake: "QABUL", status: "HOLAT" },
      statusOpen: "QABUL OCHIQ",
      partners: [
        { num: "01", name: "Jiangsu Normal Universiteti", location: "Xuzhou", intake: "SENT 2026", status: "OCHIQ" },
        { num: "02", name: "Hainan Tibbiyot Universiteti", location: "Haikou", intake: "SENT 2026", status: "OCHIQ" },
        { num: "03", name: "Hubei Universiteti", location: "Wuhan", intake: "OKT 2026", status: "OCHIQ" },
        { num: "04", name: "Hezhou Universiteti", location: "Hezhou", intake: "OKT 2026", status: "OCHIQ" },
        { num: "05", name: "Jiangsu Oziq-ovqat va Farmatsevtika Kolleji", location: "Huaian", intake: "SENT 2026", status: "OCHIQ" },
        { num: "06", name: "Sichuan Turizm Universiteti", location: "Chengdu", intake: "SENT 2026", status: "OCHIQ" },
        { num: "07", name: "Guilin Elektron Texnologiyalar Universiteti", location: "Guilin", intake: "SENT 2026", status: "OCHIQ" }
      ]
    }
  };

  const t = translations[language] || translations.english;

  return (
    <section id="roster" className="roster-section">
      <div className="container roster-container">
        {/* Roster Header */}
        <div className="roster-header">
          <span className="label-uppercase text-crimson">{t.rosterLabel}</span>
          <h2 className="roster-title">{t.rosterTitle}</h2>
        </div>

        {/* Hairline-Ruled Roster Catalogue List */}
        <div className="roster-list">
          {t.partners.map((partner) => (
            <div key={partner.num} className="roster-row">
              <div className="roster-row-left">
                <span className="roster-uni-name">{partner.name}</span>
                <span className="label-uppercase roster-loc">{partner.location}</span>
              </div>
              <div className="roster-dots-line" />
              <span className="label-uppercase roster-index-num">{partner.num}</span>
            </div>
          ))}
        </div>

        {/* Intake Schedule Table */}
        <div className="intake-wrapper">
          <div className="roster-header">
            <span className="label-uppercase text-gold">{t.intakeLabel}</span>
            <h3 className="roster-title">{t.intakeTitle}</h3>
          </div>

          <div className="intake-table">
            <div className="intake-table-header">
              <span>{t.tableHeaders.uni}</span>
              <span>{t.tableHeaders.intake}</span>
              <span>{t.tableHeaders.status}</span>
            </div>

            {t.partners.map((p) => (
              <div key={p.num} className="intake-table-row">
                <span className="intake-uni">{p.name}</span>
                <span className="intake-date">{p.intake}</span>
                <span className="intake-badge">
                  <span className="status-dot" /> {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hairline-divider" />
    </section>
  );
};

export default Roster;
