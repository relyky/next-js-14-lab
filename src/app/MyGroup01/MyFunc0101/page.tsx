import { Suspense } from "react";
import Product from "../../_serverComponents/Product";
import Reviews from "../../_serverComponents/Reviews";

export default function MyFunc0101Page() {
	return (
		<article role='container'>
			<h1>MyFunc0101 哈囉世界</h1>
			<h2>這部份是SSR。</h2>

			<Suspense fallback={<p>loading Product...</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>loading Reviews...</p>}>
				<Reviews />
			</Suspense>
		</article>
	)
}