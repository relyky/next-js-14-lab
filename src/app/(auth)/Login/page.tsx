import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Login",
};

export default function Login() {
	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>
		</article>
	)
}