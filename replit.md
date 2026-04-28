# Portfolio (Vite + React + TypeScript)

## Overview
A personal portfolio site built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui. The source lives in the `Frontend/` directory.

## Project Structure
- `Frontend/` — the application
  - `src/` — application source (pages, components, hooks)
  - `vite.config.ts` — dev server configured for Replit (host `0.0.0.0`, port `5000`, all hosts allowed)
  - `package.json` — npm dependencies and scripts

## Replit Setup
- Workflow `Start application` runs `cd Frontend && npm run dev` and serves the app on port 5000 (webview).
- Vite's dev server is bound to `0.0.0.0:5000` and trusts all hosts so the Replit preview iframe works.
- Deployment is configured as a static build:
  - Build: `cd Frontend && npm run build`
  - Public dir: `Frontend/dist`

## Languages / Tooling
- Node.js 20
- Vite 5, React 18, TypeScript 5
- Tailwind CSS 3, shadcn/ui, lucide-react
- React Router 6, TanStack Query 5
