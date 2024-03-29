import Link from "next/link";

export default function MainPage() {
	return (
		<article role="container">
			<h1>主頁</h1>
			<h2>登入後顯示。可在此頁顯示 KPI 資訊。</h2>
			<Link href='/'>回到首頁</Link>
		</article>
	)
}