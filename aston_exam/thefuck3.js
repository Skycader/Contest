for (var i = 0; i< 10; i++) {
	setTimeout(function f() {
		console.log(i)
	})
		setTimeout(()=> {
		console.log(i)
	})
}

console.log("I: ", i)
