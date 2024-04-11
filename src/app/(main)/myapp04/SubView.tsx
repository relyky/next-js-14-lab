import Card from "@/components/Card";
import { selectAge } from "./atoms";
import { useAtomValue } from "jotai";

export default function SubView() {
	const age = useAtomValue(selectAge);

	return (
		<Card>
			<p>watch RecoilValue </p>
			<p>SubView → age: {age}</p>
		</Card>
	)
}