function foo(callback) {
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

f(foo,bar,baz).then(res=>{
	if (JSON.stringify(res)===JSON.stringify(['A','B','C'])) {
		console.log('Test passed')
	} else {
		throw new Error('Test failed')
	}
})

module.exports = f
