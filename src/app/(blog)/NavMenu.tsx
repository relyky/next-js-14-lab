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
			color: 'forestgreen',
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
				<li><CustomLink href="/blog">官方部落格</CustomLink></li>
				<li><CustomLink href="/about">關於我們</CustomLink></li>
			</ul>
		</nav>
	)
}
