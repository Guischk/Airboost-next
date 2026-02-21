# AGENTS.md

## Project Overview

Next.js 16 App Router project (React 19) using TypeScript strict mode, Tailwind CSS v4, and shadcn/ui (`radix-nova` style). Early-stage UI component library -- no data layer, auth, or tests yet.

## Build / Lint / Test Commands

Package manager: **Bun** (not npm/yarn/pnpm).

```bash
bun install              # Install dependencies
bun run dev              # Start dev server (next dev)
bun run build            # Production build (next build)
bun run start            # Start production server
bun run lint             # ESLint (flat config, ESLint 9+)
```

No test framework is configured. No `*.test.*` or `*.spec.*` files exist. When adding tests, use **Vitest** (recommended for Next.js + Bun). A single test would be run via `bunx vitest run path/to/file.test.ts`.

## Project Structure

```
app/                     # App Router: pages, layouts, global CSS
  globals.css            # Tailwind v4 CSS-first config + design tokens (oklch)
  layout.tsx             # Root layout (server component)
  page.tsx               # Home page (server component)
components/              # All React components
  ui/                    # shadcn/ui primitives (13 files, one family per file)
  *.tsx                  # App-specific composition components
lib/
  utils.ts               # cn() helper (clsx + tailwind-merge)
public/                  # Static assets
postcss.config.mjs       # PostCSS with @tailwindcss/postcss plugin
```

No `src/` wrapper. No `hooks/` directory yet (aliased in `components.json` for future use).

## Path Aliases

Single alias in `tsconfig.json`: `@/* -> ./*` (project root). Always use `@/` for internal imports:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```

## Code Style

### Imports

Three groups separated by blank lines:

1. React / framework (`"react"`, `"next/..."`)
2. Third-party (`"radix-ui"`, `"class-variance-authority"`, `"lucide-react"`)
3. Internal (`@/...`)

```ts
import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
```

Use `import type` or inline `type` for type-only imports:

```ts
import type { Metadata } from "next";
```

### Components

- **Function declarations only** -- never arrow functions or class components.
- Pages/layouts: `export default function PageName(...)`.
- UI primitives: named `function` + grouped `export { ... }` at bottom of file. No default exports.
- Add `"use client"` only when the file uses client APIs (state, effects, event handlers, Radix primitives). Omit for pure-render server-compatible components.

### Props & Types

- **Inline types at parameter level** -- no separate `interface`/`type` for component props unless shared across files.
- Extend HTML/Radix props with `React.ComponentProps<>` + intersection (`&`):

```ts
function Input({ className, type, ...props }: React.ComponentProps<"input">) { ... }

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) { ... }

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> &
  { asChild?: boolean }) { ... }
```

- Default values are destructured inline.
- Use `VariantProps<typeof xVariants>` for CVA variant types.
- No shared type files -- types live inline within component files.

### Naming Conventions

| Element             | Convention | Example                               |
| ------------------- | ---------- | ------------------------------------- |
| Files               | kebab-case | `alert-dialog.tsx`, `input-group.tsx` |
| Components          | PascalCase | `AlertDialog`, `InputGroupButton`     |
| Variables/hooks     | camelCase  | `buttonVariants`, `useComboboxAnchor` |
| CVA variant objects | camelCase  | `buttonVariants`, `badgeVariants`     |
| Data attributes     | data-slot  | `data-slot="card-header"`             |

### Styling

- **Tailwind CSS v4** -- CSS-first config in `globals.css` (no `tailwind.config.*`).
- Use `cn()` from `@/lib/utils` for all className merging.
- Use **CVA** for component variants (not all components need it -- simple ones use `cn()` directly).
- Design tokens are semantic CSS custom properties in oklch color space (`--primary`, `--muted`, `--destructive`).
- Every component renders `data-slot="component-name"` on its root element for CSS targeting.
- Components with variants also render `data-variant` and `data-size` attributes.
- `asChild` pattern uses `Slot.Root` from `"radix-ui"` to render as a child element.

```ts
const buttonVariants = cva("inline-flex items-center ...", {
  variants: { variant: { default: "...", destructive: "..." } },
  defaultVariants: { variant: "default" },
});
```

### Error Handling

- Use `FieldError` from `@/components/ui/field` for form validation errors.
- Apply `aria-invalid` on inputs for error states (styled via Tailwind's `aria-invalid:` modifier).
- No global error boundaries or try/catch patterns established yet.

### ESLint

Flat config (`eslint.config.mjs`, ESLint 9+) extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. No Prettier -- do not add Prettier config or dependencies.

### shadcn/ui

- Style: `radix-nova` | Icons: `lucide-react` | RSC: `true`
- Add components: `bunx shadcn@latest add <component>`
- Aliases: `@/components/ui` (primitives), `@/lib/utils` (utilities), `@/hooks` (hooks)

### General Principles

- Always spread `...props` on root elements for consumer customization.
- Prefer composition over configuration -- small, composable components.
- Import directly from component file paths, never from barrel/index files.
- Keep components self-contained: styles, types, and logic in one file.
- TypeScript strict mode -- no `any`, no implicit returns.
