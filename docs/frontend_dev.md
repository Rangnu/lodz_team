Last updated: November 10, 2025 23:28

# Frontend Developer Guide

## Stack
- Next.js App Router (v15+/16 canary)
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- shadcn/ui + Radix UI
- Sonner (toasts)
- TypeScript
- Bun (package manager/runtime)

## Getting Started
```powershell
bun install
bun dev
```
Open http://localhost:3000

## Project Structure (app)
- `src/app/page.tsx` – Home. Shows Login button (guests) + Theme toggle.
- `src/app/(auth)/login/page.tsx` – Login form (email, password).
- `src/app/(auth)/register/page.tsx` – Registration placeholder (extend here).
- `src/app/(main)/feed/page.tsx` – Feed with composer + sample posts.
- `src/app/(main)/profile/[username]/page.tsx` – Profile page.
- `src/app/(main)/settings/page.tsx` – Account settings form.
- `src/app/api/**` – API routes (auth, posts, etc.).

## UI Components
- Components generated under `src/components/ui/*` (button, input, card, avatar, textarea, dialog, dropdown-menu, sonner)
- Utilities: `src/lib/utils.ts` (`cn`)
- Providers: `src/components/providers/ClientProviders.tsx` (ThemeProvider + Toaster)
- Theme toggle: `src/components/shared/ThemeToggle.tsx`

### Using shadcn/ui
```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Example(){
  return (
    <Card>
      <CardHeader><CardTitle>Title</CardTitle></CardHeader>
      <CardContent>
        <Button>Click</Button>
      </CardContent>
    </Card>
  );
}
```

### Adding components
```powershell
bunx shadcn@latest add badge tabs skeleton
```

## Styling
- Tailwind v4 utilities available in `src/app/globals.css`.
- Design tokens (colors, radius) are defined via CSS variables and `@theme` block.

## Auth (temporary)
- `/api/auth/signin` issues a mock `token` cookie. Replace with real JWT later.
- Home reads `token` cookie to show/hide the Login button.

## Common Tasks
- Create a new route: add `page.tsx` under `src/app/<segment>`.
- Protected UI: check cookie on server and redirect guests, or show a CTA.
- Toasts: `import { toast } from "sonner"; toast.success("Done");`

## Conventions
- Use path alias `@/*` (e.g., `@/components/...`).
- Keep UI in shadcn components; wrap/customize rather than editing generated files directly.

## Troubleshooting
- If Tailwind styles don’t apply, ensure `globals.css` is imported in `src/app/layout.tsx`.
- If icons missing, verify `lucide-react` import and JSX.
- If toasts not showing, check `ClientProviders` is wrapping the app.
