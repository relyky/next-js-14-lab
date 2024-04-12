"use client"
import { useAtom } from "jotai";
import { textAtom, formDataAtom } from "./atoms";
import SubView from "./SubView";

export default function AppForm() {
	const [text, setText] = useAtom(textAtom);
	const [formData, setFormData] = useAtom(formDataAtom);

	return (
		<article role="container">
			<h1>MyApp04: Recoil Lab</h1>

			<button style={{ margin: 4 }} onClick={handleClick}>加１</button>

			<input type="text" value={text} onChange={handleChange} />

			<SubView />

			<pre>
				Echo: {text}<br />
				FormData: {JSON.stringify(formData, null, ' ')}
			</pre>
		</article>
	)

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setText(event.target.value);
	}

	function handleClick() {
		setFormData(prev => ({ ...prev, age: prev.age + 1 }))
	}
}
