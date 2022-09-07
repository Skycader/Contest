function foo(callback) {
    setTimeout(function(){
        callback('A')
    },1000)
}

function bar(callback) {
    setTimeout(function(){
        callback('B')
    },2000)
}

function baz(callback) {
    setTimeout(function(){
        callback('C')
    },3000)
}

// new Promise(foo).then(res=>console.log(res))
Promise.all([
   new Promise(foo),
   new Promise(bar),
   new Promise(baz),

]).then(res=>console.log(res))