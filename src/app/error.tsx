'use client' // Error components must be Client Components
import { useEffect } from 'react'

//※ error.tsx 必需在前端運作。
//※ 只對元件本身 render 過程的例外有效！對元件 event handling 的例外無效。
// [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)

export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<div style={{ backgroundColor: 'red' }}>
			<h2>Something went wrong!</h2>
			<dl>
				<dt>name</dt>
				<dd>{error.name}</dd>
				<dt>message</dt>
				<dd>{error.message}</dd>
				<dt>digest</dt>
				<dd>{error.digest}</dd>
				{/* <dt>stack</dt>
				<dd>{error.stack}</dd> */}
			</dl>

			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	)
}