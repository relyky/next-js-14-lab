"use client"
import { useEffect, useState } from "react"
import ss from "./page.module.css"
import { increaseValue } from "./serverApi";

export default function InteractiveCounter(props: {
	onChange: (count: number) => void
}) {
	const [count, setCount] = useState<number>(0)

	useEffect(() => {
		props.onChange(count)
	}, [count])

	return (
		<div className={ss.box2} style={{ flexGrow: 1, textAlign: 'center' }}>
			<code>InteractiveCounter.tsx</code>
			<div className={ss.bigText}>{count}</div>
			<button onClick={handleClick}>加１</button>
			<div style={{textAlign:'left'}}>
				『Interactive』: 讓 client side 與 Server side 互動。<br />
				此例數值在主機端處理，可以檢視通訊封包驗證。</div>
		</div>
	)

	async function handleClick() {
		const newValue = await increaseValue(count);
		setCount(newValue)
	}
}
