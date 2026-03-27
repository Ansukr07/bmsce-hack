# BMSIT&M — The Future of Institutional Digital Experience

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.3-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A premium, editorial-driven institutional website designed for **BMS Institute of Technology and Management**. This project redefines the traditional college portal with a high-end visual language, immersive 3D experiences, and a mobile-first philosophy optimized for the modern student.

---

## 🌟 Key Features

### 1. 3D Virtual Campus Tour (360° Immersion)
*   Experience the campus infrastructure from anywhere in the world.
*   Interactive panoramas of high-tech labs, libraries, and student hubs.
*   Seamless integration with a dedicated virtual tour sub-application.

### 2. High-End Editorial UI/UX
*   **Modern Aesthetics:** Designed with a curated "Placement-Inspired" theme (Background: `#fafafa`, Accent: `#FB6D39`).
*   **Micro-animations:** Powered by Framer Motion for smooth component transitions and hover effects.
*   **Typography:** Strategic use of Serif headlines for prestige and Sans-serif body for legibility.

### 3. Mobile-First Optimization
*   **Compact Navigation:** A custom 3-column mobile menu grid for fast link access.
*   **Scroll-Optimization:** Truncated and optimized sections to prevent vertical fatigue on smaller screens.
-   **Adaptive Components:** All modals, grids, and CTA sections are fine-tuned for touch responsiveness.

### 4. BMSIT Assistant (Intelligent Bot)
*   A persistent icon-only chatbot widget for mobile-optimized institutional support.
*   Fluid overlay system that doesn't obstruct navigation.

### 5. Dynamic Academic Hub
*   Interactive department cards with deep-dive modal system for "Programs" and "Department" templates.

### 6. Accessibility and Personalization
*   **Instant Language Translation:** A dedicated dropdown enables one-click language translation across the interface.
*   **Theme Preferences:** Built-in Light Mode and Dark Mode toggle for personalized viewing comfort.

---

## 🚀 Future Innovations & Ideas 

To further elevate the institutional digital footprint, we propose the following high-impact features:

*   **AI-Powered Student Journey Predictor:** An integrated dashboard that analyzes a student's academic progress and research interests to suggest personalized internship and placement opportunities.
*   **Blockchain-Verified Digital Credentials:** A secure, decentralized portal for students to instantly verify and share their transcripts, degree certificates, and achievement badges with global recruiters.
*   **AR Indoor Navigation (Wayfinding):** An Augmented Reality layer within the mobile site that helps visitors navigate the campus in real-time using their smartphone cameras.
*   **Live Research Collaboration Portal:** A "GitHub-style" interface for institutional research where students and faculty can co-author papers and track project milestones in real-time.
*   **Integrated Smart Fee System:** A frictionless payment gateway integrated with biometric authentication (on-device) for simplified fee and hostel management.

---

## 🛠️ Tech Stack (Frontend)

*   **Framework:** React 19 (Modern Hooks-only architecture)
*   **Build Tool:** Vite (For lightning-fast development and optimized production bundles)
*   **Styling:** Tailwind CSS 4.2 (Utility-first CSS with JIT engine)
*   **Animations:** Framer Motion (Declarative animations for complex UI states)
*   **Icons:** Lucide React (Clean, consistent SVG icon set)
*   **State Management:** React Context API & Modern State Hooks

---

## 💻 Setup Instructions

### Prerequisites
-   [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
-   [npm](https://www.npmjs.com/) (Normally comes with Node.js)

### Installation & Local Development

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Ansukr07/bmsce-hack.git
    cd bmsce-hack
    ```

2.  **Navigate to Client Directory**
    ```bash
    cd client
    ```

3.  **Install Dependencies**
    ```bash
    npm install
    ```

4.  **Start Development Server**
    ```bash
    npm run dev
    ```

5.  **Open in Browser**
    The app will normally be running at `http://localhost:5173/` (or check the terminal output for the correct port).

---

## 📁 Project Structure

```text
client/
├── src/
│   ├── assets/             # Media, images, and 3D videos
│   ├── components/         # Reusable UI components (Navbar, Footer, Hero, etc.)
│   ├── pages/              # Main route components (Home, About, CampusTour)
│   ├── App.jsx             # Main routing and app lifecycle
│   └── index.css           # Global design tokens and Tailwind imports
├── public/
│   └── college360/         # Standalone 3D Virtual Tour application
└── package.json            # Dependencies and build scripts
```

---
