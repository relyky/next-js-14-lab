import NavMenu from "./NavMenu";
import ss from './layout.module.css'

export default function MainLayout(props: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div style={{ outline: 'dashed 3px red' }}>
			<header className={ss.header}>
				<p>Header</p>
			</header>
			<NavMenu />
			<main>
				{props.children}
			</main>
			<footer className={ss.footer}>
				<p>Footer</p>
			</footer>
		</div>
	)
}
