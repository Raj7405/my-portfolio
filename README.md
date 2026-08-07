# Rajendra Chaudhari — Portfolio

Personal portfolio website for **Rajendra Chaudhari**, Software Engineer. Showcases experience, skills, projects, resume, and a contact form.

**Live site:** [https://www.rajendra-chaudhari.fun](https://www.rajendra-chaudhari.fun)

## Features

- Responsive single-page portfolio with section scroll navigation
- Liquid glass navbar with scroll spy
- Project detail pages and proof galleries
- Downloadable resume view
- Contact form powered by [Web3Forms](https://web3forms.com)
- Dark, modern UI with subtle glassmorphism (Geist Sans / Geist Mono)

## Tech stack

- [Vite](https://vitejs.dev) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Setup

```sh
git clone https://github.com/Raj7405/my-portfolio.git
cd my-portfolio
npm install
```

### Environment

Copy the example env file and add your Web3Forms access key:

```sh
cp .env.example .env
```

```env
VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

### Development

```sh
npm run dev
```

App runs at `http://localhost:8080` by default.

### Build & preview

```sh
npm run build
npm run preview
```

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |

## Project structure

```
src/
  components/   # UI sections, navbar, shared components
  content/      # Profile, experience, skills content
  fixtures/     # Project data
  pages/        # Route pages (Index, ProjectDetail, Resume)
  constants/    # Layout tokens
```

## Deploy

Build with `npm run build`, then host the `dist/` folder on any static host (Vercel, Netlify, Cloudflare Pages, etc.).

Set `VITE_WEB3FORMS_ACCESS_KEY` in your host’s environment variables so the contact form works in production.

## License

Personal portfolio — all rights reserved.
