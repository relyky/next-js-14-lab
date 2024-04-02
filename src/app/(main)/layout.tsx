import Link from "next/link";
import { getSession } from "../(auth)/sessionApi";
import NavMenu from "./NavMenu";
import ss from './layout.module.css'
import SignOut from "../(auth)/SignOut";

export default async function MainLayout(props: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await getSession();

	return (
		<div style={{ outline: 'dashed 3px red' }}>
			<header className={ss.header}>
				<div className={ss.logo}>Header</div>

				{session ? (
					<div>{session.username} <SignOut /></div>
				) : (
					<div><Link href='/login'>登入</Link></div>
				)}

			</header>
			<NavMenu />
			<main>
				{session
					? props.children
					: <Link href='/login'>請先登入</Link>
				}
			</main>
			<footer className={ss.footer}>
				<p>Footer</p>
			</footer>
		</div>
	)
}
