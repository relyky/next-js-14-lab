import { NextRequest } from "next/server";
import ss from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SSR Counter",
};

export default function MyApp03(props: {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {

	const { count } = props.searchParams
	const _count: number = Number(count ?? 0);

	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>

			<h1>{_count}</h1>

			<form method='GET' action={`/MyApp03?count=101`}>
				<button type='submit'>送出</button>
			</form>

			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</article>
	)

}