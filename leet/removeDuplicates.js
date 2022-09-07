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
