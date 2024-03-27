'use client'

//※ error.tsx 必需在前端運作。
// [Error Handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
// 開發環境看不到？或許正式環境才看得到？

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}