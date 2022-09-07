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

// new Promise(foo).then(res=>console.log(res))
Promise.all([
   new Promise(foo),
   new Promise(bar),
   new Promise(baz),

]).then(res=>console.log(res))