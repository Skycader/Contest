const p = new Promise((resolve,reject)=>{
	resolve("OK")
})

p.then().then().then().then().then().then(data=>{console.log(data); return data}).then().then().then((data)=>console.log(data))
