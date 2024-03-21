"use client"
import { useEffect, useReducer, useState } from "react";
import SimpleCounter from "./SimpleCounter";
import { Metadata } from "next";
import ss from "./page.module.css";

export const metadata: Metadata = {
	title: "SSR & CSR 混用",
};

export default function ClientView() {
	const [count, setCount] = useState<number | undefined>()
	const [isMounted, dispatchMounted] = useReducer(() => true, false)

	useEffect(() => dispatchMounted(), [])

	if (!isMounted) return; // 不想前端初始畫面被看到。
	return (
		<div className={ss.box2}>
			<h2>這部份是 CSR。</h2>
			<p>CSR 才能使用 client 端資源。</p>
			<SimpleCounter onChange={setCount} />
			<h2>inner count: {count}</h2>
		</div>
	)
}