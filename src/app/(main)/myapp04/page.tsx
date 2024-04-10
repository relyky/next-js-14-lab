"use client"
import AppForm from "./AppForm";
import { RecoilRoot } from "recoil";
import { RecoilDevTools } from "recoil-toolkit";

/* Recoil 只能在前端作用 */
export default function MyApp04() {
	return (
		<RecoilRoot>
			{process.env.NODE_ENV === 'development' && <RecoilDevTools />}
			<AppForm />
		</RecoilRoot>
	)
}
