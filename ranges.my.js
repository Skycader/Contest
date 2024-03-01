/*
 * Input: nums = [0,1,2,4,5,7]
 * [0,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
*/

//10 lines maximum

const g = () => {
  const result = [];
  let prev = null;

  return (num) => {
    console.log("DEBUG: ", prev, num, result);
    if (prev === null) {
      prev = num;
      result.push([num]);
      return result;
    }
    if (prev + 1 === num) result[result.length - 1][1] = num;
    if (prev + 1 !== num) result.push([num]);
    prev = num;
    return result;
  };
};

const f = (arr) => {
  const f = g();
  return arr
    .reduce((total, num) => f(num), [])
    .map((item) =>
      item.length === 2 ? `${item[0]}->${item[1]}` : `${item[0]}`,
    );
};

const summaryRanges = f;
module.exports = f;

//const arr = [0,1,2,4,5,7]
//const arr = [0, 2, 3, 4, 6, 8, 9];
//const arr = [-5, -4, -3, 2, 3];
const arr = [-1];
//0; 2->4; 6; 8->9
console.log("GIVEN ARRAY: ", arr);
console.log(f(arr));
