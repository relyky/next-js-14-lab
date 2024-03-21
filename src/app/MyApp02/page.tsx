import ClientView from "./ClientView";

export default function MyApp02() {

	return (
		<main>
			<h1>MyApp02 <small>我出運了</small></h1>
			<h2>這部份是SSR。</h2>
			<ClientView />
		</main>
	)
}