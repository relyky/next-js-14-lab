import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "我出運了",
};

export default function PageLayout(props: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>{props.children}</>
	)
}
