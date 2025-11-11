"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
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
import { Home, Search, Bell, User, Settings, MoreHorizontal } from "lucide-react";
import Header from "@/components/layout/Header";

export default function FeedPage() {
  const { data: session } = useSession();

  return (
    <div className="relative min-h-screen">
      <Header title="Feed" />

      {/* Feed Layout with Sidebar */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-6">
        {/* Left Sidebar - Navigation */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1 text-sm">
                  <Link 
                    href="/feed" 
                    className="flex items-center gap-3 rounded px-3 py-2 hover:bg-muted bg-muted font-medium"
                  >
                    <Home className="size-4" />
                    Home
                  </Link>
                  <Link 
                    href="/explore" 
                    className="flex items-center gap-3 rounded px-3 py-2 hover:bg-muted"
                  >
                    <Search className="size-4" />
                    Explore
                  </Link>
                  <Link 
                    href="/notifications" 
                    className="flex items-center gap-3 rounded px-3 py-2 hover:bg-muted"
                  >
                    <Bell className="size-4" />
                    Notifications
                  </Link>
                  <Link 
                    href="/profile" 
                    className="flex items-center gap-3 rounded px-3 py-2 hover:bg-muted"
                  >
                    <User className="size-4" />
                    Profile
                  </Link>
                  <Link 
                    href="/settings" 
                    className="flex items-center gap-3 rounded px-3 py-2 hover:bg-muted"
                  >
                    <Settings className="size-4" />
                    Settings
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main Feed Content */}
        <main className="lg:col-span-6 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Create post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea placeholder="Share something..." rows={3} />
                <div className="mt-2 flex justify-end">
                  <Button>Post</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
                Post content {i}. This page lists posts for authenticated users.
              </p>
            </CardContent>
          </Card>
        ))}
        </main>

        {/* Right Sidebar - User Profile & Suggestions */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-20 space-y-4">
            {/* User Profile Card */}
            <Card>
              <CardContent className="pt-6 pb-4">
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Profile Picture */}
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-2xl">
                      {session?.user?.name?.[0]?.toUpperCase() || 
                       session?.user?.email?.[0]?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Profile Button */}
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </Button>
                  
                  {/* Followers and Following Stats */}
                  <div className="grid grid-cols-2 gap-4 w-full pt-2">
                    <div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                      <div className="text-lg font-semibold">0</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Following</div>
                      <div className="text-lg font-semibold">0</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Who to follow</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { name: "John Doe", handle: "johndoe" },
                    { name: "Jane Smith", handle: "janesmith" },
                    { name: "Bob Wilson", handle: "bobwilson" },
                  ].map((user) => (
                    <li key={user.handle} className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 text-sm">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">@{user.handle}</div>
                      </div>
                      <Button size="sm" variant="outline">Follow</Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  );
}
