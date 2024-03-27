"use client"
import FilterList from "./FilterList";
import FilterListDefer from "./FilterListDefer";
import FilterListTrans from "./FilterListTrans";
import ss from './page.module.css'

//-----------------------------------------------------------------------------
// const names:string[] = ['a00b00','a01b01']
const names: string[] = Array(10000).fill(1).map((_,i) => `a${i}b${i}`)

export default function UseTransLab() {
	return (
		<div>
			<h1>Heavy UI updates as urgent</h1>
			<div className={ss.flexBox}>
				<FilterList names={names} />
				<FilterListTrans names={names} />
				<FilterListDefer names={names} />
			</div>
		</div>
	)
}
