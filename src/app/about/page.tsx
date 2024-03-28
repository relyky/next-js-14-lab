import { cookies } from "next/headers";

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