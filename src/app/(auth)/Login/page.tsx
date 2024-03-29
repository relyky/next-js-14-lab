import { cookies } from "next/headers";
import Link from "next/link";

/**
 * ※此畫面有用到 cookies(), headers(), searchParams 之一，則自動啟用 Dynamically Render。 
 */
export default function LoginPage() {
	const cookieStore = cookies()
	const themePreference = cookieStore.get('theme')

	return (
		<article role="container">
			<h1>登入</h1>
			<h2>登入後繼續 =&gt; </h2>

			<p>開始登入時間: {new Date().toLocaleTimeString()}</p>		
			<p>theme: {themePreference?.value}</p>

			<Link href='/register'>註冊</Link>&nbsp;
			<Link href='/forget'>忘記密碼</Link>
		</article>
	)
}
