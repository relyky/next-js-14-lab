import { selectAge } from "./atoms";
import { useRecoilValue } from 'recoil'
import Card from "@/components/Card";
import Command from "@/components/Command";
import StyledJsxDemo from "@/components/StyledJsxDemo";

export default function SubView() {
	const age = useRecoilValue(selectAge);

	return (
		<div style={{ padding: 4, border: 'solid 1px red' }}>
			<p>SubView → age: {age}</p>

			<StyledJsxDemo label="測試動態 CSS classname" />

			<Card>
				我出運了
			</Card>

			<Command label="存檔" />
		</div>
	)
}