def foo(nums):
    current=0
    best=0
    for n in nums:
         
        if n>0:
            current+=1
            best=max(best,current)

        else:
            current=0
            return best

res = foo([1,1,0,1,1,0])
print(res)
