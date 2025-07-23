# CLAUDE.md - Development Commands & Code Style Guide

## Commands
- `bun dev` - Start dev server with hot reloading
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run check` - Type check and verify SvelteKit sync
- `bun run format` - Format code with Prettier
- `bun run lint` - Check formatting with Prettier

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