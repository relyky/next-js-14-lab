"use client"
import { useReducer } from "react"

//※ styled-jsx 只在前端元件有效
export default function StyledJsxDemo(props: Readonly<{
	label: string
}>) {
	const [red, incRed] = useReducer((n) => n >= 15 ? 0 : n + 1, 8) // 0~15
	const [blue, incBlue] = useReducer((n) => n >= 15 ? 0 : n + 1, 8) // 0~15
	const [green, incGreen] = useReducer((n) => n >= 15 ? 0 : n + 1, 8) // 0~15

	const bgcolor = `#${hex(red)}${hex(green)}${hex(blue)}`
	return (
		<>
			<style jsx>{`
			  div {
					padding: 3rem;
					margin: 1rem;
					background-color: ${bgcolor};
				}
			`}</style>

			<div>
				<p>{props.label} → {bgcolor}</p>
				<button style={{ background: 'red' }} onClick={incRed}>紅</button>
				<button style={{ background: 'green' }} onClick={incGreen}>綠</button>
				<button style={{ background: 'blue' }} onClick={incBlue}>藍</button>
			</div>
		</>
	)
}

function hex(num: number): string {
	return "0123456789ABCDEF".at(num) ?? '8'
}
