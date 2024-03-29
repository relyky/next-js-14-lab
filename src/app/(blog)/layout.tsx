import NavMenu from "./NavMenu";

export default function NoLayout(props: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div style={{ outline: 'dashed 3px red' }}>
			<header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
				<NavMenu />
			</header>
			<main>
				{props.children}
			</main>
			<footer style={{ textAlign: 'center', backgroundColor: 'ghostwhite', padding: '1rem', color: 'darkgrey' }}>
				<p>blog footer</p>
			</footer>
		</div>
	)
}
