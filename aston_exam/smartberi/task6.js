/*
Написать функцию getArray которая принимает объект root и возвращает массив из value
На каждом уровне вложенности у root может быть только val и next, других свойств не может быть.
Функция не должна использовать внешних переменных и должна давать правильные результаты при многократном использовании

getArray({ val: 3, next: { val: 5, next: { val: 2, next: null }}}) -> [3, 5, 2]
getArray({}) -> []
*/

const obj = { val: 3, next: { val: 5, next: { val: 2, next: null }}}
const getArray = obj => {
	const acc = []
	while (obj) {
		if (obj.val) acc.push(obj.val)
		obj = obj.next
	}
	return acc
}

console.log(getArray(obj))
console.log(getArray({}))
