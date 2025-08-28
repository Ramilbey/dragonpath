// src/components/Footer/Footer.js
import React from "react";
import { useAnalytics } from "../../hooks/useAnalytics";
import "./Footer.css";

const Footer = ({ scrollToSection }) => {
  const { trackEvent } = useAnalytics();

  const handleSocialLinkClick = (platform) => {
    trackEvent("social_media_click", "Engagement", `Clicked ${platform} link`);
  };

  const handleFooterLinkClick = (linkName) => {
    trackEvent(
      "footer_link_click",
      "Navigation",
      `Clicked footer link: ${linkName}`
    );
  };

  const handleScrollToSection = (sectionId, sectionName) => {
    trackEvent(
      "footer_navigation",
      "Navigation",
      `Navigated to: ${sectionName}`
    );
    scrollToSection(sectionId);
  };

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
                href="https://www.facebook.com/ramil.qutlimuratov"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Facebook")}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/dragon.path/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Instagram")}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://t.me/@suhrob_sedali"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("Telegram")}
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="https://wa.me/60105071503"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialLinkClick("WhatsApp")}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevent opening "wechat.com"
                  navigator.clipboard.writeText("qutlimuratov5119");
                  alert("WeChat ID copied: qutlimuratov5119");
                  handleSocialLinkClick("WeChat");
                }}
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
                <a
                  href="#home"
                  onClick={() => handleScrollToSection("home", "Home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => handleScrollToSection("services", "Services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#universities"
                  onClick={() =>
                    handleScrollToSection("universities", "Universities")
                  }
                >
                  Universities
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => handleScrollToSection("about", "About Us")}
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li>
                <a
                  href="/"
                  onClick={() => handleFooterLinkClick("University Selection")}
                >
                  University Selection
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={() =>
                    handleFooterLinkClick("Application Assistance")
                  }
                >
                  Application Assistance
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={() => handleFooterLinkClick("Visa Support")}
                >
                  Visa Support
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={() => handleFooterLinkClick("Scholarship Guidance")}
                >
                  Scholarship Guidance
                </a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={() =>
                    handleFooterLinkClick("Accommodation Assistance")
                  }
                >
                  Accommodation Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <a
                  href="mailto:info@dragonpath.com"
                  onClick={() => handleFooterLinkClick("Email Contact")}
                >
                  info@dragonpath.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a
                  href="tel:+1234567890"
                  onClick={() => handleFooterLinkClick("Phone Contact")}
                >
                  +123 456 7890
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Beijing, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2023 DragonPath Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
