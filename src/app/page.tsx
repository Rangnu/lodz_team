import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  const isAuthed = !!session?.user;

  // Redirect users to page based on auth
  if (isAuthed) {
    redirect("/feed");
  } else {
    redirect("/login");
  }
}
