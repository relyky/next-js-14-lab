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

export const textAtom = atom('');
textAtom.debugLabel = 'textAtom'

export const formDataAtom = atom(initFormState)
formDataAtom.debugLabel = 'formDataAtom'

// derivedAtom / selector
export const selectAge = atom(
  (get) => {
		const text = get(textAtom)
		const formData = get(formDataAtom)
		return `${formData.age} with text: ${text}` 
	},
)
selectAge.debugLabel = 'selectAge'

// export const selectAge = selector({
//   key: 'selectAge',
//   get: ({get}) => {
// 		const text = get(textState)
//     const formData = get(formState)
//     return `${formData.age} with text: ${text}` 
//   },
// });