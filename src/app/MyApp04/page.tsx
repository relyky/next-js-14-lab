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
      <RecoilDevTools /* 在 Release mode 也有效？ */ />
			<AppForm title={"MyApp04: Recoil Lab"} />
		</RecoilRoot>
	)
}
