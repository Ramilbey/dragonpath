# DragonPath Agency 🐉

**Your Gateway to World-Class Education in China**

[![Netlify Status](https://api.netlify.com/api/v1/badges/bfe13063-8224-4ba1-b445-5f8cc597f53f/deploy-status)](https://app.netlify.com/sites/dragonpath/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

DragonPath is a premium web platform designed to help students from **Uzbekistan and Central Asia** explore and access educational opportunities in top Chinese universities. Built with a modern React architecture, it offers a seamless, multi-language experience with a high-end aesthetic.

**Live Demo:** [dragonpath.netlify.app](https://dragonpath.netlify.app/)

---

## ✨ Key Features

- **🌍 Multi-Language Support**: Fully localized in **English**, **Russian**, and **Uzbek** to serve a diverse student base.
- **🌗 Dark Mode**: Exquisite dark theme support that respects system preferences and persists user choice via local storage.
- **📱 Responsive Design**: A mobile-first approach ensuring a flawless experience across all devices, from desktops to smartphones.
- **🎓 University Directory**: A comprehensive list of partner universities with detailed information on programs, rankings, and campus life.
- **🚀 Performance Optimized**: Implements **lazy loading**, code splitting, and image optimization for lightning-fast load times.
- **🎨 Premium UI/UX**: Custom "Dragon" design system with glassmorphism, smooth animations, and interactive elements.
- **📊 Analytics Integrated**: Built-in Google Analytics hook for tracking user engagement and conversion goals.

## 🛠 Tech Stack

- **Frontend Framework**: React.js (v18)
- **Styling**: Vanilla CSS3 with CSS Variables (Theming support)
- **State Management**: React Context API
- **Navigation**: Single Page Application (SPA) with smooth scrolling
- **Icons**: FontAwesome 6
- **Deployment**: Netlify (CI/CD)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js installed on your system.
*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Ramilbey/dragonpath.git
    cd dragonpath
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```
    The application will open automatically at `http://localhost:3000`.

## 📂 Project Structure

```
dragonpath/
├── public/              # Static assets (images, icons, manifest)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header/      # Navigation, Language Switcher, Theme Toggle
│   │   ├── Hero/        # Landing section with scrolling background
│   │   ├── About/       # Company information and stats
│   │   ├── Services/    # Service offerings grid
│   │   ├── Universities/# Interactive university list/cards
│   │   ├── Testimonials/# Student success stories
│   │   ├── Footer/      # Site footer and links
│   │   └── Loading.js   # Custom loading screen
│   ├── context/         # React Context
│   │   ├── LanguageContext.js # Multi-language logic
│   │   └── ThemeContext.js    # Light/Dark mode logic
│   ├── hooks/           # Custom Hooks (e.g., useAnalytics)
│   ├── App.js           # Main application entry point
│   ├── App.css          # App-wide styles and typography
│   └── index.css        # Global variables and resets
└── README.md            # Project documentation
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## � License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

**Support Team** - [support@dragonpath.com](mailto:support@dragonpath.com)

Project Link: [https://github.com/Ramilbey/dragonpath](https://github.com/Ramilbey/dragonpath)

---
*Built with ❤️ for future scholars.*
