import { NextRequest, NextResponse } from "next/server";

/* 
	§ Middleware
	* a global level.
	* used to redirection, URL rewrites, authentication, headers, cookies, and more.
	* Middleware allows us to specify paths where it will be active
		- Custom matcher config
		- Conditional statements 
	ref→[Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
*/
export function middleware(request: NextRequest) {

	// if (request.nextUrl.pathname === "/profile") {
	// 	return NextResponse.redirect(new URL("/login"))
	// }

	const response = NextResponse.next()

	// const themePreference = request.cookies.get('theme')
	// if (!themePreference) {
	// 	response.cookies.set("theme", "dark")
	// }

	response.headers.set('custom-header', 'custom-value')

	return response
	//return NextResponse.redirect(new URL('/login'))
}

// export const config = {
// 	matcher: "/profile",
// }