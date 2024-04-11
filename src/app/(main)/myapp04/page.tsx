"use client"
import { Provider,createStore } from "jotai";
import { DevTools } from 'jotai-devtools';
import AppForm from "./AppForm";

const store = createStore();

/* Recoil 只能在前端作用 */
export default function MyApp04() {
	return (
		<Provider store={store}>
			{process.env.NODE_ENV === 'development' && <DevTools store={store} position='bottom-right' />}
			<AppForm />
		</Provider>
	)
}
