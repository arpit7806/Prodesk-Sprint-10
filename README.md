# SHOPFRONT — Advanced State Architecture (Sprint 10)

A product catalog application built to demonstrate enterprise-grade global state management using **Redux Toolkit**, featuring live filtering, cart management, and a theme system — all driven entirely through a centralized store.

## Overview
Live Link - https://sprint-10-beta.vercel.app/
<img width="1917" height="1153" alt="image" src="https://github.com/user-attachments/assets/5abab52e-6ab9-421a-bdd9-bb15f49a6655" />


This project migrates cart logic out of local Context API state into a proper Redux Toolkit architecture, then extends the store to manage sidebar filters and application-wide theming. It uses [fakestoreapi.com](https://fakestoreapi.com) as its live product data source.

## Features

- **Global Cart State** — Add, remove, and adjust item quantities via dispatched Redux actions, replacing Context-based state.
- **Live Sidebar Filtering** — Filter products by category and price range; the product grid reflects filter changes instantly via global state, with no local component state involved in the filtering logic.
- **Dark / Light Theme Manager** — Fully state-driven theming, toggled from the navbar and applied globally via a `theme` slice.
- **Performance Optimizations** — `useMemo` for derived filtered product lists, `useCallback` for stable function references, and `React.memo` on product cards to avoid unnecessary re-renders during filtering.
- **Dark Glassmorphism UI** — Class-based CSS styling (no inline styles) using Space Grotesk and Rajdhani fonts.

## Tech Stack

- React + Vite
- Redux Toolkit (`@reduxjs/toolkit`) + `react-redux`
- fakestoreapi.com (product data)
- Vanilla CSS (glassmorphism, class-based, no CSS-in-JS)

## Project Structure

```
src/
  app/
    store.js               # Central Redux store configuration
  features/
    cart/
      cartSlice.js
      Cart.jsx
      CartItem.jsx
    filters/
      filtersSlice.js
      Sidebar.jsx
    theme/
      themeSlice.js
  components/
    Navbar.jsx
    ProductCard.jsx
    ProductGrid.jsx
  App.jsx
  main.jsx
  index.css
```

## State Architecture

The global store is composed of three independent slices:

| Slice     | Responsibility                                  |
|-----------|--------------------------------------------------|
| `cart`    | Cart items, quantities, add/remove/clear actions  |
| `filters` | Active category and price range filters           |
| `theme`   | Current UI mode (`dark` / `light`)                 |

Each slice is self-contained (its own reducer, actions, and initial state), registered centrally in `store.js`, and consumed by components via `useSelector` / `useDispatch` — no prop drilling, no Context API.


## Notes

- Filtering, cart mutations, and theme switching are all proven via direct `dispatch` calls against Redux Toolkit slices, satisfying the sprint's core requirement to demonstrate state mutation through standard dispatch actions.
- Re-render mitigation (`useMemo`/`useCallback`/`React.memo`) was applied specifically around the product grid and cards, since these are the highest-frequency re-render surfaces during filtering.
