const req = (callback) => {
	console.log("Making request")
	callback("DATA")
}

const req2 = (callback) => {
	console.log("MAKING REQUEST 2")
	setTimeout(()=>callback("DATA2"),500)
}

const promise = new Promise((resolve,reject)=> {
	console.log("RUNNING PROMISE")
	//req(resolve)
    req2(resolve)
	//resolve(req2(resolve))
	//resolve("RES")

})

//promise.then(res=>console.log(res))
