
export default function DashboardTemplate(props: {
	children: React.ReactNode
}) {

	return (
		<div style={{ display: 'flex', flexFlow: 'column', flexBasis: '100%' }}>
			<pre>template.tsx</pre>
			{props.children}
		</div>
	)
}