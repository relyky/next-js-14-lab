"use server"

import { sleepAsync } from "@/app/_lib/utils"

// 此檔的碼在伺服器端執行。

//※此處無法儲存狀態。並不是 memory store。
const simsStore: {
	dataList: ProductInfo[]
} = {
	dataList: [
		{ sn: 1, title: '產品１號', status: 'Enable' },
		{ sn: 2, title: '產品２號', status: 'Enable' },
		{ sn: 3, title: '產品３號', status: 'Disable' },
		{ sn: 4, title: '產品４號', status: 'Enable' },
		{ sn: 5, title: '產品５號', status: 'Disable' },
	]
}

export async function qryDataList(): Promise<ProductInfo[]> {
	await sleepAsync(2000)
	console.log('qryDataList => ', simsStore.dataList )

	return simsStore.dataList
}

export async function addFormData(info: ProductInfo): Promise<ProductInfo> {
	await sleepAsync(2000)
	console.log('addFormData => ', simsStore.dataList )

	const maxSn = simsStore.dataList.reduce((max, cur) => max < cur.sn ? cur.sn : max, 0)
	const newData: ProductInfo = {
		sn: maxSn + 1,
		title: info.title,
		status: info.status ?? 'Enable'
	}

	simsStore.dataList = [...simsStore.dataList, newData]
	return newData
}
