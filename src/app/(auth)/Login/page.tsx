import Link from "next/link";
//import { cookies } from "next/headers";
import LoginForm from "./LoginForm";

/**
 * ※此畫面有用到 cookies(), headers(), searchParams 之一，則自動啟用 Dynamically Render。 
 */
export default function LoginPage() {
	//const cookieStore = cookies()
	//const themePreference = cookieStore.get('theme')
	const thisTime =new Date().toLocaleTimeString()

	return (
		<article role="container">
			<h1>登入</h1>
			{/* <p>theme: {themePreference?.value}</p> */}
			
			<LoginForm thisTime={thisTime} />	

			<Link href='/register'>註冊</Link>&nbsp;
			<Link href='/forget'>忘記密碼</Link>
		</article>
	)
}