var p = Promise.resolve(4);

p
	.then( data => {
		console.log(data)
		throw new Error('')
	})
	.catch (err => {
		console.log('err')
		return 'ok'
	})
	.finally( (data) => {
		console.log(data)
		return 1
	})
	.then(data => {
		console.log(data);
	})
