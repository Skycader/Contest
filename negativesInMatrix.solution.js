/* 01 january 2023 14:14 */
const f = matrix => 
	matrix.reduce((total, array) =>
	total += array.reduce((total,number) =>
	(number < 0 ? total += 1 : total),0),0)

const f = matrix => matrix.reduce((total, array) => total += array.reduce((total, item) => (item < 0 ? total += 1 : total), 0),0) /* 25 december 2022 */
const f = (matrix) => matrix.reduce((total,array) => total+=array.reduce((total,el)=>(el<0)?total+=1:total,0),0) //<-- fixed
const f = (grid) => grid.reduce((total,arr)=>total+=arr.reduce((total,item)=>(item<0)?total+=1:total,0),0) //<-- fixed
const f = grid => grid.reduce((total,arr)=>total+=arr.reduce((total,i)=>(i<0) ? total+=1 :total,0),0)
const f = grid => grid.reduce((total,arr)=>total+=arr.reduce((total,item)=>(item<0)?total+=1:total,0),0)
