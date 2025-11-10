'use client';

import { use } from 'react';

export default function ProfilePage({ params }: { params: { username: string } }) {
  const { username } = params;
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Profile: {username}</h1>
      <p className="text-sm text-gray-600">Profile page placeholder.</p>
    </div>
  );
}
