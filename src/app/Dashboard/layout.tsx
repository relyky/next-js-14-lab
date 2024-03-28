
export default function DashboardLayout(props: {
	children: React.ReactNode
	notifications: React.ReactNode
	revenue: React.ReactNode
	users: React.ReactNode
}) {

	return <div>
		<>{props.children}</>
		<div style={{ display: 'flex' }}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div>{props.users}</div>
				<div>{props.revenue}</div>
			</div>
			<div style={{ display: 'flex', flex: 1 }}>{props.notifications}</div>
		</div>
	</div>
}