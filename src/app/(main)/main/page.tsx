import Link from "next/link";

const IMPORTANT_ENV = {
	NODE_ENV: process.env.NODE_ENV,
	APP_VERSION: process.env.APP_VERSION,
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASS: process.env.DB_PASS,
} 

export default function MainPage() {
	return (
		<article role="container">
			<h1>主頁</h1>
			<h2>登入後顯示。可在此頁顯示 KPI 資訊。</h2>
			
			<hr />

			<h2>環境參數</h2>
			<h3>重要的環境參數</h3>
			<pre>{JSON.stringify(IMPORTANT_ENV, null, ' ')}</pre>

			<h3>全部的環境參數</h3>
			<pre>{JSON.stringify(process.env, null, ' ')}</pre>

			<Link href='/'>回到首頁</Link>
		</article>
	)
}