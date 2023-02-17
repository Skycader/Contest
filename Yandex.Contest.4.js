function foo(callback) {
    setTimeout(function(){
        callback('A')
    },300)
}

function bar(callback) {
    setTimeout(function(){
        callback('B')
    },200)
}

function baz(callback) {
    setTimeout(function(){
        callback('C')
    },100)
}

//Expect f(foo,bar,baz).then(res=>res) res to be ['A','B','C']

module.exports = f
