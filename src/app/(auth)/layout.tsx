
export default function PageLayout(props: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div style={{ outline: 'dashed 3px red' }}>
			{props.children}
		</div>
	)
}
