const obj1 = {
	x: 10
}

//const obj2 = Object.create(obj1.x)
//const obj2 = obj1.create('x')
//const obj2 = obj1.create({x:10})
const obj2 = Object.create(obj1)

console.log(obj2.x)
