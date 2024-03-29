"use client"

import { useEffect, useState } from "react"
import { getBigData } from "./serverApi"

// React Client Componet 不支援 async/await 語法。bundle 可成功但無法執行。
export default function FooComp() {
	const [bigData, setBigData] = useState('loading...')

	useEffect(() => {
		getBigData(1000)
			.then(setBigData);
	}, [])

	return (
		<h1>FooComp → {bigData}</h1>
	)
}
