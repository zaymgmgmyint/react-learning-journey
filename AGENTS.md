# Repository Guidelines

## Project Structure & Module Organization
This workspace is a course folder; the runnable app for this chapter lives in `08-refs-portals/01-starting-project`. Inside that app:
- `src/` contains React source code (components in `src/components/`, styles in `src/index.css`).
- `public/` holds static assets served as-is.
- `index.html` is the Vite entry HTML.
- `vite.config.js` holds Vite build configuration.

## Build, Test, and Development Commands
Run commands from `08-refs-portals/01-starting-project`:
- `npm install` installs dependencies (a `package-lock.json` is committed).
- `npm run dev` starts the Vite dev server.
- `npm run build` produces a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint across `.js` and `.jsx` files.

## Coding Style & Naming Conventions
- JavaScript and JSX are the primary languages; there is also some `.tsx` usage.
- Follow existing file formatting; indentation is typically 2 spaces in JSX/JS.
- Use PascalCase for React components (`Player`, `TimerChallenge`).
- Prefer colocating component files in `src/components/`.
- Linting is configured via ESLint with React-related plugins (see `package.json`).

## Testing Guidelines
No test runner or test folder is configured in this project. If you add tests, document the chosen framework and add a script (for example, `test`) in `package.json`, then adopt a clear naming pattern like `*.test.jsx` next to the module under test or in a dedicated `tests/` folder.

## Commit & Pull Request Guidelines
This checkout does not include `.git`, so no commit message conventions can be inferred here. If you are contributing back to a shared repo, follow that repo’s standard (often Conventional Commits like `feat: add timer stop logic`). For pull requests, include a short summary, link the relevant lesson or issue, and add screenshots or a short GIF for UI changes.

## Configuration Tips
`node_modules/` is present in the workspace but should not be edited. If dependencies are out of sync, delete `node_modules/` and reinstall with `npm install`.
