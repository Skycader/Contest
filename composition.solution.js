const f = (...funs) => (arg) => funs.reduceRight((total, fun) => fun(total), arg); /* 20 june 2023 08:30 */
const compose = (...funs) => (arg) => funs.reduceRight(
	(total, fun) => fun(total), arg)
