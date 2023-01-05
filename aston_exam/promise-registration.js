const p = new Promise((res,rej)=> {
console.log(-1)
console.log(-2)
res('res')
console.log(1)
console.log(2)
})

p.then((res)=>console.log(res))
