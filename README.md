# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Kreativ — Signup Application

# Kreativ — Signup Application

## Overview

Kreativ is a responsive, multi-page signup application built using React, Vite, React Router, and Tailwind CSS. The project demonstrates routing, form validation, state management, accessibility, and performance optimization.

## Features

- Multi-page navigation with active link highlighting.
- Dynamic Help page using URL parameters.
- 404 page for unknown routes.
- Form validation and password visibility toggle.
- Shared form state using React props and `useReducer`.
- Responsive design and keyboard accessibility.
- Lazy-loaded routes using `React.lazy()` and `Suspense`.

## Technologies Used

- React and Vite
- React Router DOM
- Tailwind CSS
- JavaScript (JSX)
- Lucide React

## Installation and Setup

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

To build and preview the production version:

```bash
npm run build
npm run preview
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/signup` | Signup form |
| `/thank-you` | Signup confirmation page |
| `/help/:topic` | Dynamic Help page |
| `*` | Not Found page |

## Lighthouse Audit Results

The application was tested using Google Lighthouse to evaluate performance and accessibility.

| Page | Audit | Before | After |
|---|---|---:|---:|
| Home | Performance | 55 | 96 |
| Help | Performance | 55 | 99 |
| Sign Up | Performance | 55 | 96 |
| Sign Up | Accessibility | 96 | 100 |
| Thank You | Performance | 63 | 94 |

## Audit Issues and Fixes

| Issue identified | Rule / criterion | Fix applied | Before | After |
|---|---|---|---:|---:|
| Insufficient colour contrast on the email input | WCAG 2.2, Success Criterion 1.4.3 — Contrast (Minimum) | Improved the input text, placeholder, and border contrast | 97 | 100 |
| Performance optimization | Lighthouse Performance | Implemented lazy-loaded route components using `React.lazy()` and `Suspense` | 55 | 96 |

**Performance note:** Lighthouse scores may vary between runs. The initial Home score was recorded on the development server, while the improved score was recorded on the production preview. The difference cannot therefore be attributed to lazy-loading alone.

## Screenshots

Save your Lighthouse before-and-after screenshots in a `screenshots/` folder in the project repository.

