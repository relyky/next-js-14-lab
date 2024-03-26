import { Metadata } from "next";

export const metadata: Metadata = {
	title: "MyApp04: Recoil Lab",
};

export default function MyApp04() {
	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>
		</article>
	)
}