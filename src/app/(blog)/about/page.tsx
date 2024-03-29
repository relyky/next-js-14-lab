import Link from "next/link";

export default function AboutPage() {
	return (
		<article role="container">
			<h1>關於我們 {new Date().toLocaleTimeString()}</h1>
			<Link href='/'>回到首頁</Link>
		</article>
	)
}