"use client";

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

export default function FeedPage() {
  return (
    <div className="min-h-screen p-4 lg:p-6">
      <div className="mx-auto max-w-3xl space-y-4">
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
      </div>
    </div>
  );
}
