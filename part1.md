# SwiftCart — Project Log (Part 1)

## Overview

SwiftCart is a small e-commerce demo built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS v4**. This document records the work completed so far: project scaffolding and the application shell (routing, header, footer, and pages).

## Tech Stack

| Area        | Choice                                      |
| ----------- | ------------------------------------------- |
| Framework   | React 19                                    |
| Language    | TypeScript 6                                |
| Build tool  | Vite 8 (`@vitejs/plugin-react`)             |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`)       |
| Routing     | react-router-dom v7 (`createBrowserRouter`) |
| Linting     | oxlint                                      |

## Repository State

- Default branch: `main`
- Feature work lives on branch `feat/shell`
- Local `main` is at the scaffold commit; `feat/shell` is one commit ahead on `origin`

| Commit    | Branch       | Description                                                        |
| --------- | ------------ | ------------------------------------------------------------------ |
| `70dc1a7` | `main`       | `chore: scaffold Vite + React 19 + TS + Tailwind v4`               |
| `af82334` | `feat/shell` | `feat(shell): app shell with routing, header, footer, and pages`   |

## What Was Done

### 1. Project Scaffold (`70dc1a7`)

- Initialized a Vite + React 19 + TypeScript project.
- Set up Tailwind CSS v4 through the `@tailwindcss/vite` plugin.
- Defined design tokens in `src/index.css`:
  - Inter-based `--font-sans`
  - Full `--color-brand-*` palette (50–950)
  - Base body styling (`bg-slate-50`, `text-slate-900`, antialiased)
  - Smooth scrolling
- Added npm scripts: `dev`, `build`, `typecheck`, `lint`, `preview`.
- Configured oxlint via `.oxlintrc.json`.
- Added a minimal `App.tsx` placeholder with a Tailwind demo.

### 2. Application Shell (`af82334`, branch `feat/shell`)

Added `react-router-dom` v7 and replaced the single `App` component with a routed app shell.

**Routing**
- Switched `src/main.tsx` to render `<RouterProvider router={router} />`.
- Created `src/router.tsx` using `createBrowserRouter`.
- Removed the old `src/App.tsx`.
- Routes:

| Path            | Page            | Notes                              |
| --------------- | --------------- | ---------------------------------- |
| `/`             | `Home`          | Landing / hero section             |
| `/products`     | `Products`      | Product grid                       |
| `/products/:id` | `ProductDetail` | Detail view with 404 fallback      |
| `/cart`         | `Cart`          | Placeholder                        |
| `/checkout`     | `Checkout`      | Placeholder                        |

**Layout**
- `src/components/Layout.tsx` — sticky header + `<Outlet />` main area + footer, using a full-height flex column.
- All routes are nested under the `Layout` route.

**Header** (`src/components/Header.tsx`)
- Sticky, blurred white background.
- Logo (SVG) + "SwiftCart" wordmark linking to `/`.
- Primary nav: Products and Cart links.
- Cart icon with a static `0` badge placeholder.
- Accessible labels (`aria-label`, `sr-only`) on cart controls.

**Footer** (`src/components/Footer.tsx`)
- Brand blurb plus three link columns:
  - **Shop**: All Products, Electronics, Clothing (category query links)
  - **Support**: Contact Us, FAQs, Shipping Info
  - **Legal**: Privacy Policy, Terms of Service, Refund Policy
- Dynamic copyright year.

**Pages**
- `Home` — hero heading/subheading, "Shop Now" + "Browse Products" CTAs, and three feature cards (Fast Shipping, Secure Payments, Easy Returns) rendered via a reusable `FeatureCard` component.
- `Products` — responsive grid (`sm:2`, `lg:3`, `xl:4` columns) of 9 mock products; each card links to its detail page, lazy-loads the image, and scales on hover.
- `ProductDetail` — breadcrumb, product image, category, name, price, description, feature checklist, and "Add to Cart" / "Buy Now" buttons (non-functional). Shows a "Product Not Found" fallback for unknown IDs.
- `Cart` — empty-cart placeholder with a "Continue Shopping" link.
- `Checkout` — placeholder with a "Back to Cart" link.

## Mock Data

Products are hard-coded (no API yet) in `Products.tsx` and `ProductDetail.tsx`, covering three categories:

- **Electronics**: Wireless Headphones, Smart Watch, Laptop Stand, Bluetooth Speaker
- **Clothing**: Premium T-Shirt, Denim Jeans, Running Shoes
- **Home**: Coffee Maker, Desk Lamp

Each product has `id`, `name`, `price`, `image` (Unsplash URL), `category`, and — on the detail page — `description` and a `features` array.

## Styling Conventions

- Tailwind utility classes throughout; a `brand` color scale drives primary actions.
- Consistent `max-w-7xl` centered container with `px-4 sm:px-6 lg:px-8`.
- Rounded cards, subtle borders/shadows, and hover transitions.
- Semantic HTML with accessibility attributes (landmarks, breadcrumb, labels).

## Project Structure

```
SwiftCart/
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tsconfig*.json
├─ .oxlintrc.json
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ index.css
   ├─ main.tsx
   ├─ router.tsx
   ├─ context/
   │  ├─ cart-context.ts
   │  ├─ CartContext.tsx
   │  └─ useCart.ts
   ├─ data/
   │  └─ products.ts
   ├─ components/
   │  ├─ Header.tsx
   │  ├─ Footer.tsx
   │  └─ Layout.tsx
   └─ pages/
      ├─ Home.tsx
      ├─ Products.tsx
      ├─ ProductDetail.tsx
      ├─ Cart.tsx
      └─ Checkout.tsx
```

## Available Scripts

| Command             | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start Vite dev server            |
| `npm run build`     | Type-check + production build    |
| `npm run typecheck` | Type-check without emitting      |
| `npm run lint`      | Run oxlint                       |
| `npm run preview`   | Preview the production build     |

## Fixes Applied

The placeholder functionality was completed:

- Added `src/context/CartContext.tsx` — global cart state (add, remove, update quantity, clear) with `localStorage` persistence under the `swiftcart-cart` key.
- Added `src/context/cart-context.ts` — context object and shared types (no components, keeps fast refresh happy).
- Added `src/context/useCart.ts` — hook kept separate so the provider file only exports components.
- Wrapped the app in `CartProvider` in `src/main.tsx`.
- Extracted product data into `src/data/products.ts`, shared by `Products`, `ProductDetail`, and the cart (removes duplicated mock data).
- Header cart badge and icon label now show the live item count.
- `ProductDetail` — "Add to Cart" adds the item with a transient "Added to Cart" confirmation; "Buy Now" adds the item and goes to checkout.
- `Products` — category filter pills driven by the `?category=` query param (matches footer links); includes an empty state.
- `Cart` — item list with quantity controls, remove, line totals, subtotal/shipping/total, and checkout link.
- `Checkout` — shipping + payment form, order summary, and an order-confirmation state that clears the cart.
- Shipping is free for orders of $50 or more, otherwise $5.

## Minor Upgrade (v0.1.0)

- Renamed the package from `react-shop` to `swiftcart` and bumped the version to `0.1.0`.
- Updated `index.html` title and meta description to SwiftCart.
- Replaced the default Vite README with project-specific documentation.

## Current State / Remaining

- Product data is still mocked locally; no backend/API or loading states.
- Checkout does not process real payments (form submission is simulated).
- No authentication or order history.
- No automated tests yet.
