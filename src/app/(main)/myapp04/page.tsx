"use client"
import AppForm from "./AppForm";
import { RecoilRoot } from "recoil";
import { RecoilDevTools } from "recoil-toolkit";

/* Recoil 只能在前端作用 */
export default function MyApp04() {
	return (
		<RecoilRoot>
			<AppForm />
			{process.env.NODE_ENV === 'development' && <RecoilDevTools /* ※放在最後面才看得到初始狀態 */ />}
		</RecoilRoot>
	)
}
