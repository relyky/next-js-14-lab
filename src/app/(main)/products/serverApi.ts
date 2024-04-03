"use server"

import { sleepAsync } from "@/app/_lib/utils"
import sql, { IRecordSet, config } from 'mssql'

// 此檔的碼在伺服器端執行。

/// 連線參數，正式版由 process.env.XXX 取得。
const CONN_STR = 'Server=127.0.0.1,1433;Database=MyLabDB;User Id=sa;Password=1;Encrypt=false'; // ok
const sqlConfig: config = {
	user: 'sa',
	password: '1',
	database: 'MyLabDB',
	server: '127.0.0.1',
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	},
	options: {
		encrypt: false, // for azure: true
		trustServerCertificate: true // default:false, change to true for local dev / self-signed certs
	}
}

/// helper
async function doSqlConnect(): Promise<void>{
		//await sql.connect(sqlConfig)
		await sql.connect(CONN_STR)	
}

export async function qryDataList(): Promise<IRecordSet<MyProduct>> {
	await sleepAsync(1000); //--- 正式版移除

	try {
		await doSqlConnect()

		const { recordset: dataList } = await sql.query<MyProduct>`select * from MyProduct`
		return dataList
	} catch (err) {
		//--- 未實作失敗處置程序
		console.error('qryDataList FAIL', err)
		throw err;
	}
}

export async function addFormData(info: MyProduct): Promise<void> {
	await sleepAsync(1000); //--- 正式版移除

	try {
		await doSqlConnect()

		const txn = new sql.Transaction()
		await txn.begin()

		const request = new sql.Request(txn)
		request.input('Title', info.Title)
		request.input('Status', info.Status)
		await request.query`insert into MyProduct (Title,Status) values (@Title,@Status)`
		await txn.commit()
	} catch (err) {
		//--- 未實作失敗處置程序
		console.error('addFormData FAIL', err)
		throw err;
	}
}

export async function getFormData(id: number): Promise<MyProduct> {
	await sleepAsync(1000); //--- 正式版移除

	try {
		await doSqlConnect()

		const request = new sql.Request()
		request.input('Sn', id)
		const result = await request.query<MyProduct>`select top 1 * from MyProduct where Sn = @Sn`
		
		const info = result.recordset[0]
		return info
	} catch (err) {
		//--- 未實作失敗處置程序
		console.error('addFormData FAIL', err)
		throw err;
	}
}

export async function updFormData(info: MyProduct): Promise<void> {
	await sleepAsync(1000); //--- 正式版移除

	try {
		await doSqlConnect()

		const txn = new sql.Transaction()
		await txn.begin()

		const request = new sql.Request(txn)
		request.input('Sn', info.Sn)
		request.input('Title', info.Title)
		request.input('Status', info.Status)
		await request.query`update MyProduct set Title=@Title, Status=@Status where Sn=@Sn`
		await txn.commit()
	} catch (err) {
		//--- 未實作失敗處置程序
		console.error('addFormData FAIL', err)
		throw err;
	}
}
