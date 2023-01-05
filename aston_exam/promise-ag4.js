new Promise((res,rej)=>{
	rej("JOKE")
})
.then(()=>"123")
.catch((err)=>{console.log(err); return "AFTER ERROR"})
.then(res=>console.log(res))
.finally(()=>"FINALLT")
.then(res=>console.log(res))
