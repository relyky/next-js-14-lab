"use client"
import { useState } from "react";
import { simsLogin } from "./serverApi";

/**
 * ※此畫面有用到 cookies(), headers(), searchParams 之一，則自動啟用 Dynamically Render。 
 */
export default function LoginPage(props: {
	thisTime: string
}) {
	const [message, setMessage] = useState<string | undefined>()

	return (
		<div>
			<p>開始登入時間: {props.thisTime}</p>
			<button onClick={handleSubmit} >模擬登入</button>
			<p>{message}</p>
		</div>
	)

	async function handleSubmit() {
		const msg = await simsLogin('test')
		setMessage(msg)
	}
}
