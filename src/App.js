import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <Header 
        scrollToSection={scrollToSection} 
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

// Header Component
const Header = ({ scrollToSection, activeSection, menuOpen, setMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <i className="fas fa-graduation-cap"></i>
            <h1>Dragon<span>Path</span></h1>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</a>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a>
            <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''} onClick={() => scrollToSection('testimonials')}>Testimonials</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Hero Component
const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>Your Gateway to World-Class Education in China</h2>
          <p>We help students from Uzbekistan and Central Asia achieve their dreams of studying at top Chinese universities with comprehensive support and guidance.</p>
          <button className="btn" onClick={() => scrollToSection('contact')}>Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      icon: 'fas fa-school',
      title: 'University Selection',
      description: 'We help you choose the right university and program based on your academic background, interests, and career goals.'
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Application Assistance',
      description: 'Our experts guide you through the entire application process, ensuring all documents are properly prepared.'
    },
    {
      icon: 'fas fa-passport',
      title: 'Visa Support',
      description: 'We provide comprehensive visa application guidance, including documentation preparation and interview coaching.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We provide end-to-end support for your educational journey</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
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

// About Component
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Your trusted partner in educational journey to China</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Bridging Cultures Through Education</h3>
            <p>DragonPath was founded with a mission to strengthen educational ties between China and Uzbekistan. Our team consists of education experts who have studied in China themselves and understand the challenges international students face.</p>
            <p>With offices in Tashkent and Beijing, we provide localized support throughout your educational journey. We maintain strong relationships with top Chinese universities to ensure our students receive the best opportunities.</p>
            <button className="btn">Learn More</button>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-image"></i>
              <p>Office Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      initials: 'AZ',
      name: 'Azizbek Nurmatov',
      program: 'Computer Science, Tsinghua University',
      text: '"DragonPath helped me get into Tsinghua University for my master\'s degree. Their guidance through the application process was invaluable."'
    },
    {
      initials: 'ND',
      name: 'Nigora Davletova',
      program: 'Medicine, Peking University',
      text: '"The visa process was complicated, but the team walked me through every step. Now I\'m studying medicine and loving the experience!"'
    },
    {
      initials: 'SJ',
      name: 'Sanjar Jumanov',
      program: 'Business Administration, Fudan University',
      text: '"I received acceptance letters from three top universities with DragonPath\'s help. Their knowledge made all the difference."'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Success Stories</h2>
          <p>Hear from our students who achieved their dreams</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.initials}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.program}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch to start your educational journey</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3>Our Office</h3>
                <p>123 Education Street, Tashkent, Uzbekistan</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+998 71 123 4567</p>
                <p>+998 90 123 4567 (WhatsApp)</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3>Email</h3>
                <p>info@dragonpath.com</p>
                <p>applications@dragonpath.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Your Phone" 
                value={formData.phone}
                onChange={handleChange}
              />
              <select 
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Service</option>
                <option value="University Admission">University Admission</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Language Program">Language Program</option>
                <option value="Scholarship Guidance">Scholarship Guidance</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
              <textarea 
                name="message"
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>DragonPath Education</h3>
            <p>Your trusted partner for studying in China. We provide comprehensive support services to help students from Uzbekistan achieve their academic dreams.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#">University Selection</a></li>
              <li><a href="#">Application Assistance</a></li>
              <li><a href="#">Visa Support</a></li>
              <li><a href="#">Pre-departure Orientation</a></li>
              <li><a href="#">Scholarship Guidance</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe for updates on university deadlines and scholarships.</p>
            <form className="footer-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 DragonPath Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default App;