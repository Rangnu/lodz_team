Last updated: November 10, 2025 23:36

# Project Structure

Quick map of files and folders for developers. Use this to orient yourself and find code quickly.

```text
.
├─ README.md                     # Quick start, scripts, UI/auth notes
├─ components.json               # shadcn/ui config (paths, style)
├─ package.json                  # Scripts and dependencies
├─ postcss.config.mjs            # Tailwind v4 via @tailwindcss/postcss
├─ next.config.ts                # Next.js config (Turbopack enabled)
├─ tsconfig.json                 # TS paths (alias @/* → src/*)
├─ bun.lock                      # Bun lockfile
├─ prisma/                       # Prisma project folder (schema TBD)
├─ public/                       # Static assets
├─ docs/                         # Documentation (this folder)
│  ├─ frontend_requirements.md   # Product/UI requirements
│  ├─ frontend_dev.md            # Frontend dev guide (setup, patterns, examples)
│  └─ backend_dev.md             # Backend dev guide (API, patterns, examples)
└─ src/
   ├─ app/                       # Next.js App Router
   │  ├─ globals.css             # Tailwind v4 base + design tokens
   │  ├─ layout.tsx              # Root layout; wraps ClientProviders
   │  ├─ page.tsx                # Home: login button (guest) + theme toggle + MainScreen
   │  ├─ (auth)/                 # Auth routes
   │  │  ├─ login/page.tsx       # Login form (email/password)
   │  │  └─ register/page.tsx    # Register page (extend here)
   │  ├─ (main)/                 # Main application routes (SNS sections)
   │  │  ├─ feed/page.tsx        # Feed with composer + sample posts
   │  │  ├─ profile/[username]/  # Dynamic profile route
   │  │  │  └─ page.tsx          # Profile header + sample stats + posts
   │  │  └─ settings/page.tsx    # Account settings form
   │  └─ api/                    # API routes (server functions)
   │     ├─ auth/signin/route.ts # Sign-in: sets HttpOnly token (temporary mock)
   │     ├─ posts/               # Placeholder folder
   │     ├─ comments/            # Placeholder folder
   │     ├─ follow/              # Placeholder folder
   │     └─ user/                # Placeholder folder
   ├─ components/                # Reusable UI and view components
   │  ├─ screens/
   │  │  └─ MainScreen.tsx       # Home screen layout using shadcn components
   │  ├─ layout/
   │  │  └─ Header.tsx           # Simple header (placeholder)
   │  ├─ providers/
   │  │  └─ ClientProviders.tsx  # ThemeProvider + Sonner Toaster
   │  ├─ shared/
   │  │  └─ ThemeToggle.tsx      # Light/Dark toggle button
   │  └─ ui/                     # shadcn/ui generated components
   │     ├─ button.tsx
   │     ├─ input.tsx
   │     ├─ card.tsx
   │     ├─ avatar.tsx
   │     ├─ textarea.tsx
   │     ├─ dialog.tsx
   │     ├─ dropdown-menu.tsx
   │     ├─ sonner.tsx           # Toaster wrapper
   │     └─ README.md
   ├─ lib/
   │  └─ utils.ts                # cn() helper (clsx + tailwind-merge)
   ├─ feed/                      # (reserved/placeholder)
   ├─ forms/                     # (reserved/placeholder)
   ├─ generated/                 # Generated types/code (ignored at runtime)
   ├─ public/                    # App-specific public assets under src
   └─ styles/                    # (reserved/placeholder)
```

## Notes
- App uses Tailwind v4; tokens are defined in `globals.css` and consumed by shadcn components.
- Sonner toasts and ThemeProvider are wired globally in `layout.tsx` via `ClientProviders`.
- Auth is temporary: `/api/auth/signin` sets an HttpOnly `token` cookie. Replace with real JWT.
- Path alias `@/*` is enabled; prefer `@/components/...`, `@/lib/...` over long relative paths.
