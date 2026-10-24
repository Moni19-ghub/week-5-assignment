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

## Overview

Kreativ is a responsive, multi-page signup application built using React, Vite, React Router, and Tailwind CSS. It demonstrates routing, form validation, state management, and accessibility.

## Features

- Multi-page navigation with active link highlighting.
- Dynamic Help page using URL parameters.
- 404 page for unknown routes.
- Form validation and password visibility toggle.
- Shared form state using React props and `useReducer`.
- Responsive design and keyboard accessibility.
- Lazy-loaded routes for improved performance.

## Technologies Used

- React
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript (JSX)
- Lucide React

## Installation and Setup

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL displayed in the terminal.

To create and preview a production build:

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

