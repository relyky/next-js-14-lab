"use client"
import { useState } from "react";
import SimpleCounter from "./SimpleCounter";

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