# AGENTS.md

## Product Context

**Airboost** is an open-source, high-performance SQLite cache for Airtable -- 240x faster queries, zero-downtime updates, real-time webhooks. This repository is the **marketing landing page** for Airboost, hosted at **https://airboost.dev**.

- **Main product repo**: https://github.com/Guischk/AirBoost (Bun + Elysia + SQLite backend)
- **This repo**: Next.js 16 App Router marketing site with i18n (en/fr)
- **Reference files**: `references/README.md` and `references/README_RAILWAY.md` contain product copy and feature descriptions -- use them as source of truth for marketing content.

## Tech Stack

| Layer           | Technology                      | Version      |
| --------------- | ------------------------------- | ------------ |
| Framework       | Next.js (App Router)            | 16.1.6       |
| React           | React + React DOM               | 19.2.3       |
| Language        | TypeScript (strict mode)        | 5.9+         |
| Styling         | Tailwind CSS v4 (CSS-first)     | 4.2+         |
| UI Library      | shadcn/ui (`radix-nova` style)  | latest       |
| Effects         | MagicUI                         | via registry |
| Animations      | Motion (formerly Framer Motion) | 12.x         |
| i18n            | next-intl                       | 4.8+         |
| Icons           | lucide-react                    | 0.575+       |
| Variants        | class-variance-authority (CVA)  | 0.7+         |
| Analytics       | Vercel Analytics                | 1.6+         |
| Package Manager | **Bun** (not npm/yarn/pnpm)     |              |

## Build / Lint / Format Commands

```bash
bun install              # Install dependencies
bun run dev              # Start dev server (next dev)
bun run build            # Production build (next build)
bun run start            # Start production server
bun run lint             # ESLint (flat config, ESLint 9+)
bun run format           # Prettier with tailwind-plugin (format all files)
```

No test framework is configured. No `*.test.*` or `*.spec.*` files exist. When adding tests, use **Vitest** (recommended for Next.js + Bun). A single test would be run via `bunx vitest run path/to/file.test.ts`.

## Project Structure

```
app/                          # App Router root
  globals.css                 # Tailwind v4 CSS-first config + design tokens (oklch)
  favicon.ico                 # Favicon (also /public/airboost_favicon.svg)
  robots.ts                   # SEO robots rules
  sitemap.ts                  # SEO sitemap generation
  [locale]/                   # i18n dynamic segment (en, fr)
    layout.tsx                # Root layout (server component, dark mode default)
    page.tsx                  # Home / landing page (server component)
    debug/page.tsx            # Visual reference: base components
    shadebug/page.tsx         # Visual reference: shadcn/ui components
components/
  base/                       # Foundational layout/typography primitives
    container.tsx             # Max-width wrapper (max-w-7xl)
    grid.tsx                  # Responsive grid with CVA (cols: 1-4/12, gap variants)
    link.tsx                  # Smart internal/external link (uses next-intl navigation)
    paragraph.tsx             # Styled paragraph with CVA (variant, size)
    section.tsx               # Semantic <section> with spacing variants
    title.tsx                 # Heading component with CVA (variant, size, header tag)
  ui/                         # UI primitives (shadcn/ui + MagicUI)
    # shadcn/ui (14 files):
    alert-dialog.tsx          badge.tsx           button.tsx
    card.tsx                  combobox.tsx        dropdown-menu.tsx
    field.tsx                 input.tsx           input-group.tsx
    label.tsx                 select.tsx          separator.tsx
    tabs.tsx                  textarea.tsx
    # MagicUI (8 files):
    animated-beam.tsx         blur-fade.tsx       border-beam.tsx
    dot-pattern.tsx           magic-card.tsx      marquee.tsx
    number-ticker.tsx         shimmer-button.tsx
  *.tsx                       # Page-section components (8 files):
    navbar.tsx                hero.tsx            hero-perf-cards.tsx
    works-with.tsx            features.tsx        quick-start.tsx
    deploy-cta.tsx            footer.tsx
i18n/
  routing.ts                  # Locale config: ["en", "fr"], default "en", prefix "as-needed"
  request.ts                  # Server-side request config (loads messages JSON)
  navigation.ts               # Typed navigation: Link, redirect, usePathname, useRouter, getPathname
messages/
  en.json                     # English translations (flat namespace: Metadata, Navbar, Hero, etc.)
  fr.json                     # French translations (same structure)
lib/
  utils.ts                    # cn() helper (clsx + tailwind-merge)
proxy.ts                      # Next.js middleware (next-intl locale routing)
public/                       # Static assets
postcss.config.mjs            # PostCSS with @tailwindcss/postcss plugin
```

No `src/` wrapper. No `hooks/` directory yet (aliased in `components.json` for future use).

## Path Aliases

Single alias in `tsconfig.json`: `@/* -> ./*` (project root). Always use `@/` for internal imports:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/base/container";
import { Link } from "@/i18n/navigation";
```

## Internationalization (next-intl)

### Configuration

- **Locales**: `en` (default), `fr`
- **Locale prefix**: `"as-needed"` -- no `/en` prefix for the default locale, `/fr` for French
- **Production URLs**: `https://airboost.dev` (en), `https://airboost.dev/fr` (fr)
- **Middleware**: `proxy.ts` at project root handles locale detection and routing
- **Plugin**: `next.config.ts` wraps config with `createNextIntlPlugin()`

### File Structure

| File                 | Purpose                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------- |
| `i18n/routing.ts`    | Locale list, default locale, prefix strategy                                            |
| `i18n/request.ts`    | Server-side config: loads `messages/{locale}.json`                                      |
| `i18n/navigation.ts` | Typed navigation exports: `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname` |
| `messages/en.json`   | English translations                                                                    |
| `messages/fr.json`   | French translations (must mirror `en.json` structure exactly)                           |

### Translation Namespaces

Messages are organized by component/section namespace:

```json
{
  "Project": { "name": "...", "description": "...", "tagline": "..." },
  "Metadata": { "title": "...", "description": "...", "ogTitle": "...", "ogDescription": "..." },
  "Navbar": { "features": "...", "github": "...", "deployNow": "..." },
  "Hero": { "badge": "...", "titleBefore": "...", "titleHighlight": "...", "..." },
  "WorksWith": { "..." },
  "Features": { "title": "...", "subtitle": "...", "blazingFast": { "name": "...", "description": "..." }, "..." },
  "QuickStart": { "..." },
  "Deploy": { "..." },
  "Footer": { "..." }
}
```

### Usage Patterns

**Server Components** (preferred -- most components are server components):

```ts
import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations();
  return <h1>{t("Hero.titleBefore")}</h1>;
}

// Or with namespace scoping:
const t = await getTranslations("Features");
t("blazingFast.name"); // "Sub-ms Queries"
```

**Client Components** (only when necessary):

```ts
"use client";
import { useTranslations } from "next-intl";

function MyClientComponent() {
  const t = useTranslations("Navbar");
  return <span>{t("features")}</span>;
}
```

**Metadata** (in `layout.tsx`):

```ts
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return { title: t("title"), description: t("description") };
}
```

**Internal Links** (always use next-intl's `Link`):

```ts
import { Link } from "@/i18n/navigation";
<Link href="/#features">{t("Navbar.features")}</Link>
```

### Adding a New Translation Key

1. Add the key to **both** `messages/en.json` and `messages/fr.json` under the appropriate namespace
2. Use `t("Namespace.key")` in the component
3. For nested keys: `t("Features.newFeature.name")` with structure `{ "Features": { "newFeature": { "name": "..." } } }`
4. Always keep both language files in sync -- missing keys cause runtime errors

### Adding a New Page

Every page lives under `app/[locale]/`:

```ts
// app/[locale]/new-page/page.tsx
import { setRequestLocale } from "next-intl/server";

export default async function NewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  // ...
}
```

## Code Style

### Imports

Three groups separated by blank lines:

1. React / framework (`"react"`, `"next/..."`, `"next-intl/..."`)
2. Third-party (`"radix-ui"`, `"class-variance-authority"`, `"lucide-react"`, `"motion"`)
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
- Pages/layouts: `export default function PageName(...)` or `export default async function PageName(...)`.
- UI primitives: named `function` + grouped `export { ... }` at bottom of file. No default exports.
- Page-section components: named `export async function Hero()` (async for server components using `getTranslations()`).
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

| Element             | Convention | Example                                |
| ------------------- | ---------- | -------------------------------------- |
| Files               | kebab-case | `alert-dialog.tsx`, `input-group.tsx`  |
| Components          | PascalCase | `AlertDialog`, `InputGroupButton`      |
| Variables/hooks     | camelCase  | `buttonVariants`, `useComboboxAnchor`  |
| CVA variant objects | camelCase  | `buttonVariants`, `badgeVariants`      |
| Data attributes     | data-slot  | `data-slot="card-header"`              |
| i18n namespaces     | PascalCase | `"Hero"`, `"Features"`, `"QuickStart"` |
| i18n keys           | camelCase  | `"titleBefore"`, `"deployNow"`         |

## Styling

### Tailwind CSS v4

- **CSS-first config** in `globals.css` (no `tailwind.config.*` file).
- Use `cn()` from `@/lib/utils` for all className merging.
- PostCSS plugin: `@tailwindcss/postcss` in `postcss.config.mjs`.
- Animation utilities from `tw-animate-css` package.

### Design Tokens (oklch)

All color tokens use the **oklch** color space, defined as CSS custom properties in `globals.css`:

```css
:root {
  --primary: oklch(0.34 0.16 261.75); /* Deep indigo */
  --secondary: oklch(0.88 0.18 94.9); /* Warm yellow */
  --accent: oklch(0.76 0.15 231.69); /* Sky blue */
  --destructive: oklch(0.64 0.24 14.52); /* Red */
  --muted: oklch(0.967 0.003 264.542);
  --muted-foreground: oklch(0.551 0.027 264.364);
  --background: oklch(1 0 0); /* White */
  --foreground: oklch(0.13 0.028 261.692); /* Near-black */
  --radius: 0.625rem;
  /* + card, popover, border, input, ring, chart-1..5, sidebar-* tokens */
}

.dark {
  --background: oklch(0.1 0.02 265);
  --primary: oklch(0.62 0.22 265);
  /* ... all tokens have dark overrides */
}
```

Tokens are consumed via Tailwind's `@theme inline` block mapping `--color-*` to CSS variables.

### Dark Mode

- Dark mode is **on by default** (`className="dark"` on `<html>` in `layout.tsx`).
- Toggled via `.dark` class on `<html>` element.
- Custom variant: `@custom-variant dark (&:is(.dark *))` in `globals.css`.
- No dark mode toggle UI exists yet -- dark is the only active theme.

### CVA Variants

Use **CVA** for components with multiple visual variants:

```ts
const buttonVariants = cva("inline-flex items-center ...", {
  variants: {
    variant: { default: "...", destructive: "..." },
    size: { default: "...", lg: "..." },
  },
  defaultVariants: { variant: "default", size: "default" },
});
```

- Not all components need CVA -- simple ones use `cn()` directly.
- Every component renders `data-slot="component-name"` on its root element.
- Components with variants also render `data-variant` and `data-size` attributes.
- `asChild` pattern uses `Slot.Root` from `"radix-ui"` to render as a child element.

### Animations (Motion)

The `motion` package (v12+, successor to Framer Motion) is available for animations. MagicUI components use it internally (e.g., `BlurFade`, `NumberTicker`). Custom keyframe animations are also defined in `globals.css` (`@theme inline` block): `shiny-text`, `aurora`, `gradient`, `shimmer-slide`, `spin-around`, `marquee`, `marquee-vertical`.

## Component Architecture

### Three-Layer System

```
components/ui/         -> Primitives (shadcn/ui + MagicUI) -- generic, reusable
components/base/       -> Layout/typography foundations -- project-specific, composable
components/*.tsx        -> Page sections -- compose base + ui, use translations
```

### UI Primitives (shadcn/ui)

14 shadcn/ui component files following the `radix-nova` style. Add new components with:

```bash
bunx shadcn@latest add <component>
```

Configuration in `components.json`: style `radix-nova`, icons `lucide-react`, RSC `true`.

### MagicUI Effects

8 MagicUI component files for visual effects and animations. Registry configured in `components.json`:

```json
"registries": { "@magicui": "https://magicui.design/r/{name}" }
```

Add new MagicUI components with:

```bash
bunx shadcn@latest add "https://magicui.design/r/<component>"
```

Current MagicUI components: `animated-beam`, `blur-fade`, `border-beam`, `dot-pattern`, `magic-card`, `marquee`, `number-ticker`, `shimmer-button`.

### Base Components

6 foundational layout/typography components in `components/base/`:

| Component   | Purpose                              | Key Props                                 |
| ----------- | ------------------------------------ | ----------------------------------------- |
| `Container` | Max-width centered wrapper (7xl)     | `asChild`                                 |
| `Grid`      | Responsive grid                      | `cols` (1-4, 12), `gap`, `asChild`        |
| `Section`   | Semantic `<section>` with spacing    | `spacing` (default/sm/lg/none), `asChild` |
| `Title`     | Heading element with polymorphic tag | `header` (h1-h6), `variant`, `size`       |
| `Paragraph` | Styled `<p>`                         | `variant`, `size`                         |
| `Link`      | Smart internal/external link         | `href`, `isExternal` (auto-detected)      |

All base components follow the same patterns as UI primitives: `data-slot`, `cn()`, spread `...props`, CVA where needed.

### Page Sections

8 page-section components compose the landing page:

```
Navbar -> Hero -> WorksWith -> Features -> QuickStart -> DeployCTA -> Footer
               |-> HeroPerfCards (sub-component)
```

These are **async server components** that call `getTranslations()` for i18n. They compose base + ui components.

### Debug Pages

Two debug pages exist for visual component testing:

- **`/debug`** -- renders all base components (Title, Paragraph, Container, Section, Grid, Link)
- **`/shadebug`** -- renders all shadcn/ui components (Button, Badge, Card, Input, Textarea, Select, Combobox, DropdownMenu, AlertDialog, Separator)

Use these pages during development to verify component appearance after changes.

## SEO & Metadata

- **Production URL**: `https://airboost.dev`
- **robots.ts**: allows all crawlers, points to sitemap
- **sitemap.ts**: generates entries for `/` (en) and `/fr` with `alternates.languages`
- **Metadata**: generated per-locale in `app/[locale]/layout.tsx` via `generateMetadata()` using `next-intl` translations from the `"Metadata"` namespace
- **Open Graph & Twitter**: title, description, locale, `summary_large_image` card
- **Canonical URLs**: `alternates.canonical` set per locale with `alternates.languages` for hreflang
- **`generateStaticParams()`**: exports all locales for static generation
- **Favicon**: `app/favicon.ico` + `public/airboost_favicon.svg`

## Error Handling

- Use `FieldError` from `@/components/ui/field` for form validation errors.
- Apply `aria-invalid` on inputs for error states (styled via Tailwind's `aria-invalid:` modifier).
- No global error boundaries (`error.tsx`, `not-found.tsx`) or try/catch patterns established yet.

## ESLint & Formatting

- **ESLint**: flat config (`eslint.config.mjs`, ESLint 9+) extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- **Prettier**: configured with `prettier-plugin-tailwindcss` for automatic class sorting. Run via `bun run format`.
- No `.prettierrc` file -- uses Prettier defaults + the tailwind plugin.

## AI Agent Skills

Load the appropriate skill(s) before starting work. Use the `skill` tool with the skill name.

### Always Relevant

| Skill             | When to Load                                                                |
| ----------------- | --------------------------------------------------------------------------- |
| `nextjs-core`     | Any Next.js work: pages, layouts, routing, data fetching, metadata, caching |
| `shadcn-ui`       | Adding/modifying shadcn/ui components, checking available components        |
| `tailwind-css`    | Styling work, responsive design, dark mode, utility classes                 |
| `typescript-core` | Complex type patterns, generics, strict mode issues                         |
| `frontend-design` | Building new pages, sections, or polished UI components                     |
| `zod`             | Adding form validation, API input validation, runtime type checking         |

### For Performance & SEO

| Skill                          | When to Load                                                       |
| ------------------------------ | ------------------------------------------------------------------ |
| `web-performance-optimization` | Core Web Vitals, image/font optimization, bundle size              |
| `seo-audit`                    | Auditing SEO: meta tags, robots, sitemap, technical SEO issues     |
| `schema-markup`                | Adding JSON-LD structured data (Product, SoftwareApplication, FAQ) |

### For Marketing & Conversion

| Skill          | When to Load                                                        |
| -------------- | ------------------------------------------------------------------- |
| `page-cro`     | Optimizing landing page conversion: hero, CTAs, social proof        |
| `copywriting`  | Writing or rewriting marketing copy (headlines, descriptions, CTAs) |
| `copy-editing` | Reviewing and polishing existing copy                               |

### On Demand

| Skill                  | When to Load                                        |
| ---------------------- | --------------------------------------------------- |
| `nextjs-v16`           | Next.js 16 specific features or migration questions |
| `nextjs-env-variables` | Adding environment variables                        |
| `api-design-patterns`  | If API routes are added                             |

## General Principles

- Always spread `...props` on root elements for consumer customization.
- Prefer composition over configuration -- small, composable components.
- Import directly from component file paths, never from barrel/index files.
- Keep components self-contained: styles, types, and logic in one file.
- TypeScript strict mode -- no `any`, no implicit returns.
- All user-facing text must go through `next-intl` translations -- never hardcode strings.
- Server components by default; `"use client"` only when required.
