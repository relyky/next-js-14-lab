import { Metadata } from "next";

export const metadata: Metadata = {
	title: "ForgetPassword",
};

export default function ForgetPassword() {
	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>
		</article>
	)
}