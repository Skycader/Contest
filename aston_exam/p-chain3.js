

var p = Promise.resolve(4);

p
	.then( data => {
		console.log(data)
		throw new Error('234')
	})
	.catch (err => {
		console.log(err)
		return new Promise((resolve)=>{resolve("ERROR")})
	})
.then(res=>console.log(res))
.then(()=>"FINALLY")
	.finally( (data) => {
		console.log(data)
		return 1
	})
