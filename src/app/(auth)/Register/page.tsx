import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Register",
};

export default function Register() {
	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>
		</article>
	)
}