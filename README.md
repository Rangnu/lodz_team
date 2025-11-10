Last updated: November 10, 2025 23:25

## Quick Start

This is a Next.js App Router project using Tailwind v4, shadcn/ui, and Bun.

### Prerequisites
- Node 18+ (recommended even when using Bun)
- Bun 1.3+ (Windows install via PowerShell):

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -Command "iwr https://bun.sh/install.ps1 -UseBasicParsing | iex"
```

### Install & Run (Bun)

```powershell
bun install
bun dev
```

Open http://localhost:3000

### Available Scripts
- `bun dev` – start dev server (Turbopack)
- `bunx next build` – production build
- `bunx next start` – start production server
- `bunx eslint` – run linter

### UI System
- Tailwind CSS v4 via `@tailwindcss/postcss`
- shadcn/ui components in `src/components/ui`
- Sonner toasts wired in `src/app/layout.tsx` via `ClientProviders`
- Theme toggle lives in `src/components/shared/ThemeToggle.tsx`

### Adding More UI Components (shadcn/ui)

```powershell
bunx shadcn@latest add <component-name>
# example:
bunx shadcn@latest add badge skeleton tabs
```

### Auth (temporary)
- `/api/auth/signin` sets an HttpOnly `token` cookie with a mock value.
- Replace this with real credential checking and JWT issuing later.

---

Original Next.js notes below
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
