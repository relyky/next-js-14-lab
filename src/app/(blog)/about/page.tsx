import { cookies } from "next/headers";
import Link from "next/link";

/**
 * ※此畫面有用到 cookies(), headers(), searchParams 之一，則自動啟用 Dynamically Render。 
 */
export default function AboutPage() {
	const cookieStore = cookies()
	const themePreference = cookieStore.get('theme')

	return (
		<article role="container">
			<h1>關於我們 {new Date().toLocaleTimeString()}</h1>
			<p>theme: {themePreference?.value}</p>
			<Link href='/'>回到首頁</Link>
		</article>
	)
}