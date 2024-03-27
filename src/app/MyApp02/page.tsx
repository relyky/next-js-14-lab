import { Metadata } from "next";
import ClientView from "./ClientView";
import ss from "./page.module.css";

export const metadata: Metadata = {
	title: "SSR + CSR 混用",
};

export default function MyApp02() {

	return (
		<article role="container" className={ss.box1}>
			<code>page.tsx</code>
			<h1>{metadata.title as string}</h1>
			<h2>這部份是 SSR。<small>(外面也是 SSR)</small></h2>
			<p>SSR 無法使用 client 端資源。</p>
			<ClientView />
		</article>
	)
}