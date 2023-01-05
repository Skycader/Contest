var a = 'hello'
function b() {
	if (false) {
		var a = 'world'
	} else {
		var b = 'man'
	}
	console.log(b) //
	console.log(a) //
}
b()

