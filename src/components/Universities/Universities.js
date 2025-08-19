// src/components/Universities/Universities.js
import React from 'react';
import './Universities.css';

const Universities = () => {
  const universities = [
    {
      name: 'Tsinghua University',
      location: 'Beijing',
      ranking: '#1 in China',
      programs: 'Engineering, Computer Science, Business',
      logo: '🏛️'
    },
    {
      name: 'Peking University',
      location: 'Beijing',
      ranking: '#2 in China',
      programs: 'Medicine, Law, Humanities',
      logo: '🎓'
    },
    {
      name: 'Fudan University',
      location: 'Shanghai',
      ranking: '#3 in China',
      programs: 'Business, Medicine, Social Sciences',
      logo: '🏫'
    },
    {
      name: 'Shanghai Jiao Tong University',
      location: 'Shanghai',
      ranking: '#4 in China',
      programs: 'Engineering, Medicine, Business',
      logo: '🔬'
    },
    {
      name: 'Zhejiang University',
      location: 'Hangzhou',
      ranking: '#5 in China',
      programs: 'Engineering, Computer Science, Agriculture',
      logo: '🌉'
    },
    {
      name: 'Nanjing University',
      location: 'Nanjing',
      ranking: '#6 in China',
      programs: 'Science, Humanities, Social Sciences',
      logo: '📚'
    },
    {
      name: 'University of Science and Technology of China',
      location: 'Hefei',
      ranking: '#7 in China',
      programs: 'Science, Engineering, Technology',
      logo: '🔭'
    },
    {
      name: 'Sun Yat-sen University',
      location: 'Guangzhou',
      ranking: '#8 in China',
      programs: 'Medicine, Business, Humanities',
      logo: '🌅'
    },
    {
      name: 'Wuhan University',
      location: 'Wuhan',
      ranking: '#9 in China',
      programs: 'Medicine, Law, Engineering',
      logo: '🌸'
    },
    {
      name: 'Harbin Institute of Technology',
      location: 'Harbin',
      ranking: '#10 in China',
      programs: 'Engineering, Aerospace, Computer Science',
      logo: '❄️'
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
                <button className="btn-outline">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;