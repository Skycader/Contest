//1
//5
//2
//3
//4
//
//It goes like this:
//prints 1
//add to microtask 2
//add to macrotask 3
//add to microtask -> add to macrotask
//print 5
//see microtasks:
//print 2
//microtask #2 adds macrotask
//no more microtasks
//see macrotask
//macrotasks #1 prints 3
//macrotask #2 prints 4
