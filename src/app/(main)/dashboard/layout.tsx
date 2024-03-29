
export default function DashboardLayout(props: {
	children: React.ReactNode
	notifications: React.ReactNode
	revenue: React.ReactNode
	users: React.ReactNode
}) {

	return <div>
		{props.children}
		<div style={{ display: 'flex' }}>
			<div style={{ flex: '0 0 300px', display: 'flex', flexFlow: 'column' }}>
				{props.users}
				{props.revenue}
			</div>
			<div style={{ flex: '1 0 auto'}}>
				{props.notifications}
			</div>
		</div>
	</div>
}  