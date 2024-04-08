"use client"
import { useState } from "react";
import { increaseValue } from "./serverApi";
import * as utils from '@/app/_lib/utils'

export default function MyApp03_PageClient() {
	const [value, setValue] = useState(77)

	const random = utils.getRandomInt(2)
	if (random === 1) {
		throw new Error("模擬渲染元件時有 1/2 機率出現例外！重新刷新畫面總會成功。")
	}

	return (
		<article>
			<h2>MyApp03 PageClient</h2>
			<h3 style={{ color: "pink" }}>※注意：此元件模擬渲染元件時有 1/2 機率出現例外！</h3>

			<h1>{value}</h1>

			<button onClick={async () => {
				const newValue = await increaseValue(value);
				setValue(newValue)
			}}>送出</button>

			<button style={{ marginLeft: 10 }} onClick={() => {
				throw new Error("模擬 event handling 出現例外！此種例外無法被 ErrorBoundary 補獲。")
			}}>丟出 handling 例外</button>

		</article >
	)

}