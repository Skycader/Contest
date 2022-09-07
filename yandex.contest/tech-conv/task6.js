const arr = ['any [complex] string', function(){},{a:2},[1,2,3],[[[5]]]]
const arr2 = [0,[1,[2,3]],4]
console.log([].concat(...arr2))
// let flatArray = arr.concat.apply([], arr);
// console.log(flatArray)

// let flatArray2 = arr.reduce((acc, curVal) => {
//     return acc.concat(curVal)
// }, []);

// console.log(flatArray2)

// for (item of arr) {
//     console.log(typeof item)
// }

function flatten(arr) {
    const result = [];
  
    for (const n of arr) {
      if (n?.constructor === Array) {
        [].push.apply(result, flatten(n));
      } else {
        result.push(n);
      }
    }
  
    return result;
  }

  console.log(flatten(arr))