// src/components/Universities/Universities.js
import React, { useState } from 'react';
import './Universities.css';

const Universities = () => {
  const [selectedUni, setSelectedUni] = useState(null);

  const universities = [
    {
      name: 'Guilin University of Electronic Technology (GUET)',
      location: 'Guilin',
      ranking: 'Partner University',
      programs: 'Engineering, Computer Science, Business',
      logo: '🏛️',
      details: {
        tuition: '8500 CNY/year',
        accommodation: '2000–8000 CNY/year (depending on room type)',
        registration: '700 CNY/person',
        medical: '450–500 CNY (based on conditions)',
        textbooks: '400–500 CNY',
        insurance: '800 CNY/year',
        visa: '400 CNY/year',
        documents: [
          'Valid Passport (till June 2026 or later)',
          'Two Photos',
          'Highest diploma & transcript',
          'Foreigner Physical Examination Form',
          'Non-Criminal Record',
          'English proficiency certificate (IELTS/TOEFL/Duolingo)',
          'GUET Application Form'
        ],
        ageLimit: '18–25 years old',
        deadline: 'July 30, 2025',
        intake: 'September 2025',
        dorm: '1–4 bed options'
      }
    },
    {
      name: 'Hubei University',
      location: 'Hubei',
      ranking: 'Partner University',
      programs: 'Science, Engineering, Humanities',
      logo: '🎓',
      extra: 'Hubei University is one of the oldest in central China and offers diverse cultural exchange programs.'
    },
    {
      name: 'Hezhou University',
      location: 'Hezhou',
      ranking: 'Partner University',
      programs: 'Arts, Education, Management',
      logo: '🏫',
      extra: 'Hezhou University focuses on applied sciences and regional development projects.'
    },
    {
      name: 'Jiangsu Food & Pharmaceutical College',
      location: 'Jiangsu',
      ranking: 'Partner University',
      programs: 'Food Science, Pharmacy, Biotechnology',
      logo: '🔬',
      extra: 'Specializes in pharmaceutical research and food technology innovation.'
    },
    {
      name: 'Jiangsu Normal University (Preparatory Program)',
      location: 'Jiangsu',
      ranking: 'Partner University',
      programs: 'Preparatory, Chinese Language, Foundation Studies',
      logo: '📘',
      extra: 'JSNU preparatory program is designed for international students to prepare for bachelor’s studies in China.'
    },
    {
      name: 'Hainan Medical University',
      location: 'Haikou',
      ranking: 'Partner University',
      programs: 'Medicine, Nursing, Pharmacy',
      logo: '🏥',
      extra: 'Hainan Medical University is famous for its tropical medicine and healthcare training.'
    },
    {
      name: 'Sichuan Tourism University',
      location: 'Sichuan',
      ranking: 'Partner University',
      programs: 'Tourism, Hospitality, Business',
      logo: '🌄',
      extra: 'STU focuses on tourism management and hospitality, with practical training in Sichuan’s cultural hotspots.'
    },
    {
      name: 'Guangxi International Economics College (GZIEC)',
      location: 'Guangxi',
      ranking: 'Partner University',
      programs: 'Economics, Business, International Trade',
      logo: '🌏',
      extra: 'GZIEC emphasizes international trade and cross-border business education.'
    }
  ];

  return (
    <section id="universities" className="universities">
      <div className="container">
        <div className="section-title">
          <h2>Partner Universities</h2>
          <p>We have partnerships with top universities across China</p>
        </div>
        <div className="universities-grid">
          {universities.map((uni, index) => (
            <div key={index} className="university-card">
              <div className="uni-logo">
                <span>{uni.logo}</span>
              </div>
              <div className="uni-content">
                <h3>{uni.name}</h3>
                <p className="uni-location"><i className="fas fa-map-marker-alt"></i> {uni.location}</p>
                <p className="uni-ranking">{uni.ranking}</p>
                <p className="uni-programs">{uni.programs}</p>
                <button 
                  className="btn-outline" 
                  onClick={() => setSelectedUni(uni)}
                >
                  Learn More
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
      <span className="uni-modal-close" onClick={() => setSelectedUni(null)}>&times;</span>
      <h2>{selectedUni.name}</h2>
      <p><strong>Location:</strong> {selectedUni.location}</p>
      <p><strong>Ranking:</strong> {selectedUni.ranking}</p>
      <p><strong>Programs:</strong> {selectedUni.programs}</p>

      {selectedUni.details && (
        <div className="uni-details">
          <h3>Fees</h3>
          <ul>
            <li><strong>Tuition:</strong> {selectedUni.details.tuition}</li>
            <li><strong>Accommodation:</strong> {selectedUni.details.accommodation}</li>
            <li><strong>Registration:</strong> {selectedUni.details.registration}</li>
            <li><strong>Medical Check-up:</strong> {selectedUni.details.medical}</li>
            <li><strong>Textbooks:</strong> {selectedUni.details.textbooks}</li>
            <li><strong>Insurance:</strong> {selectedUni.details.insurance}</li>
            <li><strong>Visa Extension:</strong> {selectedUni.details.visa}</li>
          </ul>

          <h3>Documents Required</h3>
          <ul>
            {selectedUni.details.documents.map((doc, i) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>

          <h3>Other Information</h3>
          <p><strong>Age Limit:</strong> {selectedUni.details.ageLimit}</p>
          <p><strong>Application Deadline:</strong> {selectedUni.details.deadline}</p>
          <p><strong>Intake:</strong> {selectedUni.details.intake}</p>
          <p><strong>Dormitory:</strong> {selectedUni.details.dorm}</p>
        </div>
      )}
    </div>
  </div>
)}

    </section>
  );
};

export default Universities;
