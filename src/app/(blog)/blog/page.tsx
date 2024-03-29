import Link from "next/link";

export default function AboutPage() {
	return (
		<article role="container">
			<h1>官方部落格</h1>
			<p>放置公開資訊</p>
			<Link href='/'>回到首頁</Link>
		</article>
	)
}