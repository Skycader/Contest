const f = (callback) => callback('A')
const p = new Promise(f)
p.then(e=>console.log(e))
console.log('console.log')
setTimeout(()=>{console.log('timeout')},0)
p.then(e=>console.log(e))
console.log('console.log')

const p2 = new Promise((res,rej)=>{
	setTimeout(()=>res('timer end inside promise'),0)
})

p2.then(e=>console.log(e))
p.then(e=>console.log(e))
p2.then(e=>console.log(e))

