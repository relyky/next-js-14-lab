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

			<PageClient />

			<h2>Dump props</h2>
			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</article>
	)

}