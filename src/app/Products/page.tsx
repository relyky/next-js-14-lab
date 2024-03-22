import Link from "next/link";

export default function ProductList() {

	return (
		<article role='container'>
			<h1>Prodcut List</h1>
			<p>demo: dynamic routing</p>
			<p>{`productId > 100 => NotFound!`}</p>			
			<h2><Link href='/Products/1'>Product 1</Link></h2>
			<h2><Link href='/Products/2'>Product 2</Link></h2>
			<h2><Link href='/Products/3'>Product 3</Link></h2>
			<h2><Link href='..'>回上一層</Link></h2>
		</article>
	)
}