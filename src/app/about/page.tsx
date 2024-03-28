import { cookies } from "next/headers";

/**
 * ※此畫面有用到 cookies(), headers(), searchParams 之一，則自動啟用 Dynamically Render。 
 */
export default function AboutPage() {
	const cookieStore = cookies()
	const themePreference = cookieStore.get('theme')

	return (
		<article role="container">
			<h1>About Page {new Date().toLocaleTimeString()}</h1>
			<p>theme: {themePreference?.value}</p>
		</article>
	)
}