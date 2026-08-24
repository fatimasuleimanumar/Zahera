# Zahera — SaaS Premium FemTech Platform

**Zahera** is an AI-powered reproductive health companion for Nigerian women — supporting every life stage from puberty through pregnancy to menopause, in 5 local languages (English, Nigerian Pidgin, Hausa, Yorùbá, and Igbo), engineered to work 100% offline.

---

## 🚀 Dual Architecture: React + Tailwind & Static Build

This repository is built with a dual architecture designed for both modern framework development and zero-dependency standalone execution:

### 1. Modern React + Vite + Tailwind CSS Architecture (`src/`)
* **Framework**: React (SPA with dynamic view routing)
* **Styling**: Tailwind CSS v4 design tokens + custom FemTech theme
* **Localization**: `LanguageContext` powering reactive 5-language switching with zero reload
* **Icons**: `lucide-react`
* **Components** in `src/components/`:
  - `Navbar.jsx`: Pink Ribbon SaaS navigation with 5-language switcher and pill CTAs
  - `HeroCluster.jsx`: 4-card hero cluster strictly matching Pink Ribbon reference designs
  - `MissionSplit.jsx`: Split narrative card with authentic Nigerian woman photo
  - `Pillars.jsx`: 3 pillar cards (Awareness, Community, Research)
  - `AIChatShowcase.jsx`: Live interactive chatbot simulator with prompt chips and audio demo
  - `StorySection.jsx`: Dual-photo foundation story
  - `CampaignsGrid.jsx`: 3 vertical cards for active pilot deployments (Kaduna, Kano, Lagos)
  - `QuoteBanner.jsx`: Inspirational quote banner
  - `MobileAppMockup.jsx`: 3D Holographic AI Coach Orb showcase
  - `CycleCalculator.jsx`: Period predictor and African fruit milestone slider
  - `WaitlistSection.jsx`: VIP pilot registration with confetti
  - `Footer.jsx`: Full footer with clinical disclaimer

### 2. Standalone Static Distribution (Root folder)
* Pre-built semantic HTML5, CSS3, and JavaScript ready to open immediately in any web browser without needing `npm install` or active build steps.

---

## 📁 Repository Structure

```
zahera-website/
├── package.json              # React + Vite + Tailwind dependencies
├── vite.config.js            # Vite configuration with React & Tailwind plugins
├── index.html                # Entry point & standalone home page
├── features.html             # Standalone features page
├── about.html                # Standalone about page
├── waitlist.html             # Standalone waitlist page
├── faq.html                  # Standalone FAQ page
├── contact.html              # Standalone contact page
├── privacy.html              # Standalone privacy policy
├── style.css                 # Standalone stylesheet
├── script.js                 # Standalone UI engine
├── translations.js           # Standalone translation dictionary
├── src/                      # Modern React + Tailwind codebase
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main React application
│   ├── index.css             # Tailwind v4 stylesheet
│   ├── context/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   └── translations.js
│   ├── components/           # Modular React components
│   └── pages/                # React page views
└── public/
    └── assets/               # All photos, avatars, and app screen mockups
```

---

## 💻 Running & Deploying

### Option A: Standalone Preview (Zero setup)
Open [index.html](file:///c:/Users/oyele/Downloads/zahera-website/index.html) in any browser, or run `node server.js` to view it on `http://localhost:8080`.

### Option B: React + Vite Development
```bash
npm install
npm run dev
```

### Option C: Production Deployment
Point your deployment host (**Vercel**, **Netlify**, or **GitHub Pages**) at this repository and assign your custom domain (`zahera.tech`).

---

© 2026 Teem Tech Solutions Ltd. All rights reserved.
