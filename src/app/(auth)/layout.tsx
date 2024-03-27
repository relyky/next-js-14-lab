import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "登入功能群",
};

export default function PageLayout(props: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div style={{padding:'1rem'}}>登入功能群</div>
			{props.children}
		</div>
	)
}
