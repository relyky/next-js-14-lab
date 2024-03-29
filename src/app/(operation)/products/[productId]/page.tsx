import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductPage(props: {
  params: { productId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
	const { productId } = props.params

	// 超過允許範圍 => 404
	if(parseInt(productId) > 100) {
		notFound();
	}

	return (
		<article role='container'>
			<h1>Prodcut {productId}</h1>
			<h2><Link href='./'>回目錄</Link></h2>
			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</article>
	)
}