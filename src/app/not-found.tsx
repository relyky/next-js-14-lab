export default function NotFound(props: {
  params: unknown
  searchParams: { [key: string]: string | string[] | undefined }
}) {

	return (
		<article role='container'>
			<h1>404 Not Found</h1>
			<p>Cound not find requested resource</p>
			<p>Your princess is in another castle!</p>

			<h2>Dump</h2>
			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</article>
	)
}