
//# RSC 支援 async/await 語法
export default async function Product() {
	await new Promise((resolve) => setTimeout(resolve, 4000))
	return (
		<h1>Product → big data</h1>
	)
}