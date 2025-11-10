export default function MainScreen() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-6">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-4 space-y-4">
            <div className="p-4 rounded-lg border bg-card">
              <div className="text-sm font-semibold">Main Menu</div>
              <nav className="mt-3 space-y-1 text-sm">
                <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Home</a>
                <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Explore</a>
                <a className="block rounded px-3 py-2 hover:bg-muted" href="#">My Images</a>
                <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Collections</a>
                <a className="block rounded px-3 py-2 hover:bg-muted" href="#">History</a>
                <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Settings</a>
              </nav>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-6 space-y-4">
          <div className="rounded-lg border bg-card p-4">
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div className="flex-1">
                <textarea
                  className="w-full resize-none rounded-md border bg-transparent p-3 outline-none"
                  placeholder="What's happening?"
                  rows={3}
                />
                <div className="mt-2 flex justify-end">
                  <button className="inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-lg border bg-card p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-muted" />
                  <div className="text-sm">
                    <div className="font-semibold">User {i}</div>
                    <div className="text-xs text-muted-foreground">@handle{i}</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed">
                  Sample post content {i}. Your SNS feed items will render here.
                </p>
              </article>
            ))}
          </div>
        </main>

        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-4 space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <div className="text-sm font-semibold">Trending</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="rounded px-3 py-2 hover:bg-muted">#sunset</li>
                <li className="rounded px-3 py-2 hover:bg-muted">#campus</li>
                <li className="rounded px-3 py-2 hover:bg-muted">#community</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
