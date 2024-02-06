/*
 * Input: nums = [0,1,2,4,5,7]
 * [0,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
*/
const f = (arr) =>
  arr
    .map(
      (() => {
        const result = [];
        arr.push(null);
        let prev = null;

        return (num) => {
          num !== null
            ? prev !== null
              ? prev + 1 !== num
                ? result.push([num])
                : (result[result.length - 1][1] = num)
              : result.push([num])
            : null;
          prev = num;
          if (num === null) return result;
        };
      })(),
    )
    .filter(Boolean);

console.log(f([1, 2, 3, 5, 9])); //[ [1,3],[5],[9] ]
