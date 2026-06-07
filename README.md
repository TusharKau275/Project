# Tushar Kaushik — Personal Portfolio

A clean, responsive personal portfolio website built with **Vite** and **Tailwind CSS v4**, featuring smooth scroll animations, a mobile-friendly navbar, and a multi-page layout.

---

## 🌐 Live Pages

| Page | Description |
|------|-------------|
| `index.html` | Home — hero section, skills, projects, education |
| `about.html` | About — what I do, focus areas, goals |
| `contact.html` | Contact — availability and collaboration info |

---

## ✨ Features

- **Responsive Design** — Mobile-first layout that scales across all screen sizes
- **Fixed Navbar** — Hamburger menu toggle for mobile devices
- **Smooth Scrolling** — Powered by [Lenis](https://github.com/darkroomengineering/lenis) for buttery scroll experience
- **View Transitions** — CSS `@view-transition` for native page transition animations
- **Scroll-triggered Animations** — `.autoshow` class uses `animation-timeline: view()` for reveal-on-scroll effects
- **Skills Section** — Highlights HTML, CSS, JavaScript, React basics, responsive design, and accessibility
- **Projects Showcase** — Card-based project list with image previews and live demo links
- **Education Timeline** — Academic background with subject tags
- **Google Fonts (Poppins)** — Clean, modern typography throughout

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Vite](https://vitejs.dev/) | `^8.0.12` | Dev server & bundler |
| [Tailwind CSS](https://tailwindcss.com/) | `^4.3.0` | Utility-first CSS framework |
| [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) | `^4.3.0` | Tailwind's official Vite plugin |
| [Lenis](https://github.com/darkroomengineering/lenis) | `1.3.23` | Smooth scroll library |

---

## 📁 Project Structure

```
project/
├── index.html          # Home page
├── about.html          # About page
├── contact.html        # Contact page
├── package.json        # Project metadata & scripts
├── vite.config.js      # Vite configuration with Tailwind plugin
├── tailwind.config.cjs # Tailwind configuration
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── uiimg.jpg       # Project preview image
├── src/
│   ├── style.css       # Main stylesheet (Tailwind + custom CSS)
│   └── main.js         # JavaScript entry point
└── .vscode/
    ├── settings.json               # CSS IntelliSense config
    └── tailwind-custom-data.json   # Tailwind v4 custom data for VS Code
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/TusharKau275/Project.git

# Navigate into the project directory
cd Project

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Outputs the optimized site to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` build locally for testing before deployment.

---

## 🎨 Design Highlights

- **Color Palette** — Deep navy (`#151f36`, `#0f172a`) backgrounds with a vivid blue accent (`#43aaf3`, `#29bde2`)
- **Font** — Poppins (Google Fonts) across all weights
- **Animations** — CSS scroll-driven animations via `animation-timeline: view()` and native `@view-transition` for page changes
- **Layout** — Fixed navbar, full-width hero sections, responsive card grids

---

## 📬 Contact

**Tushar Kaushik**
- 📧 Open for collaborations, internships, and freelance frontend work
- 🔗 [GitHub](https://github.com/TusharKau275)

---

## 📄 License

This project is personal portfolio work. Feel free to use it as inspiration, but please don't copy it wholesale as your own portfolio.
