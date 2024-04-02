'use server';

import { cookies } from 'next/headers';
import { decrypt, encrypt } from './encrypt';

const AUTH_SESSION_NAME = 'MY_AUTH_COOKIE'

export type Session = {
  username: string;
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = cookies();
  const session = cookieStore.get(AUTH_SESSION_NAME);

	if (session?.value) {
    try {
      const decrypted = decrypt(session.value);
      return JSON.parse(decrypted) as Session;
    } catch {
      // Ignore invalid session
    }
  }

  return null;
}

async function setSession(session: Session) {
  const cookieStore = cookies();
	const encrypted = encrypt(JSON.stringify(session));
	cookieStore.set(AUTH_SESSION_NAME, encrypted, {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/'
	});
}

async function removeSession() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_SESSION_NAME);
}

export async function signIn(username: string) {
  await setSession({ username });
}

export async function signOut() {
  await removeSession();
}
