import Card from "@/components/Card";
import { useFormDataStore } from "./formDataStore";

export default function SubView() {
	const age = useFormDataStore(s => s.age)

	return (
		<Card>
			<p>watch RecoilValue </p>
			<p>SubView → age: {age}</p>
		</Card>
	)
}