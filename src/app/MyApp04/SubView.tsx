import { selectAge } from "./atoms";
import { useRecoilValue } from 'recoil'



export default function SubView() {
	const age = useRecoilValue(selectAge);

	return (
		<div style={{ padding: 4, border: 'solid 1px red' }}>
			<p>SubView → age: {age}</p>
		</div>
	)
}