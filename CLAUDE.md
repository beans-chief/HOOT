# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 16.1.6 application using the App Router, React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Tech Stack & Key Dependencies

- **Framework**: Next.js 16.1.6 with App Router
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4 (uses new `@tailwindcss/postcss` plugin)
- **Component Library**: shadcn/ui (New York style variant)
- **Icons**: lucide-react
- **Utilities**: clsx, tailwind-merge (via `cn` utility)
- **Fonts**: Geist Sans & Geist Mono (via next/font)

## Project Structure

```
app/              # Next.js App Router (pages, layouts, routes)
  layout.tsx      # Root layout with font configuration
  page.tsx        # Home page
  globals.css     # Global styles and Tailwind configuration
lib/              # Utility functions and shared logic
  utils.ts        # cn() utility for merging Tailwind classes
components/       # React components (shadcn/ui components go here)
  ui/             # shadcn/ui components (auto-generated)
public/           # Static assets
```

## Important Configuration Details

### Path Aliases (tsconfig.json)
- `@/*` maps to the root directory
- shadcn/ui uses specific aliases:
  - `@/components` for components
  - `@/lib/utils` for utilities
  - `@/components/ui` for UI components
  - `@/hooks` for hooks

### Tailwind CSS v4
This project uses Tailwind CSS v4 with the new syntax:
- Uses `@import "tailwindcss"` instead of directives
- Configured via `@tailwindcss/postcss` plugin in postcss.config.mjs
- Custom theme values are in app/globals.css using CSS variables
- Uses OKLCH color space for theming

### shadcn/ui Configuration
- Style: "new-york"
- Uses React Server Components (rsc: true)
- Components installed via CLI will go to `components/ui/`
- Theming via CSS variables with dark mode support
- Base color: neutral
- Icon library: lucide-react

### Dark Mode
- Uses class-based dark mode (`.dark` class)
- Theme variables defined for both light and dark modes in globals.css
- Custom variant: `@custom-variant dark (&:is(.dark *))`

## Adding shadcn/ui Components

When adding new shadcn/ui components:
```bash
npx shadcn@latest add <component-name>
```

Components will be automatically placed in `components/ui/` and configured to use the existing theme.

## Styling Conventions

- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Prefer Tailwind utility classes over custom CSS
- Custom theme colors are defined as CSS variables in globals.css
- Use theme colors via Tailwind: `bg-background`, `text-foreground`, etc.

## TypeScript Configuration

- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (automatic runtime)
- Module resolution: bundler
