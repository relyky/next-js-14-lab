"use client"

//※ styled-jsx 只在前端元件有效

export default function Card(props: {
	children: React.ReactNode,
	style?: object
}) {
	return (
		<>
			<style jsx>{`
				div {					
					padding: 8px;
					margin: 8px;
					border: 1px solid #ddd;
					border-radius: 8px;
					background-color: darkgrey;
					boxShadow: 0 4px 8px 0 rgba(0,0,0,0.2);
				}
			`}</style>

			<div style={props.style}>
				{props.children}
			</div>
		</>
	)
}



