/* eslint-disable no-shadow */
/* eslint-disable no-console */

import nookies from 'nookies';
import { useRouter } from 'next/router';
import { firebaseClient } from '@/services/Auth/firebaseClient';
import React, { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});

export function AuthProvider({ children }: any) {
  const router = useRouter();
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).nookies = nookies;
    }

    firebaseClient.auth().onAuthStateChanged(user => {
      if (!user && router.asPath === '/conta') {
        router.push('/login');
      }
    });

    return firebaseClient.auth().onIdTokenChanged(async user => {
      if (!user) {
        console.log('no token found...');
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        return;
      }

      console.log('updating token...');
      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, { path: '/' });
    });
  }, [router]);

  // refresh token
  useEffect(() => {
    const handle = setInterval(
      async () => {
        console.log('refreshing token...');
        const user = firebaseClient.auth().currentUser;
        if (user) await user.getIdToken(true);
      },
      10 * 60 * 1000,
    );
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
