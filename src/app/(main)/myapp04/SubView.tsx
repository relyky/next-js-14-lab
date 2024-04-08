import { selectAge } from "./atoms";
import { useRecoilValue } from 'recoil'
import Card from "@/components/Card";

export default function SubView() {
	const age = useRecoilValue(selectAge);

	return (
		<Card>
			<p>watch RecoilValue </p>
			<p>SubView → age: {age}</p>
		</Card>
	)
}