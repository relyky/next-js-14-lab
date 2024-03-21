"use client"
import { useState } from "react";
import { increaseValue } from "./pageServer";
import ss from "./page.module.css";

export default function MyApp03Client() {
	const [value, setValue] = useState(77)

	return (
		<article>
			<h2>MyApp03 Client</h2>

			<h1>{value}</h1>

			<button onClick={async () => {
				const newValue = await increaseValue(value);
				setValue(newValue)
			}}>送出</button>

		</article>
	)

}