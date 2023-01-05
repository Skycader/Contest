/*const delay = ms => new Promise(res=>{setTimeout(()=>res(""),ms)}) */


(async () => {
	setTimeout(()=> {console.log(1);},100);
	setTimeout(() => {console.log(2);},0);
	await delay(1000);
	console.log(3)
})()


function delay2(ms) {
	return new Promise((res,rej)=>{
		setTimeout(()=>res(""),ms)
	})
}



