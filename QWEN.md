# React Complete Guide - Course Workspace

## Project Overview

This workspace contains course materials from **"React - The Complete Guide"** by Maximilian Schwarzmüller. Each chapter is organized in its own folder (e.g., `08-refs-portals`, `09-project-management-project`), with runnable starter projects located in `01-starting-project/` subdirectories.

The projects demonstrate React concepts progressively, from basic hooks (refs, state) to advanced patterns (portals, project management applications).

## Workspace Structure

```
react-complete-guide-by-maximilian/
├── 08-refs-portals/
│   └── 01-starting-project/    # Chapter 8: Refs & Portals demo
│       ├── src/
│       │   ├── components/     # React components (Player.jsx, TimerChallenge.tsx)
│       │   ├── assets/         # Static assets
│       │   ├── App.jsx         # Main application component
│       │   ├── main.jsx        # React entry point
│       │   └── index.css       # Global styles
│       ├── public/             # Public static assets
│       ├── index.html          # Vite entry HTML
│       ├── vite.config.js      # Vite configuration
│       └── package.json        # Dependencies & scripts
├── 09-project-management-project/
│   └── 01-starting-project/    # Chapter 9: Project Management app
│       ├── src/
│       │   ├── assets/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── public/
│       ├── index.html
│       ├── vite.config.js
│       ├── tailwind.config.js  # Tailwind CSS configuration
│       ├── postcss.config.js   # PostCSS configuration
│       └── package.json
└── AGENTS.md                   # Repository guidelines
```

## Technology Stack

| Technology | Version | Usage |
|------------|---------|-------|
| React | 19.0.0 | UI framework |
| React DOM | 19.0.0 | DOM rendering |
| Vite | 4.4.5 | Build tool & dev server |
| Tailwind CSS | 3.3.3 | Utility-first CSS (Chapter 09+) |
| ESLint | 8.45.0 | Code linting |
| TypeScript | - | Optional (`.tsx` files) |

## Build & Development Commands

Navigate to the specific project directory before running commands:

```bash
cd 08-refs-portals/01-starting-project
# or
cd 09-project-management-project/01-starting-project
```

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production build in `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | Run ESLint on `.js` and `.jsx` files |

### Lint Configuration

```bash
npm run lint
# Runs: eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0
```

## Coding Conventions

### File Naming
- **Components**: PascalCase (e.g., `Player.jsx`, `TimerChallenge.tsx`)
- **Utilities/Helpers**: camelCase
- **Styles**: kebab-case or component-matched names

### Code Style
- **Indentation**: 2 spaces for JSX/JavaScript
- **Languages**: JavaScript (`.jsx`) and TypeScript (`.tsx`)
- **Component Location**: Colocate in `src/components/`
- **Imports**: Use `.jsx`/`.tsx` extensions in import paths

### Example Component Pattern

```jsx
import { useRef, useState } from "react";

export default function ComponentName() {
    const someRef = useRef('');
    const [state, setState] = useState(null);

    function handleClick() {
        // Handler logic
    }

    return (
        <section>
            {/* JSX content */}
        </section>
    );
}
```

## Chapter-Specific Notes

### Chapter 08: Refs & Portals (`08-refs-portals`)
- Demonstrates `useRef` for DOM access
- Shows `useState` for component state management
- Includes modal portal setup (`<div id="modal">` in `index.html`)
- Mixed JavaScript (`.jsx`) and TypeScript (`.tsx`) files

### Chapter 09: Project Management (`09-project-management-project`)
- Uses Tailwind CSS for styling
- Configured with PostCSS and Autoprefixer
- Starter project with basic template

## Testing Guidelines

No test framework is configured in these projects. To add tests:

1. Choose a framework (Vitest, Jest, React Testing Library)
2. Install dependencies
3. Add test script to `package.json`
4. Use naming pattern: `*.test.jsx` or `*.test.tsx`
5. Place tests next to tested modules or in dedicated `tests/` folder

## Troubleshooting

### Dependencies Out of Sync
```bash
rm -rf node_modules/
npm install
```

### Vite Cache Issues
```bash
rm -rf node_modules/.vite
npm run dev
```

### ESLint Errors
```bash
npm run lint -- --fix
```

## IDE Configuration

- `.idea/` directory contains IntelliJ/WebStorm project settings
- `.gitignore` excludes `node_modules/`, `.DS_Store`, and build artifacts
- ESLint plugins configured for React, React Hooks, and React Refresh
