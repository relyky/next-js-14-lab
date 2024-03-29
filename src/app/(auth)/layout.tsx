
export default function AuthLayout(props: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div style={{ outline: 'dashed 3px red' }}>
			<main>
				{props.children}
			</main>
		</div>
	)
}
