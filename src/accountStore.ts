import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

//§ 放置此 page 範圍內全部的表單狀態。
interface AccountState {
	userId: string
	userName: string
}

interface AccountAction {
	login: (userId: string) => void,
}

export type AccountStore = AccountState & AccountAction

//-----------------------------------------------------------------------------

const initState: AccountState = {
	userId: 'guest',
	userName: '來賓'
}

// 建立 store 順便加掛 devtools
export const useAccountStore = create<AccountStore>()(devtools(persist(
	(set) => ({
		...initState,
		login: (userId: string) => set({ 
			userId: userId, 
			userName: `我是${userId}` }),
	}),
	{ name: 'accountStore' },
)))
