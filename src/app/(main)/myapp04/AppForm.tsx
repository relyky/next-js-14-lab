"use client"
import SubView from "./SubView";
import { useAccountStore } from "../../../accountStore";
import { useFormDataStore } from "./formDataStore";

export default function AppForm() {
	const account = useAccountStore()
	const formData = useFormDataStore()

	return (
		<article role="container">
			<h1>MyApp04: Zustand Lab</h1>

			<button style={{ margin: 4 }} onClick={handleClick}>加１</button>

			<input type="text" value={account.userId} onChange={handleChange} />

			<SubView />

			<pre>
				Echo: {account.userName}<br />
				FormData: {JSON.stringify(formData, null, ' ')}
			</pre>
		</article>
	)

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		account.login(event.target.value)
	}

	function handleClick() {
		formData.increaseAge()
	}
}
