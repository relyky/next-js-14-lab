import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

//§ 放置此 page 範圍內全部的表單狀態。
interface FormDataState {
	fieldA: string
	fieldB: string
	age: number
}

interface FormDataAction {
	assignProps: (info: Partial<FormDataState>) => void,
	increaseAge: () => void,
}

type FormDataStore = FormDataState & FormDataAction

//-----------------------------------------------------------------------------

const initState: FormDataState = {
	fieldA: '',
	fieldB: '',
	age: 23,
}

// 建立 store 順便加掛 devtools
export const useFormDataStore = create<FormDataStore>()(devtools(persist(
	(set) => ({
		...initState,
		assignProps: (info: Partial<FormDataState>) => set((state) => ({ ...state, ...info })), // replace
		assignValue: (name: string, value: unknown) => set((state) => ({ ...state, [name]: value })), // replace
		increaseAge: () => set((state) => ({ ...state, age: state.age + 1 })),
	}),
	{ name: 'formDataStore', },
)))
