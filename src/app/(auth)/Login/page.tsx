import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
};

export default function LoginPage() {
	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>
			<h2>登入後繼續 =&gt; </h2>
		</article>
	)
}