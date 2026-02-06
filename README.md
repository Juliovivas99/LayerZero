# Layer Zero Studio

A modern, high-performance website for Layer Zero Studio built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Iconify** for icons
- **Vercel-optimized** for instant deployment

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Homepage
│   ├── ai-services/         # AI services page
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Shared navigation
│   ├── Footer.tsx           # Shared footer
│   ├── home/                # Homepage components
│   └── ai/                  # AI services components
└── types/
    └── index.ts             # TypeScript types
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Pages

- **Homepage** (`/`) - Software development services
- **AI Services** (`/ai-services`) - AI automation and infrastructure services

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import repository in Vercel
3. Deploy automatically

## Contact

Email: hello@layerzero.studio

---

© 2026 Layer Zero Studio. Made in San Francisco.
