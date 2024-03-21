import ss from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js 14 重點摘要",
};

export default function MyApp01() {
	return (
		<div className={ss.container}>
			<h1>Next.js 14 重點摘要</h1>
			<p>在 Next.js 14 版預設 SSR 渲染；預設元件都是 <a href='https://nextjs.org/docs/app/building-your-application/rendering/server-components' target='_blank'>Server Components</a>。</p>
			<p>Server Components 無法使用 client 端運作的資源，比如：useState 等等 hooks。</p>
			<p>只有 <a href='https://nextjs.org/docs/app/building-your-application/rendering/client-components#using-client-components-in-nextjs' target='_blank'>Client Components</a> 才能使用前端資源，需在元件檔(tsx,jsx)頂端加入<code>"use client"</code>宣示。</p>
			<p>改用新的 <a href='https://nextjs.org/docs/app' target='_blank'>App Router</a> 進行 page routing。需注意 App Router 在主機端執行。</p>
			<p>之前的 <a href='https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts' target='_blank'>Pages Router</a> 依然有效，可以與 App Router 並肩使用。個人認為沒必要除非有向前相容的需求。</p>
			<p>此畫面是 SSR，在主機端渲染。</p>
			<p>祝好運。上帝站在你身邊。peace。</p>
		</div>
	)
}