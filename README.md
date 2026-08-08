# DragonPath Agency 🐉

**Cinematic Scroll-Driven Portal & Editorial Education Platform**

[![Netlify Status](https://api.netlify.com/api/v1/badges/bfe13063-8224-4ba1-b445-5f8cc597f53f/deploy-status)](https://app.netlify.com/sites/dragonpath/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

DragonPath is a premium, scroll-driven editorial platform designed to connect students from **Uzbekistan and Central Asia** with premier universities across China. Built with React and GSAP, it translates creative agency web design into an interactive storytelling experience.

**Live Site:** [dragonpath.netlify.app](https://dragonpath.netlify.app/)

---

## ✨ Key Features & Architecture

- **⛩️ GSAP "Portal" Hero**: 2.2vh scroll-bound stage where dual curtain panels open to reveal campus photography while the signature wordmark splits dynamically across screen edges.
- **📜 Pinned Journey Services**: Scroll-pinned 6-step journey guiding students from initial university selection to arrival and dorm check-in.
- **🃏 Throwable Card Deck Catalogue**: Physical interactive university card deck featuring pointer dragging, card throwing physics, keyboard controls (`ArrowLeft` / `ArrowRight`), and detailed admission modals.
- **📊 Editorial Statistics & Statement**: High-contrast typography layout featuring giant index markers (`01`), floating scroll-linked photographs, and large-format metrics.
- **🏛️ Partner Roster & Intake Schedule**: Hairline-ruled catalogue listing partner institutions and upcoming admission cycles.
- **🌍 Trilingual Localization**: Instant switching between **English**, **Russian**, and **Uzbek** across all content and modal components.
- **🌗 Editorial Dark/Light System**: Dark mode ground (`#080C18`), off-white typography (`#EDE7DC`), and restrained Crimson (`#C41E3A`) / Gold (`#F59E0B`) accents.

---

## 🛠 Tech Stack

- **Core**: React 19 / HTML5 / CSS3 (Custom CSS Variables Design System)
- **Animation Engine**: GSAP 3.12.5 & ScrollTrigger
- **Localization**: React Context API (`LanguageContext`)
- **Theme Engine**: React Context API (`ThemeContext` with `localStorage` persistence)
- **Typography**: Plus Jakarta Sans & Inter (Google Fonts)
- **Deployment**: Netlify CI/CD

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ramilbey/dragonpath.git
   cd dragonpath
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   Open `http://localhost:3000` to view the application in your browser.

4. **Production Build**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```
dragonpath/
├── public/                # Static assets, logos, university photos, index.html
├── src/
│   ├── animations/        # Custom GSAP scroll engine & fallback math logic
│   ├── components/
│   │   ├── Header/        # Editorial glass bar, theme & language switches
│   │   ├── Hero/          # GSAP portal stage, splitting wordmark & curtain logic
│   │   ├── Statement/     # Outlined index statement & floating photograph
│   │   ├── Services/      # Pinned scroll-driven 6-step journey
│   │   ├── Universities/  # Physical throwable card deck & detail modals
│   │   ├── Roster/        # Partner catalogue & intake dates table
│   │   ├── About/         # Story paragraph & enormous typography statistics
│   │   ├── Testimonials/  # Vertical editorial student story sequence
│   │   ├── Footer/        # Final close CTA, bottom-cropped wordmark & footer
│   │   ├── Chatbot/       # Telegram integration widget
│   │   └── UI/            # Scroll progress indicators
│   ├── context/           # Language and Theme context providers
│   ├── hooks/             # Custom React hooks (analytics, scroll triggers)
│   ├── App.js             # Master layout assembly & section orchestration
│   ├── index.css          # Editorial minimal design system & css variables
│   └── App.css            # Base utilities & layout definitions
└── README.md
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact & Inquiries

- **Official Telegram Bot:** [@china_connect_bot](https://t.me/china_connect_bot)
- **Email:** [info@dragonpath.uz](mailto:info@dragonpath.uz)
- **Phone:** +86 130 2595 5119 / +998 87 190 5119
- **Office:** Tashkent, Mirobod District Business Center, Uzbekistan

*Built with ❤️ for future scholars.*
