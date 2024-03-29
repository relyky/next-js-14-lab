"use client"
import { useState, useDeferredValue } from "react";
import ListItem from "./ListItem";

export default function FilterLisDeferred({ names }: {
	names: string[]
}) {
	const [query, setQuery] = useState('');
	const deferredQuery = useDeferredValue(query); // 延遲傳遞

	const isPending = query !== deferredQuery; // 比較前後值就知有否延遲。
	return (
		<div>
			<p>厚重元件 with useDeferredValue</p>
			<input onChange={changeHandler} value={query} type="text" />
			
			{isPending && <div>忙錄中</div>}

			<div style={{ opacity: isPending ? 0.5 : 1 }}>
				{names.map((name, i) => (
					<ListItem key={i} name={name} highlight={deferredQuery} />
				))}
			</div>
		</div>
	);

	function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target
		setQuery(value)
	}
}
