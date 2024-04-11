"use client"
import { Provider } from "jotai";
import AppForm from "./AppForm";

/* Recoil 只能在前端作用 */
export default function MyApp04() {
	return (
		<Provider>
			{/* {process.env.NODE_ENV === 'development' && <RecoilDevTools />} */}
			<AppForm />
		</Provider>
	)
}
