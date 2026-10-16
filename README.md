# 🐾 PawPedia — Dog Breed Explorer & Gallery

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> *"Every Dog Has a Story."*

**PawPedia** is a modern, responsive web application for dog lovers and canine enthusiasts. Powered by the [Dog CEO REST API](https://dog.ceo/dog-api/), PawPedia allows users to discover over 90+ dog breeds, search and filter in real-time, view sub-breed classifications, and explore high-resolution photo galleries with on-demand image loading.

---
LIVE LINK =https://ps-9-pawpedia.vercel.app/

## 📸 Table of Contents

- [Features](#-features)
- [Screenshots & Pages](#-screenshots--pages)
- [Tech Stack](#-tech-stack)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Linting](#linting)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## ✨ Features

- **🏠 Interactive Home Page:**
  - Hero banner with quick navigation to breed directory.
  - Interactive "New Dog 🐕" button that fetches fresh random dog images on demand.
  - Smooth loading state indicator while images are retrieved.

- **🔍 Comprehensive Breed Directory (`/breeds`):**
  - Fetches and lists all registered dog breeds from the Dog CEO database.
  - Real-time client-side search filtering by breed name.
  - Sub-breed counter for each breed card.
  - Live result counter displaying matched vs. total breeds.

- **🐶 Detailed Breed Profile & Gallery (`/breeds/:breed`):**
  - Dynamic routing for individual dog breeds.
  - Sub-breed listing displayed as sleek pill badges.
  - High-resolution photo gallery showcasing 6 images upon loading.
  - **"Load 6 More Photos"** button to dynamically load and append additional breed images.

- **🧭 Clean Navigation & Error Handling:**
  - Responsive navigation bar with active route highlighting.
  - Custom themed 404 "Page Not Found" page with easy one-click redirect to home.

- **⚡ Modern Developer Experience:**
  - Instant Hot Module Replacement (HMR) powered by Vite.
  - Fast linting powered by Oxlint.

---

## 🖥️ Screenshots & Pages

| Page | Path | Description |
|---|---|---|
| **Home** | `/` | Hero section, random dog generator, and portal entry |
| **All Breeds** | `/breeds` | Complete searchable list of all dog breeds with sub-breed counts |
| **Breed Details** | `/breeds/:breed` | In-depth sub-breed tags, photo gallery, and lazy image loader |
| **404 Not Found** | `*` | Custom dog-themed fallback page for invalid routes |

---

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool & Dev Server:** [Vite 8](https://vitejs.dev/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Linting:** [Oxlint](https://oxc.rs/)
- **Styling:** Custom CSS3 (Flexbox, CSS Grid, Responsive Design)
- **External Data:** [Dog CEO Dog API](https://dog.ceo/dog-api/)

---

## 🌐 API Reference

PawPedia integrates with the free public [Dog CEO REST API](https://dog.ceo/dog-api/):

| Endpoint | Method | Description |
|---|---|---|
| `https://dog.ceo/api/breeds/image/random` | `GET` | Fetches a single random dog image |
| `https://dog.ceo/api/breeds/list/all` | `GET` | Retrieves an exhaustive list of all breeds and sub-breeds |
| `https://dog.ceo/api/breed/{breed}/list` | `GET` | Retrieves sub-breeds of a specific breed |
| `https://dog.ceo/api/breed/{breed}/images/random/6` | `GET` | Fetches 6 random images for a specific breed |

---

## 📁 Project Structure

```text
pawpedia/
├── index.html              # HTML entry point
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite build configuration
├── .oxlintrc.json          # Oxlint configuration
├── .gitignore              # Ignored files for git
├── README.md               # Project documentation
├── public/                 # Static assets & icons
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── main.jsx            # Application bootstrap & BrowserRouter
    ├── App.jsx             # Main layout & route definitions
    ├── App.css             # Component-level styles
    ├── index.css           # Global design system & theme styles
    ├── assets/             # Images and SVG assets
    │   └── hero.png
    ├── components/         # Reusable UI components
    │   ├── Navbar.jsx      # Navigation bar with active NavLinks
    │   ├── DogCard.jsx     # Breed card with sub-breed count & link
    │   └── Loader.jsx      # Loading animation spinner
    └── pages/              # Application views/routes
        ├── Home.jsx        # Landing page with random dog generator
        ├── Breeds.jsx      # Searchable breed list
        ├── BreedDetails.jsx# Dynamic breed profile & photo gallery
        └── NotFound.jsx    # Custom 404 page
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 18+ or 20+ recommended).

Check your installation:
```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kjaid0341-creator/PS9_PAWPEDIA.git
   cd PS9_PAWPEDIA
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

Start Vite's development server with hot reload:
```bash
npm run dev
```

The application will be accessible at:
```text
http://localhost:5173
```

### Building for Production

Compile and bundle production-ready assets into the `dist/` folder:
```bash
npm run build
```

To preview the built production bundle locally:
```bash
npm run preview
```

### Linting

Run Oxlint to check for code quality and errors:
```bash
npm run lint
```

---

## 🔮 Future Enhancements

- [ ] Add breed favorites/bookmarks stored in `localStorage`
- [ ] Dark/Light mode theme toggle
- [ ] Breed comparison tool (side-by-side view)
- [ ] Filtering breeds by size, temperament, or origin

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
