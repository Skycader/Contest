function promiseHelloWorld() {
    return new Promise((resolve,reject)=> {
        resolve('Hello World!')
    })
}

promiseHelloWorld().then(res => console.log(res))
