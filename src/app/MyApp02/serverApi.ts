"use server"
// 此檔的碼在伺服器端執行。

export async function increaseValue(num: number): Promise<number> {
	return num + 1
}
