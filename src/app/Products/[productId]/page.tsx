export default function Product1(props: {
  params: { productId: number }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
	const { productId } = props.params

	return (
		<div>
			<h1>Prodcut {productId}</h1>

			<pre>
				{JSON.stringify(props, null, ' ')}
			</pre>
		</div>
	)
}