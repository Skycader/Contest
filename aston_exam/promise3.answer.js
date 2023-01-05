//1
//2
//1
//2
//
//Because it is event queue
//promise registers to microtask queue
//then goes down registers 6th line
//then it is done and microtask queue is being exuted
//first 2nd line is exuted and then it registers another mcirotask
//then it executed next mcirotask in queue (queue first in first out)
//like so:
//print 1 registers print 1 and it is (here line 15)
//print 2
//print 1
//print 2
