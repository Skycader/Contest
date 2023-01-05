def summaryRanges(nums):
    ranges = []
    for n in nums:
        if not ranges or n > ranges[-1][-1] + 1:
            ranges += [],
        ranges[-1][1:] = n,
    return ['->'.join(map(str, r)) for r in ranges]

a = summaryRanges([1,2,5,8,11,12,13])
print(a)
