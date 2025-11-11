"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";

export default function SettingsPage() {
  return (
    <div className="relative min-h-screen">
      <Header title="Settings" />
      
      <div className="p-4 lg:p-6">
        <div className="mx-auto max-w-3xl space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm" htmlFor="displayName">Display name</label>
                <Input id="displayName" placeholder="Your display name" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm" htmlFor="email">Email</label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm" htmlFor="password">New password</label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm" htmlFor="confirm">Confirm password</label>
                  <Input id="confirm" type="password" placeholder="••••••••" />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" type="button">Cancel</Button>
                <Button type="submit">Save changes</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
