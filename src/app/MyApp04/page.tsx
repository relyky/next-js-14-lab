"use client"
import AppForm from "./AppForm";
import { RecoilRoot } from "recoil";
import { RecoilDevTools } from "recoil-toolkit";

/* 此時在 Server side */
export default function MyApp04() {
	return (
		<RecoilRoot>
			<AppForm />
      <RecoilDevTools /* ※放在最後面才看得到初始狀態。 在 Release mode 也有效？ */ />
		</RecoilRoot>
	)
}
