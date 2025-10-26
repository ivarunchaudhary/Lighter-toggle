# Lighter Theme Toggle

A Next.js demo showcasing a lighter-inspired toggle button that switches between light and dark themes. When the toggle (a stylized lighter) is clicked, the lid closes and the flame disappears to indicate dark mode, and vice versa.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the toggle.

## Project structure

- `src/hooks/useTheme.tsx` — Theme context/provider hook managing light/dark state with persistence.
- `src/components/LighterToggle/` — Lighter toggle component and styles.
- `src/styles/theme.css` — CSS variables for theming.
- `src/app/` — Next.js App Router entry point and page UI.

## Building for production

```bash
npm run build && npm run start
```

This creates an optimized build and starts the production server.
