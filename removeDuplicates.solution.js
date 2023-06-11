/* 11 june 2023 14:04 */

const f = str => Array.from(str).reduce((total, sym) => (total.at(-1) === sym) ? total.slice(0, -1) : total += sym, '')

/* 17 feb 2023 22:37 */

const f = str => Array.from(str).
	reduce((stack, sym) => (
		stack.at(-1) === sym
			? stack = stack.slice(0, -1)
			: stack += sym
	), '')

/* 29 december 2022  11:43 */
const f = str => Array.from(str).reduce((stack, sym) => (stack[stack.length - 1] === sym ? stack = stack.slice(0, -1) : stack += sym), '')

var removeDuplicates = function(str) {
	const stack = []
	for (let sym of str) {
		if (stack[0] != sym) {
			stack.unshift(sym)
		} else {
			stack.shift()
		}
	}
	return stack.reverse().join('')

};

const f = str => Array.from(str).reduce((stack, sym) => (stack.slice(-1) == sym) ? (stack = stack.slice(0, -1)) : stack += sym, "") /*Mon 17 October 2022 */
const f = str => Array.from(str).reduce((stack, sym) => (sym == stack[stack.length - 1]) ? stack.slice(0, -1) : stack += sym, '')
const f = (str, stack) => Array.from(str).reduce((stack, sym) => (stack[stack.length - 1] != sym) ? stack += sym : stack.slice(0, -1), "")
const f = (str, stack) => Array.from(str).reduce((stack, sym) => (stack[stack.length - 1] == sym) ? stack.slice(0, -1) : stack += sym, '')
console.log(f('abbac')) //===> aac ===> c
const f = (str, stack) => Array.from(str).reduce((stack, sym) => (sym == stack[stack.length - 1]) ? stack.slice(0, -1) : stack += sym, '')

function cutRepeat(str) {
	return str.split("").filter(elem => str.split(elem).length - 1 === 1).join("");
}
