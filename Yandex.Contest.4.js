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

//Expect f(foo,bar,baz).then(res=>res) res to be ['A','B','C']

module.exports = f
