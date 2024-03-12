//Given an array nums of integers, return how many of them contain an even number of digits.
//Input: nums = [12,345,2,6,7896]
//Output: 2

const f = (nums) =>
  nums.reduce(
    (count, num) => (num.toString().length % 2 === 0 ? (count += 1) : count),
    0,
  );

module.exports = f;
