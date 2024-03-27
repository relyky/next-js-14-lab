"use client"
import ss from './page.module.css'

export default function ListItem({ name, highlight }: {
	name: string,
	highlight: string
}) {
	const index = name.toLowerCase().indexOf(highlight.toLowerCase());
	if (index === -1) {
		return; // 不顯示
		//return <div>{name}</div>;
	}
	return (
		<div>
			{name.slice(0, index)}
			<span className={ss.highlight}>
				{name.slice(index, index + highlight.length)}
			</span>
			{name.slice(index + highlight.length)}
		</div>
	);
}