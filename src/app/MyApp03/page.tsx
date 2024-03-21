import { Metadata } from "next";
import PageClient from './pageClient'

export const metadata: Metadata = {
	title: "SSR Counter",
};

export default function MyApp03(props: {
	params: unknown,
	searchParams: { [key: string]: string | string[] | undefined }
}) {

	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>
			<p>Server components and client components interactive together.</p>
			<p>伺服器元件和客戶端元件一起互動。</p>

			<PageClient />

			<h2>Dump props</h2>
			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</article>
	)

}