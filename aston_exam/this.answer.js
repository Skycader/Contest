//"undefined"
//"obj1"
//"obj2"
//"undefined"
//
//Explanation:
//
//foo() gives undefined because in strict mode this is referred to undefined
//obj1.foo() gives obj1 because in obj1 foo was found in outside scope as a function,
//yet this is referred to the object the function is inside
//foo.call(obj2) gives obj2 because the foo function was called with a given
//context such as obj2 having bar property
//new foo() is not a constructor, but it won't cause error, and it does work
//no properties or methods are assigned, but the function will still work and produce
//the same output as just foo().
