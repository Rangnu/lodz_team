import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export default function MainScreen() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-6">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Main Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1 text-sm">
                  <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Home</a>
                  <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Explore</a>
                  <a className="block rounded px-3 py-2 hover:bg-muted" href="#">My Images</a>
                  <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Collections</a>
                  <a className="block rounded px-3 py-2 hover:bg-muted" href="#">History</a>
                  <a className="block rounded px-3 py-2 hover:bg-muted" href="#">Settings</a>
                </nav>
              </CardContent>
            </Card>
          </div>
        </aside>

        <main className="lg:col-span-6 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea placeholder="What's happening?" rows={3} />
                  <div className="mt-2 flex justify-end">
                    <Button>Post</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback>{`U${i}`}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <div className="font-semibold">User {i}</div>
                      <div className="text-xs text-muted-foreground">@handle{i}</div>
                    </div>
                    <div className="ml-auto">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" aria-label="More">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          <DropdownMenuItem>Bookmark</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive">Report</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Sample post content {i}. Your SNS feed items will render here.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-4 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Trending</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="rounded px-3 py-2 hover:bg-muted">#sunset</li>
                  <li className="rounded px-3 py-2 hover:bg-muted">#campus</li>
                  <li className="rounded px-3 py-2 hover:bg-muted">#community</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
