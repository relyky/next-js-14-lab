
"use client"

import { useState } from "react";
import Link from "next/link";
import { addFormData } from "../serverApi";
import { useRouter } from "next/navigation";

export default function CreatePage() {
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	return (
		<article role='container'>
			<h1>Create Prodcut</h1>
			{loading && <h1>SPIN</h1>}

			<form onSubmit={handleSubmit}>
				<div>
					<label>抬頭&nbsp;
						<input name='titleA' type='text' required />
					</label>
				</div>
				<div>
					<label>狀態&nbsp;
						<input name='status' type='text' required defaultValue='Enable' />
					</label>
				</div>
				<button type='submit'>送出</button>
			</form>
			<div><Link href='./'>回目錄</Link></div>
		</article>
	)

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setLoading(true)

		const form = event.currentTarget
		const info: MyProduct = {
			Sn: 0,
			Title: form['titleA'].value,
			Status: form['status'].value
		}

		//const newData = await addFormData(info)
		//console.log('新增產品資訊:', newData)

		await addFormData(info)
		console.log('新增產品成功')
		setLoading(false)

		// 回目錄頁並刷新
		router.push('./')
		router.refresh()
	}
}