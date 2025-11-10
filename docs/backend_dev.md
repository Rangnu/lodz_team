Last updated: November 10, 2025 23:30

# Backend Developer Guide

## Stack
- Next.js App Router API routes (`src/app/api/*`)
- TypeScript
- Prisma (installed) – schema TBD
- Bun (package manager/runtime)

## Run the API locally
```powershell
bun install
bun dev
```
Server runs with the web app at http://localhost:3000. API routes are under `/api/*`.

## Current Endpoints
- `POST /api/auth/signin` – accepts `{ email, password }`. On success, issues HttpOnly `token` cookie (mock token). Replace with real auth.
- Other folders exist as placeholders: `/api/posts`, `/api/comments`, `/api/follow`, `/api/user`. Implement handlers inside `route.ts` files.

### Example route (create post)
Create `src/app/api/posts/route.ts`:
```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // Validate body.title/body.content, use DB here.
  return NextResponse.json({ id: "post_123", ...body }, { status: 201 });
}
```

## Auth (temporary → to be replaced)
- Cookie name: `token` (HttpOnly, `sameSite:lax`).
- Replace with signed JWT (e.g., `jsonwebtoken`) and a verification utility.
- Add middleware or server helpers to read/verify token and gate protected routes.

### Suggested next steps
1. Define Prisma schema for `User`, `Post`, `Follow`, `Like`, `Comment`.
2. Implement `/api/auth/signup` and strengthen `/api/auth/signin` (hash passwords with `bcryptjs`).
3. CRUD endpoints:
   - `POST /api/posts` (create)
   - `GET /api/posts` (feed pagination)
   - `GET /api/posts/:id`, `DELETE /api/posts/:id`
   - `POST /api/comments`, `GET /api/comments?postId=...`
   - `POST /api/follow` (follow/unfollow)
4. Add input validation (zod) and proper error codes.
5. Add Ratelimiting where needed.

## Patterns & Utilities
- Return JSON with `NextResponse.json(...)`.
- Read cookies in server components/routes with `cookies()` from `next/headers`.
- For protected APIs, verify token then `return NextResponse.json({ message: "unauthorized" }, { status: 401 })` when invalid.

## Examples
### Reading a cookie in a route
```ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  return NextResponse.json({ token: Boolean(token) });
}
```

### Pagination pattern
```ts
const { searchParams } = new URL(req.url);
const cursor = searchParams.get("cursor"); // e.g., createdAt or id
const size = Number(searchParams.get("size") ?? 20);
// Query database with cursor-based pagination and return nextCursor
```

## Notes
- Do not commit secrets. Environment variables will be documented when added.
- Keep responses small and structured; add `cache: 'no-store'` for dynamic content when needed.
