"use client"
//※ error.tsx 必需在前端運作。
// [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
// 開發環境看不到？或許正式環境才看得到？

export default function ErrorBoundary(props:{
	error: Error
}) {
	return (
		<div style={{ backgroundColor: 'red' }}>
			<h1>Error in reviewId</h1>
			<h2>{props.error.message}</h2>
		</div>
	)
}