const f = (type, ...args) => {
	if (type=='array') return [...args]
	return args.reduce((total,item)=>total+=item,0)
}


module.exports = f
