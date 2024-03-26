"use client"
import { useRecoilState } from "recoil";
import { textState } from "./atoms";

export default function AppForm(props: {
	title: string
}) {
	const [text, setText] = useRecoilState(textState);

	return (
		<article role="container">
			<h1>{props.title}</h1>

			<input type="text" value={text} onChange={handleChange} />
			<p>
				Echo: {text}
			</p>
		</article>
	)

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setText(event.target.value);
	};
}

