import { Metadata } from "next";
import ClientView from './ClientView'

//※ page.tsx 預設在伺服器端執行。
export const metadata: Metadata = {
	title: "SSR Interactive",
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
			<p><code>page.tsx</code>預設在伺服器端執行。</p>

			<ClientView />

			<h2>Dump props</h2>
			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</article>
	)

}