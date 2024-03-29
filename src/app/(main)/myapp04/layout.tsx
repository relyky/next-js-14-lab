import type { Metadata } from "next";

//§ layout.tsx 此檔案在伺服器端執行。
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
