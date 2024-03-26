"use client"
import { useRecoilState } from "recoil";
import { textState, formState } from "./atoms";
import SubView from "./SubView";

export default function AppForm(props: {
	title: string
}) {
	const [text, setText] = useRecoilState(textState);
	const [formData, setFormData] = useRecoilState(formState);

	return (
		<article role="container">
			<h1>{props.title}</h1>

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

