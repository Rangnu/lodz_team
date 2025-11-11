import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // Public routes that don't require authentication
  const publicRoutes = ["/", "/login", "/register"];
  const isPublicRoute = publicRoutes.includes(pathname);

  // Auth routes (login, register) - logged in users shouldn't access these
  const isAuthRoute = pathname === "/login" || pathname === "/register";

  // Root path is handled by the page.tsx redirect, so let it through
  if (pathname === "/") {
    return NextResponse.next();
  }

  // If user is logged in and tries to access auth pages, redirect to feed
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/feed", req.url));
  }

  // If user is not logged in and tries to access protected routes
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|uploads).*)",
  ],
};

