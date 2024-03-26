"use client"
//import { Metadata } from "next";
import AppForm from "./AppForm";
import { RecoilRoot } from "recoil";
import { RecoilDevTools } from "recoil-toolkit";

// export const metadata: Metadata = {
// 	title: "MyApp04: Recoil Lab",
// };

/* 此時在 Server side */
export default function MyApp04() {
	return (
		<RecoilRoot>
			<AppForm title={"MyApp04: Recoil Lab"} />
      <RecoilDevTools /* ※放在最後面才看得到初始狀態。 在 Release mode 也有效？ */ />
		</RecoilRoot>
	)
}
