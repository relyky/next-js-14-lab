
// metadata 在 template.tsx 無麥 
//export const metadata: Metadata = {
//	title: "登入功能群",
//};

export default function PageLayout(props: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div style={{ padding: '1rem', border: 'solid 2px red' }}>
			<code>template.tsx</code>
			<div style={{padding:'1rem'}}>登入功能樣板</div>
			<div style={{ padding: '1rem', border: 'solid 2px red' }}>
				{props.children}
			</div>
		</div>
	)
}
