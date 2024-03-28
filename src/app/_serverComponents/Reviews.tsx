//# RSC 支援 async/await 語法
export default async function Reviews() {
	await new Promise((resolve) => setTimeout(resolve, 4000))
	return (
		<h1>Reviews → big data</h1>
	)
}