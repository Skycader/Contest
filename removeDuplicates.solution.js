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

const f = (str,stack) => Array.from(str).reduce((stack,sym)=>(stack[stack.length-1] != sym) ? stack+=sym : stack.slice(0,-1),"")
const f = (str,stack) => Array.from(str).reduce((stack,sym)=>(stack[stack.length-1]==sym) ? stack.slice(0,-1) : stack+=sym,'')
console.log(f('abbac')) //===> aac ===> c
