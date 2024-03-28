"use server"
// 此檔的碼在伺服器端執行。

export async function getBigData(num: number): Promise<string> {
	await new Promise((resolve) => setTimeout(resolve, 4000))
	const simsBigData = `I am big data:${num}.`
	return simsBigData
}
