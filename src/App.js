// src/App.js
import React, { useState, useEffect, Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Statement from "./components/Statement/Statement";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Loading from "./components/Loading";
import ScrollProgress from "./components/UI/ScrollProgress";
import Chatbot from "./components/Chatbot/Chatbot";
import { useScrollReveal } from "./hooks/useScrollReveal";
import "./App.css";

// Lazy load remaining editorial sections
const Services = lazy(() => import("./components/Services/Services"));
const Universities = lazy(() => import("./components/Universities/Universities"));
const Roster = lazy(() => import("./components/Roster/Roster"));
const About = lazy(() => import("./components/About/About"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 500);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", "G-HF0CSGWKN2", {
        page_path: window.location.pathname,
      });
    }
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      if (typeof window.gtag !== "undefined") {
        window.gtag("event", "section_navigate", {
          event_category: "Navigation",
          event_label: `Scrolled to: ${sectionId}`,
          value: 1,
        });
      }
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "statement",
        "services",
        "universities",
        "roster",
        "about",
        "testimonials",
      ];
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const position = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= position &&
            scrollPosition < position + height
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          {loading ? (
            <Loading />
          ) : (
            <>
              <ScrollProgress />
              <Header
                scrollToSection={scrollToSection}
                activeSection={activeSection}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                isScrolled={isScrolled}
              />
              <Hero scrollToSection={scrollToSection} />
              <Statement />

              <Suspense fallback={<div className="section-loader">Loading...</div>}>
                <Services />
                <Universities />
                <Roster />
                <About />
                <Testimonials />
                <Footer scrollToSection={scrollToSection} />
              </Suspense>

              <Chatbot />

              <button
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <i className="fas fa-arrow-up" />
              </button>
            </>
          )}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
