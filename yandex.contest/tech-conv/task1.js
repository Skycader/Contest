let arr = [
	{name: 'width', value: 20},
	{name: 'height', value: 10},
	{name: 'price', value: 115}
]

//{
//width: 20
//height: 20
const f = arr => {
	let obj = {}
	for (item of arr) {
		obj[item.name]=item.value
	}
	return obj
}

console.log(f(arr))
	
