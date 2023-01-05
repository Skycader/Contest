console.log(1)
const promise = new Promise((resolve) => {
	console.log(2)
	resolve()
}).then(()=> console.log(3));
console.log(4)

