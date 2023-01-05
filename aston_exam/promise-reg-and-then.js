const p = new Promise((resolve,reject)=>{
	console.log("Promise inititalization")
	resolve("OK")
})
/*
setTimeout(()=>{
	console.log("Now running then")
	p.then((data)=>console.log(data))
},2000) */
