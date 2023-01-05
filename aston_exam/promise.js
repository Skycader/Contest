console.log(1)

Promise.resolve()
	.then(()=> console.log(2))

setTimeout(() => console.log(3), 0)

Promise.resolve()
	.then(setTimeout(() => console.log(4), 0))

console.log(5)
