# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- **Start development server**: `npm run dev` - Runs on http://localhost:5173/
- **Build for production**: `npm run build`
- **Run Storybook**: `npm run storybook` - Runs on http://localhost:6006/
- **Build Storybook**: `npm run build-storybook`
- **Install dependencies**: `npm install`

## Architecture Overview

This is an Anima-generated React TypeScript project using Vite as the build tool.

### Key Technologies
- **React 18** with TypeScript
- **Vite** for development and building
- **React Router** for routing
- **Storybook** for component documentation
- **PropTypes** for runtime type checking (alongside TypeScript)
- **i18next** for internationalization (supports French and English)
- **Lottie** for animations

### Project Structure
- **`/src/components/`**: Reusable UI components (Button, DisplayCard, LanguageSwitcher, LeafAnimation) with accompanying styles and Storybook stories
- **`/src/icons/`**: SVG icons as React components, each in its own directory with index exports
- **`/src/screens/`**: Page-level components (LandingPage, LandingPageScreen)
- **`/src/hooks/`**: Custom React hooks (useScrollAnimation, useSmoothScroll)
- **`/src/i18n/`**: Internationalization setup and translation files
- **`/src/services/`**: API service layer
- **`/static/`**: Static assets served directly, including images and PDFs
- **`/public/`**: Public assets with Netlify redirects configuration
- **`styleguide.css`**: Global styles

### Component Pattern
Components follow this structure:
- TypeScript interfaces for props
- PropTypes for runtime validation
- Individual CSS files for styling
- Storybook stories for documentation
- Index files for clean exports

### Routing
Routes are defined in `src/App.tsx` using React Router v6:
- `/` and `/landing-page-1` → LandingPage
- `/landing-page` → LandingPageScreen

### Configuration
- Vite configured with React plugin
- Static assets served from `/static/` directory
- Base path set to `./` for relative deployments