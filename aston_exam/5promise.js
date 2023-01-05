const p = Promise.resolve(0)
p.then( ()=> console.log(1))
.then( () => console.log(2))
.then( () => console.log(3))
