const add = x => y => y+x
const multiple = x => y => y*x

/*
const o = flow(
	add(2), //<- 4
	multiple(3), //<- 6
)(4) //18 (4+2)*3
console.log(o)
*/

module.exports = flow
