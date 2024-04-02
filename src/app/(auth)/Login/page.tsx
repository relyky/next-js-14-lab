import Link from "next/link";
import LoginForm from "./LoginForm";
import { getSession } from "../sessionApi";
import { redirect } from "next/navigation";

/**
 * ※此畫面有用到 cookies(), headers(), searchParams 之一，則自動啟用 Dynamically Render。 
 */
export default async function LoginPage() {
	const session = await getSession();

	// 若已登入則自動轉到主頁。
	if(session) {
		redirect('/main')
	}

	return (
		<article role="container">
			<h1>登入</h1>
			
			<LoginForm />	

			<Link href='/register'>註冊</Link>&nbsp;
			<Link href='/forget'>忘記密碼</Link>
		</article>
	)
}