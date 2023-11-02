import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/auth';

export default function Home() {
  const { user } = useAuth();

  return (
    <div style={{ padding: '40px' }}>
      <p>{`User ID: ${user ? user.uid : 'no user signed in'}`}</p>

      <p>
        <Link href="/authenticated">Go to authenticated route</Link>
      </p>
      <p>
        <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
