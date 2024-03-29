"use client"

//※ styled-jsx 只在前端元件有效

export default function Command(props: Readonly<{
	label: string
}>) {
	return (
		<>
			<style jsx>{`
			  button {
					background: green;
				}

				span {
					color: red;
					background: white;
				}
			`}</style>

			<button>
				<span>{props.label}</span>
			</button>
		</>
	)
}
