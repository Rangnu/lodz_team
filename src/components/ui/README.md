Last updated: November 10, 2025 23:09

This folder contains shadcn/ui components generated via the CLI.

Commands used:

- `bunx shadcn@latest init --defaults`
- `bunx shadcn@latest add button input card avatar textarea dialog dropdown-menu sonner`

Notes:

- Path aliases are configured (`@/components/ui`, `@/lib/utils`).
- Tailwind v4 is active; components rely on `src/app/globals.css` tokens.
- Toasts use Sonner (`@/components/ui/sonner`). The provider is wired in `src/app/layout.tsx` via `ClientProviders`.
Do not edit generated files directly; prefer re-generating via CLI or wrapping them.
