# SwiftCart

A small e-commerce demo built with React 19, TypeScript, Vite, and Tailwind CSS v4.

## Features

- Client-side routing with React Router v7
- Home, product listing, product detail, cart, and checkout pages
- Category filtering via the `?category=` query parameter
- Cart state with quantity controls and `localStorage` persistence
- Simulated checkout with an order confirmation state
- Responsive, accessible UI built with Tailwind CSS

## Tech Stack

- React 19 + TypeScript 6
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router v7
- oxlint

## Getting Started

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically http://localhost:5173).

## Scripts

| Command             | Purpose                       |
| ------------------- | ----------------------------- |
| `npm run dev`       | Start the development server  |
| `npm run build`     | Type-check and build for prod |
| `npm run typecheck` | Type-check without emitting   |
| `npm run lint`      | Run oxlint                    |
| `npm run preview`   | Preview the production build  |

## Project Structure

```
src/
├─ components/   Header, Footer, Layout
├─ context/      Cart context and provider
├─ data/         Mock product data
├─ pages/        Route pages
├─ main.tsx      App entry point
└─ router.tsx    Route definitions
```

## Notes

Product data is mocked locally; there is no backend or real payment processing. See `part1.md` for a detailed log of the work completed.
