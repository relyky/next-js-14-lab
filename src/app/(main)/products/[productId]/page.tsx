"use client"

import Link from "next/link";
import { getFormData, updFormData } from "../serverApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductPage(props: {
	params: { productId: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const { productId } = props.params
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState<MyProduct | undefined>()

	useEffect(() => {
		setLoading(true)
		getFormData(Number(productId))
			.then((info) => {
				setFormData(info)
				setLoading(false)
			})
	}, [])

	return (
		<article role='container'>
			<h1>Prodcut {productId}</h1>
			{loading && <h1>SPIN</h1>}

			<form onSubmit={handleSubmit}>
				<div>
					<label>抬頭&nbsp;
						<input name='titleA' type='text' required defaultValue={formData?.Title} />
					</label>
				</div>
				<div>
					<label>狀態&nbsp;
						<input name='status' type='text' required defaultValue={formData?.Status} />
					</label>
				</div>
				<button type='submit'>送出</button>
			</form>

			<h2><Link href='./'>回目錄</Link></h2>
			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</article>
	)

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setLoading(true)

		const form = event.currentTarget
		const info: MyProduct = {
			Sn: formData?.Sn ?? -1,
			Title: form['titleA'].value,
			Status: form['status'].value
		}

		await updFormData(info)
		console.log('更新產品成功')
		setLoading(false)

		// 回目錄頁並刷新
		router.push('./')
		router.refresh()
	}
}