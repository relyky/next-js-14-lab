"use server"
import { cookies } from "next/headers" // 只在 Server Component 有效。

// 此檔的碼在伺服器端執行。
export async function simsLogin(credential: string): Promise<string> {
	const cookieStore = cookies()
	cookieStore.set('simsToken','A1234567890') // 可以送回 cookie
	return '模擬登入成功'
}
