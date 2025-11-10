import Link from "next/link";
import { cookies } from "next/headers";
import MainScreen from "../components/screens/MainScreen";

export default async function Home() {
  const cookieStore = await cookies();
  const isAuthed = Boolean(cookieStore.get("token")?.value);
  return (
    <div className="relative">
      {!isAuthed && (
        <div className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto max-w-7xl flex items-center justify-end p-3">
            <Link
              href="/login"
              className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
            >
              Login
            </Link>
          </div>
        </div>
      )}
      <MainScreen />
    </div>
  );
}
