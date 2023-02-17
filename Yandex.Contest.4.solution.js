/function foo(callback) {
    setTimeout(function(){
        callback('A')
    },3000)
}

function bar(callback) {
    setTimeout(function(){
        callback('B')
    },2000)
}

function baz(callback) {
    setTimeout(function(){
        callback('C')
    },1000)
}

const f = (...funs) => Promise.all(funs.map(fun=>new Promise(fun)))

f(foo,bar,baz).then(res=>{
	if (JSON.stringify(res)===JSON.stringify(['A','B','C'])) {
		console.log('Test passed')
	} else {
		throw new Error('Test failed')
	}
})

module.exports = f/ new Promise(foo).then(res=>console.log(res))
Promise.all([
   new Promise(foo),
   new Promise(bar),
   new Promise(baz),

]).then(res=>console.log(res))


