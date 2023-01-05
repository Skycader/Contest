var foo = function foo() {
	console.log(foo === foo)
}

foo(var foo = function foo() {
console.log(foo === foo)}

foo()
