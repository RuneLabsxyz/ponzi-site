# CLAUDE.md - Development Commands & Code Style Guide

## Commands
- `npm run dev` - Start dev server with hot reloading
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type check and verify SvelteKit sync
- `npm run format` - Format code with Prettier
- `npm run lint` - Check formatting with Prettier

## Code Style
- Use TypeScript with explicit interfaces (see `src/lib/interfaces.ts`)
- Format with Prettier (configured to handle Svelte/Tailwind)
- Use tailwind-merge utility: `import { cn } from '$lib/utils'`
- Import paths: use aliases ($lib/...) over relative paths
- Component naming: PascalCase for filenames, kebab-case for elements
- Prefer explicit types over inferred when introducing new variables
- Use Threlte for 3D components/scenes
- Maintain pixel art style for UI components

## Project Structure
- `/src/lib` - Reusable components and utilities
- `/static` - Static assets (3D models, images, fonts)
- Svelte 5 with TypeScript and TailwindCSS