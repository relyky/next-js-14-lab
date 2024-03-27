"use client"
import { useState } from "react";
import { increaseValue } from "./serverApi";

export default function MyApp03_PageClient() {
	const [value, setValue] = useState(77)

	return (
		<article>
			<h2>MyApp03 PageClient</h2>

			<h1>{value}</h1>

			<button onClick={async () => {
				const newValue = await increaseValue(value);
				setValue(newValue)
			}}>送出</button>

			<button style={{ marginLeft:10}} onClick={() => {
				throw new Error("模擬出現例外！")
			}}>丟出例外</button>

		</article >
	)

}