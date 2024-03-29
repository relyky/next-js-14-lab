import { Suspense } from "react";
import Product from "@/app/_serverComponents/Product";
import Reviews from "@/app/_serverComponents/Reviews";
import FooComp from "./FooComp";

export default function MyFunc0101Page() {
	return (
		<article role='container'>
			<h1>MyFunc0101 哈囉世界</h1>
			<h2>這部份是SSR。載入資料厚重的元件</h2>

			<FooComp />

			{/* <Product />
			<Reviews /> */}

			<Suspense fallback={<p>loading Product...</p>}>
				<Product />
			</Suspense>
			<Suspense fallback={<p>loading Reviews...</p>}>
				<Reviews />
			</Suspense>
		</article>
	)
}