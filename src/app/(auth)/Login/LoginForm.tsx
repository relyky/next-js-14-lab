"use client"
import { useState } from "react";
import { signIn } from "../sessionApi";

/**
 * ※此畫面有用到 cookies(), headers(), searchParams 之一，則自動啟用 Dynamically Render。 
 */
export default function LoginForm() {
	const [username, setUsername] = useState('');
	const [message, setMessage] = useState<string | undefined>()

	return (
		<div>
			<input
				type="text"
				value={username}
				placeholder="username"
				onChange={(event) => {
					setUsername(event.target.value);
				}}
			/>
			<button disabled={!username} onClick={handleSubmit}>
				Sign In
			</button>
			<p>{message}</p>
		</div>
	)

	async function handleSubmit() {
		await signIn(username) // 因有變更 cookie 將重刷頁面。
		setMessage('登入完成。')
	}
}
