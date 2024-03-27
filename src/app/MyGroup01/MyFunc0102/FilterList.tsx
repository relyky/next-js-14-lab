"use client"
import { useState } from "react";
import ListItem from "./ListItem";

export default function FilterList({ names }: {
	names: string[]
}) {
	const [query, setQuery] = useState('');

	return (
		<div>
			<p>厚重元件</p>
			<input onChange={changeHandler} value={query} type="text" />
			{names.map((name, i) => (
				<ListItem key={i} name={name} highlight={query} />
			))}
		</div>
	);

	function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target
		setQuery(value)
	}
}
