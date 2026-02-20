# lhas.io

<div align="center">

<video src="https://github.com/lhas-dev/lhas.io/raw/main/public/animated-logo.mp4" width="600" autoplay loop muted playsinline></video>

Personal portfolio and project showcase for **Luiz Almeida** — Front-end Engineer with 10+ years of experience building scalable web and mobile applications.

[Live Site](https://lhas.io) · [LinkedIn](https://linkedin.com/in/luizhrqas) · [GitHub](https://github.com/lhas-dev)

</div>

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                     Astro (SSG)                     │
│              Static Site Generation Layer           │
├──────────────┬──────────────────┬───────────────────┤
│   Pages      │   Components     │   Data            │
│              │                  │                   │
│ index.astro  │ Hero.tsx         │ projects.ts       │
│ projects/    │ Header.tsx       │ (project entries) │
│  [slug].astro│ ProjectCard.tsx  │                   │
│              │ Navigation.tsx   │                   │
│              │ Badges.tsx       │                   │
├──────────────┴──────────────────┴───────────────────┤
│            React 19                                 │
│         Hydrated via Astro client:idle              │
├─────────────────────────────────────────────────────┤
│  Tailwind CSS 4 · Framer Motion · Custom Theming    │
└─────────────────────────────────────────────────────┘
```

The project follows **Astro's Islands Architecture** — pages are statically generated at build time, while interactive components (animations, hover effects, typing hero) are hydrated as React islands on the client. This approach delivers fast initial page loads with rich interactivity where needed.

**Key directories:**

```
src/
├── pages/            # Astro file-based routing (home, projects, project detail)
├── components/       # React components with Framer Motion animations
│   ├── icons/        # SVG icon components
│   └── ui/           # Reusable UI primitives (card, etc.)
├── data/             # Project entries and content
├── types/            # TypeScript interfaces
├── lib/              # Utility functions
└── styles/           # Global CSS, theme variables, Tailwind config
```

## Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | Astro 5                   |
| UI Library | React 19                  |
| Language   | TypeScript                |
| Styling    | Tailwind CSS 4            |
| Animations | Framer Motion 12          |
| Fonts      | Urbanist, Source Sans 3   |
| Build Tool | Vite (via Astro)          |
| Utilities  | clsx, tailwind-merge, cva |

## Getting Started

**Prerequisites:** Node.js 18+ and npm (or your preferred package manager).

```bash
# Clone the repository
git clone https://github.com/lhas-dev/lhas.io.git
cd lhas.io

# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev
```

### Available Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start local dev server with hot reload |
| `npm run build`   | Build production site to `./dist/`     |
| `npm run preview` | Preview the production build locally   |

## Roadmap

- [ ] **Blog section** — MDX-powered articles with syntax highlighting, reading time estimates, and tag filtering
- [ ] **Dark/Light theme toggle** — Persistent theme switcher with system preference detection
- [ ] **Project case studies** — Expanded project pages with problem/solution/impact breakdowns and image galleries
- [ ] **RSS feed** — Auto-generated feed for blog posts
- [ ] **i18n support** — Portuguese (BR) and English versions with language switcher
- [ ] **Analytics dashboard** — Privacy-friendly visitor stats with Plausible or Umami
- [ ] **Testimonials section** — Client and colleague quotes with carousel display
- [ ] **Interactive resume** — Timeline-based career history with expandable role details
- [ ] **Open source contributions** — Auto-fetched GitHub activity and contribution highlights
- [ ] **Contact form** — Serverless form handling with validation and spam protection

## License

This project is open source and available under the [MIT License](LICENSE).
