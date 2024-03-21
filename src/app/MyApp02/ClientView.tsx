"use client"
import { useState } from "react";
import SimpleCounter from "./SimpleCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SSR & CSR 混用",
};

export default function ClientView() {
	const [count, setCount] = useState<number | undefined>()
	return (
		<div>
			<h2>這部份是CSR。</h2>
			<SimpleCounter onChange={setCount} />
			<h2>inner count: {count}</h2>
		</div>
	)
}