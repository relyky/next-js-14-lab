"use client"
import { useEffect, useReducer, useState } from "react";
import SimpleCounter from "./SimpleCounter";
import { Metadata } from "next";
import ss from "./page.module.css";
import InteractiveCounter from "./InteractiveCounter";

export const metadata: Metadata = {
	title: "SSR & CSR 混用",
};

export default function ClientView() {
	const [count, setCount] = useState<number | undefined>()
	const [count2, setCount2] = useState<number | undefined>()
	const [isMounted, dispatchMounted] = useReducer(() => true, false)

	useEffect(() => dispatchMounted(), [])

	if (!isMounted) return; // 不想前端初始畫面被看到。
	return (
		<div className={ss.box2}>
			<code>ClientView.tsx</code>
			<h2>這部份是 CSR。</h2>
			<p>CSR 才能使用 client 端資源。</p>

			<div style={{ display: 'flex', flexFlow:'row wrap', gap:8 }}>
				<SimpleCounter onChange={setCount} />
				<InteractiveCounter onChange={setCount2} />
			</div>

			<div>
				the count in the SimpleCounter: {count}<br />
				the count in the InteractiveCounter: {count2}
			</div>
		</div>
	)
}