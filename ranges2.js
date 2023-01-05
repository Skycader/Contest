var summaryRanges = function(nums) {
    const res = [];
    for (let start = 0, i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] > 1 || i === nums.length) {
            res.push(nums[start] + (start < i - 1 ? '->' + nums[i - 1] : ''));
            start = i;
        }
    }
    return res;
};

a = summaryRanges([0,2,3,4,6,8,9])
console.log(a)
