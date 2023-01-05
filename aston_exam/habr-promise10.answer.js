// print start
// reg promise1 ([promise1],[])
// reg timer1 [promise1],[ timer1]
// print end
// exec promise1 -> 
// print promise1
// reg timer2 [],[timer1,timer2]
//exec timer1 [],[timer2]
//print timer1
//reg promise2 [promise2],[timer2]
//exec promise2 [],[timer2]
//print promise2 [],[timer2]
//exec timer2 [],[]
//print timer2
//
//> start
add promise1 to microqueue
add timer1 to macroqueue
> end

promise1 is running
> promise1
reg timer2

run timer1
> timer1
reg promise2

run promise2
> promise2

run timer2
> timer2
microqueue

macroqueue
