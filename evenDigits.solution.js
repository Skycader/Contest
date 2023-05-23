//Given an array nums of integers, return how many of them contain an even number of digits.

const f = arr => arr.filter(item => item.toString().length%2 === 0).length

const f = (arr) => {
	const l = (n,c=0) => (n>0) ? l(n/10>>0,c+1) : c
	return arr.reduce((total,num)=> (l(num)%2) ? total : total+=1,0)
}

console.log(f([12,345,2,6,7896]))
module.exports = f
