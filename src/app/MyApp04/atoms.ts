import { atom, selector } from "recoil";

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

export const textState = atom({
	key: 'textState', // unique ID (with respect to other atoms/selectors)
	default: '', // default value (aka initial value)
});

export const formState = atom({
	key: 'formState',
	default: initFormState
})

export const selectAge = selector({
  key: 'selectAge',
  get: ({get}) => {
		const text = get(textState)
    const formData = get(formState)
    return `${formData.age} with text: ${text}` 
  },
});