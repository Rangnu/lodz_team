import { auth } from "@/auth";

/**
 * Get the current session on the server side
 * Use this in Server Components, Server Actions, and Route Handlers
 */
export async function getServerSession() {
  return await auth();
}

/**
 * Get the current user from the session
 * Returns null if not authenticated
 */
export async function getCurrentUser() {
  const session = await auth();
  return session?.user ?? null;
}

/**
 * Check if the user is authenticated
 */
export async function isAuthenticated() {
  const session = await auth();
  return !!session?.user;
}
