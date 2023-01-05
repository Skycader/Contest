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

	for (let item of arr) {
		obj[item.name]=item.value
	}
	return obj
}

const f = (arr) => {
	const obj = {}
	for (let i of arr) {
		obj[i.name]=i.value
	}
	return obj
}


const f2 = (arr) => {
	let obj = {}
	for (let item of arr) {
		obj[item.name]=item.value
	}
	return obj
}
// console.log(f(arr))

module.exports=f

	
