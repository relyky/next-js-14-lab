"use client"
import { useState, useTransition } from "react";
import ListItem from "./ListItem";

export default function FilterListWithTrans({ names }: {
	names: string[]
}) {
	const [query, setQuery] = useState('');
	const [highlight, setHighlight] = useState('');
	const [isPending, startTransition] = useTransition();

	return (
		<div>
			<p>厚重元件 with useTransition</p>
			<input onChange={changeHandler} value={query} type="text" />

			{isPending && <div>忙錄中</div>}

			<div style={{ opacity: isPending ? 0.5 : 1 }}>
				{names.map((name, i) => (
					<ListItem key={i} name={name} highlight={highlight} />
				))}
			</div>
		</div>
	);

	function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target
		setQuery(value)
		startTransition(() => setHighlight(value)); //※此處效果同延遲傳遞數值。
	}
}
