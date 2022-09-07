//const negatives in matrix
const f = grid => grid.reduce((total,arr)=>total+=arr.reduce((total,i)=>(i<0)?total+=1:total,0),0)
module.exports = f 

