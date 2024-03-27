'use client' // Error components must be Client Components
import { useEffect } from 'react'

//※ error.tsx 必需在前端運作。
// [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
// 開發環境看不到？或許正式環境才看得到？

export default function BoundaryError({
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
			<code>error.tsx</code>
			<pre>
				{JSON.stringify(error, null, ' ')}
			</pre>

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