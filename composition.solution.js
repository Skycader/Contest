const compose = (...funs) => (arg) => funs.reduceRight(
	(total,fun)=>fun(total),arg)
