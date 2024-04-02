'use client';

import { signOut } from "./sessionApi";

export default function SignOut() {
	return (
		<button onClick={handleSignOut}>
			登出
		</button>
	)

	async function handleSignOut() {
		await signOut()
	}
}
