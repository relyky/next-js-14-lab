import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-hant">
			<head>
				<link rel="icon" type="image/svg+xml" href="/vite.svg" />
			</head>
			<body className={inter.className}>
				<nav>
					<ul>
						<li><Link href="/">首頁</Link></li>
						<li><Link href="/MyApp01">Next.js 14 摘要</Link></li>
						<li><Link href="/MyApp02">SSR+CSR 混用</Link></li>
						<li><Link href="/MyGroup01/MyFunc0101">MyFunc0101</Link></li>
						<li><Link href="/MyGroup01/MyFunc0102">MyFunc0102</Link></li>
					</ul>
				</nav>
				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
