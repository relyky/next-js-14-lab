/** @type {import('next').NextConfig} */
const nextConfig = {

	/// This file is used to configure Next.js, and get used by the Next.js server and build phases, but it’s not included in the browser build.
	/// It can be used to configure rewrites, redirects, custom headers, environment variables etc.
	// experimental: {
	// 	serverActions: true,
	// },
	// reactStrictMode: true,
	// swcMinify: true,

  // Learn more here - https://nextjs.org/docs/advanced-features/compiler#module-transpilation
  // Required for font css to be imported correctly 👇
  transpilePackages: ['jotai-devtools'],	
};

export default nextConfig;
