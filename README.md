# ElevateAI - Intelligent AI Solutions Website

A modern, responsive website for ElevateAI built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases AI solutions for business growth and automation.

## Features

- **Modern Design**: Built with shadcn/ui components and Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Theme toggle with system preference support
- **Fast Performance**: Optimized with Next.js App Router
- **TypeScript**: Full type safety throughout the application
- **Accessible**: Built with accessibility best practices

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Fonts**: Geist and Manrope from Google Fonts

## Project Structure

```
elevate-ai-website/
├── app/                    # Next.js App Router pages
│   ├── components/         # Page-specific components
│   ├── contact/           # Contact page
│   ├── solutions/         # Solutions pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # redix/ui components
│   ├── rays-origin.tsx   # Custom components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional stylesheets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/WAVELOOP-Development/elevateai-web
   cd elevate-ai-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


## UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components, which are:
- Copy-pastable and customizable
- Built on top of Radix UI primitives
- Styled with Tailwind CSS
- Fully accessible

## Pages

- **Home (`/`)**: Landing page with hero, solutions, about, FAQ, and contact sections
- **Contact (`/contact`)**: Contact form and booking functionality
- **Solutions**: Various solution pages for different industries
  - Healthcare & Wellness
  - Retail & E-commerce
  - Tourism & Hospitality
  - Professional Services

## Theming

The application supports both light and dark themes:
- Uses CSS variables for theming
- Automatic system preference detection
- Manual theme toggle available
- Configured in [`components/theme-provider.tsx`](components/theme-provider.tsx)


## Configuration

### Tailwind CSS
- Configuration: `tailwind.config.js`
- PostCSS: [`postcss.config.mjs`](postcss.config.mjs)
- Global styles: [`app/globals.css`](app/globals.css)

### TypeScript
- Configuration: [`tsconfig.json`](tsconfig.json)
- Path aliases configured for `@/*` imports

### Next.js
- Configuration: [`next.config.mjs`](next.config.mjs)
- ESLint and TypeScript errors ignored during builds
- Image optimization disabled

## Mobile Responsiveness

The application includes:
- Mobile-first responsive design
- Custom mobile detection hook: [`hooks/use-mobile.ts`](hooks/use-mobile.ts)
- Sidebar component with mobile support: [`components/ui/sidebar.tsx`](components/ui/sidebar.tsx)


---

Built by the WAVELOOP team
