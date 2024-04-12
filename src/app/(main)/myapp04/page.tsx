"use client"
import { DevTools } from 'jotai-devtools';
import AppForm from "./AppForm";

/* Jotai 只能在前端作用 */
export default function MyApp04() {
	return (
		<div>
			{process.env.NODE_ENV === 'development' && <DevTools />}
			<AppForm />
		</div>
	)
}
