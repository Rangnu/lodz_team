"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from "@/components/layout/Header";

export default function ProfilePage({ params }: { params: { username: string } }) {
  const { username } = params;
  return (
    <div className="relative min-h-screen">
      <Header title="Profile" />
      
      <div className="p-4 lg:p-6">
        <div className="mx-auto max-w-3xl space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-semibold">{username}</h1>
                    <p className="text-sm text-muted-foreground">@{username}</p>
                  </div>
                  <Button>Follow</Button>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-4 text-center text-sm">
                  <div><div className="font-semibold">123</div><div className="text-muted-foreground">Posts</div></div>
                  <div><div className="font-semibold">456</div><div className="text-muted-foreground">Followers</div></div>
                  <div><div className="font-semibold">789</div><div className="text-muted-foreground">Following</div></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-lg border p-4">
                <div className="mb-2 text-sm text-muted-foreground">{new Date().toLocaleDateString()}</div>
                <p className="text-sm leading-relaxed">Sample post #{i} by @{username}.</p>
              </div>
            ))}
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
