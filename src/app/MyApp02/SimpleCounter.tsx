"use client"
import { useEffect, useState } from "react"

export default function SimpleCounter(props: {
	onChange: (count: number) => void
}) {
	const [count, setCount] = useState<number>(0)

	useEffect(()=>{
		props.onChange(count)
	},[count])

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleClick}>加１</button>
		</div>
	)

	function handleClick() {
		setCount(c => c + 1)
	}
}