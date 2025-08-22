// src/components/Universities/Universities.js
import React, { useState } from "react";
import "./Universities.css";

const Universities = () => {
  const [selectedUni, setSelectedUni] = useState(null);

  const universities = [
    {
      name: "Jiangsu Normal University",
      location: "Xuzhou, Jiangsu",
      ranking: "Partner University",
      programs: "One Year Preparatory Program",
      logo: "🏛️",
      details: {
        tuition: "15000 CNY/Year",
        accommodation: "1500 CNY/Year (Quad) | 3000 CNY/Year (Double) | 6000 CNY/Year (Single)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "400-600 CNY",
        applicationFee: "400 CNY",
        documents: [
          "Passport",
          "Photo",
          "Highest Educational Transcript and Certificate",
          "Medical Check up",
          "English Proficiency Certificate",
          "Non-Criminal Record",
          "Resume",
          "Bank statement"
        ],
        ageLimit: "18–30 years old",
        deadline: "August 10, 2025",
        intake: "September 2025",
        note: "University will arrange an interview.",
        highlights: [
          "Personalized Academic Counseling",
          "Access to 10+ partner universities (e.g., Beijing Institute of Technology, Hohai University)",
          "Admission & Scholarship Advantages",
          "Small-class instruction and on-campus HSK testing"
        ]
      }
    },
    {
      name: "Hainan Medical University",
      location: "Haikou City, Hainan Province",
      ranking: "Medical University",
      programs: "Clinical Medicine, Traditional Chinese Medicine, Nursing, Social Medicine and Health Administration (Taught in English)",
      logo: "🏥",
      details: {
        tuition: "20500 CNY/Year",
        accommodation: "2100 CNY/Year (4 beds) | 2800 CNY/Year (3 beds)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400 CNY",
        applicationFee: "400 CNY",
        documents: [
          "Passport",
          "Photo",
          "Highest diploma Certificate and Transcript",
          "English Proficiency Certificate",
          "Health Check Up",
          "Non Criminal Record",
          "Bank Statement (at least 5000$)",
          "Application Form"
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
      logo: "🎓",
      details: {
        tuition: "10000 CNY/Year (Includes Tuition & Accommodation)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "300 CNY (1st Year only)",
        applicationFee: "400 CNY",
        documents: [
          "Passport",
          "Photo",
          "Higher Secondary School Certificate & Transcript",
          "English Proficiency Certificate (e.g., IELTS 6.0)",
          "Physical Examination Form for Foreigners",
          "Non Criminal Record",
          "Bank Statement (balance > 5000$)",
          "Application Form or CV",
          "Study Plan (1000 words)"
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
      logo: "🌐",
      details: {
        tuition: "11000 CNY/Year (Liberal Arts) | 13000 CNY/Year (Science/Engineering)",
        accommodation: "2000-3000 CNY/Month (4-6 students)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400-600 CNY",
        documents: [
          "Passport",
          "Picture",
          "Highest degree Certificate and Transcript",
          "Health Check Up",
          "English Proficiency Certificate",
          "Non Criminal Record / Police Clearance",
          "Bank Statement",
          "Application Form"
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
      logo: "🔬",
      details: {
        tuition: "Scholarship: FREE | Original: 4700-6200 CNY/Year",
        accommodation: "1200 CNY/Year (2 beds room)",
        insurance: "600 CNY/Year",
        books: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "450 CNY",
        deposit: "2000 CNY (After pre-admission)",
        documents: [
          "Passport",
          "Picture",
          "Higher Secondary School / Grade 12th / A Level / High School Certificate and Transcript",
          "Health Check Up",
          "English Proficiency Certificate",
          "Non Criminal Record / Police Clearance",
          "Bank Statement",
          "Video of self Introduction",
          "Application Form"
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
      name: "Hezhou University",
      location: "Hezhou City, Guangxi Province",
      ranking: "University",
      programs: "Chinese Language Program (One Semester/One Year)",
      logo: "📚",
      details: {
        tuition: "5000 CNY/Semester | 10000 CNY/Year",
        accommodation: "2000-3000 CNY/Month (4-6 students)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "400-600 CNY",
        documents: [
          "Passport",
          "Picture",
          "Highest degree Certificate and Transcript",
          "Health Check Up",
          "English Proficiency Certificate",
          "Non Criminal Record / Police Clearance",
          "Bank Statement",
          "Application Form"
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
      logo: "💬",
      details: {
        tuition: "13800 CNY/Year",
        accommodation: "5000 CNY/Year (Double Room)",
        insurance: "800 CNY/Year",
        visa: "800 CNY/Year",
        medicalCheckup: "400-600 CNY",
        applicationFee: "500 CNY",
        documents: [
          "Passport",
          "Photo",
          "Highest Educational Transcript and Certificate",
          "Medical Check up",
          "English Proficiency Certificate",
          "Non-Criminal Record",
          "Resume",
          "Bank statement"
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
      logo: "🐼",
      details: {
        feesAfterScholarship: "6200 CNY/Year (Tuition & Accommodation)",
        insurance: "800 CNY/Year",
        visa: "400 CNY/Year",
        medicalCheckup: "500 CNY (1st Year only)",
        documents: [
          "Passport",
          "Picture",
          "Higher Secondary School / Grade 12th / A Level / High School Certificate and Transcript",
          "Health Check Up",
          "Non Criminal Record / Police Clearance",
          "Application Form"
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
                <p className="uni-location">
                  <i className="fas fa-map-marker-alt"></i> {uni.location}
                </p>
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
            <span
              className="uni-modal-close"
              onClick={() => setSelectedUni(null)}
            >
              &times;
            </span>
            <h2>{selectedUni.name}</h2>
            <p>
              <strong>Location:</strong> {selectedUni.location}
            </p>
            <p>
              <strong>Ranking:</strong> {selectedUni.ranking}
            </p>
            <p>
              <strong>Programs:</strong> {selectedUni.programs}
            </p>

            {selectedUni.details && (
              <div className="uni-details">
                <h3>Fees</h3>
                <ul>
                  <li>
                    <strong>Tuition:</strong> {selectedUni.details.tuition}
                  </li>
                  <li>
                    <strong>Accommodation:</strong>{" "}
                    {selectedUni.details.accommodation}
                  </li>
                  <li>
                    <strong>Registration:</strong>{" "}
                    {selectedUni.details.registration}
                  </li>
                  <li>
                    <strong>Medical Check-up:</strong>{" "}
                    {selectedUni.details.medical}
                  </li>
                  <li>
                    <strong>Textbooks:</strong> {selectedUni.details.textbooks}
                  </li>
                  <li>
                    <strong>Insurance:</strong> {selectedUni.details.insurance}
                  </li>
                  <li>
                    <strong>Visa Extension:</strong> {selectedUni.details.visa}
                  </li>
                </ul>

                <h3>Documents Required</h3>
                <ul>
                  {selectedUni.details.documents.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>

                <h3>Other Information</h3>
                <p>
                  <strong>Age Limit:</strong> {selectedUni.details.ageLimit}
                </p>
                <p>
                  <strong>Application Deadline:</strong>{" "}
                  {selectedUni.details.deadline}
                </p>
                <p>
                  <strong>Intake:</strong> {selectedUni.details.intake}
                </p>
                <p>
                  <strong>Dormitory:</strong> {selectedUni.details.dorm}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Universities;
