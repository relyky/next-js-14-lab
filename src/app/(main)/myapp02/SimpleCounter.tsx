"use client"
import { useEffect, useState } from "react"
import ss from "./page.module.css"

export default function SimpleCounter(props: {
	onChange: (count: number) => void
}) {
	const [count, setCount] = useState<number>(0)

	useEffect(() => {
		props.onChange(count)
	}, [count])

	return (
		<div className={ss.box2} style={{textAlign: 'center' }}>
			<code>SimpleCounter.tsx</code>
			<div className={ss.bigText}>{count}</div>
			<button onClick={handleClick}>加１</button>
		</div>
	)

	function handleClick() {
		setCount(c => c + 1)
	}
}
