const f = (arr) => arr.reduce((total,num)=> (num.toString().length%2) ? total : ++total,0)
