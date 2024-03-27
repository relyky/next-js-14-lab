"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

function CustomLink(props: {
	children: React.ReactNode
	href: string
}) {
	const pathname = usePathname()

	const style = useMemo(() => {
		const isActive = props.href === '/'
			? pathname === '/'
			: pathname.startsWith(props.href)

		return isActive ? {
			fontWeight: 'bold',
			color: 'lightgreen',
		} : undefined
	}, [pathname])

	return (
		<Link href={props.href} style={style}>{props.children}</Link>
	)
}

export default function NavMenu() {
	return (
		<nav>
			<ul>
				<li><CustomLink href="/">首頁</CustomLink></li>
				<li><CustomLink href="/MyApp01">Next.js 14 摘要</CustomLink></li>
				<li><CustomLink href="/MyApp02">SSR+CSR 混用</CustomLink></li>
				<li><CustomLink href="/MyApp03">SSR Counter</CustomLink></li>
				<li><CustomLink href="/MyApp04">Recoil Lab</CustomLink></li>
				<li><CustomLink href="/Products">Dynamic Routing</CustomLink></li>
				<li className='dropdown'>
					<span>MyGroup01</span>
					<ul>
						<li><CustomLink href="/MyGroup01/MyFunc0101">MyFunc0101</CustomLink></li>
						<li><CustomLink href="/MyGroup01/MyFunc0102">MyFunc0102</CustomLink></li>
					</ul>
				</li>
			</ul>
		</nav>
	)
}
