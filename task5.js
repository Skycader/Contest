const flow2 = (...fns) => {
	return function(arg) { //<- 4
		let ttl = arg
		for (fn of fns) {
			ttl = fn(ttl)
		}
		return ttl
	}
}

const flow = (...fns) => (arg) => fns.reduce((ttl,fn)=>fn(ttl),arg)

const add = x => y => y+x
const multiple = x => y => y*x

const o = flow(
	add(2), //<- 4
	multiple(3), //<- 6
)(4) //18 (4+2)*3

console.log(o)

