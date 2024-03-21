import ss from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SSR Counter",
};

export default function MyApp03() {
	return (
		<article role="container">
			<h1>{metadata.title as string}</h1>
		</article>
	)
}