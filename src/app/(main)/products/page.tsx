
import Link from "next/link";
import { qryDataList } from "./serverApi";
import ss from './page.module.css'

export const dynamic = 'force-dynamic'

export default async function ProductListPage() {
	const dataList = await qryDataList()

	return (
		<article role='container'>
			<h1>Prodcut List</h1>
			<p>demo: dynamic routing</p>
			<p>{`when productId > 100 => NotFound!`}</p>

			<div><Link href='products/create'>新增</Link></div>
			<table className={ss.border}>
				<thead>
					<tr>
						<th></th>
						<th>序號</th>
						<th>抬頭</th>
						<th>狀態</th>
					</tr>
				</thead>
				<tbody>
					{dataList.map((item) => (
						<tr key={item.Sn}>
							<td><Link href={`/products/${item.Sn}`}>編輯</Link></td>
							<td>{item.Sn}</td>
							<td>{item.Title}</td>
							<td>{item.Status}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div><Link href='..'>回上一層</Link></div>
		</article>
	)
}
