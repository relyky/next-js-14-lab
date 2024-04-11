import { atom } from "jotai";

//§ 放置此 page 範圍內全部的表單狀態。
interface FormState {
	fieldA: string
	fieldB: string
	age: number
}

const initFormState: FormState = {
	fieldA: '',
	fieldB: '',
	age: 23,
}

export const textState = atom('');

export const formState = atom(initFormState)

// derivedAtom / selector
export const selectAge = atom(
  (get) => {
		const text = get(textState)
		const formData = get(formState)
		return `${formData.age} with text: ${text}` 
	},
)

// export const selectAge = selector({
//   key: 'selectAge',
//   get: ({get}) => {
// 		const text = get(textState)
//     const formData = get(formState)
//     return `${formData.age} with text: ${text}` 
//   },
// });