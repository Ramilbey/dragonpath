// src/components/Footer/Footer.js
import React from "react";
import "./Footer.css";

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Logo and Social Links */}
          <div className="footer-column">
            <div className="logo">
              <i className="fas fa-graduation-cap"></i>
              <h3>DragonPath</h3>
            </div>
            <p>
              Your trusted partner for studying in China. We provide
              comprehensive support services to help students from Uzbekistan
              achieve their academic dreams.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/dragon.path"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/dragon.path/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://t.me/pilgrimage_Muslim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://wechat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-weixin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection("home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection("services")}>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#universities"
                  onClick={() => scrollToSection("universities")}
                >
                  Universities
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About Us
                </a>
              </li>
              <li>
               
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="/">University Selection</a></li>
              <li><a href="/">Application Assistance</a></li>
              <li><a href="/">Visa Support</a></li>
              <li><a href="/">Scholarship Guidance</a></li>
              <li><a href="/">Accommodation Assistance</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="footer-column">
            <h3>Newsletter</h3>
            <p>
              Subscribe for updates on university deadlines, scholarships, and
              educational events.
            </p>
            <form className="footer-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit" className="btn">
                Subscribe
              </button>
            </form>
          </div> */}

        </div>

        <div className="copyright">
          <p>
            &copy; 2023 DragonPath Education. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
