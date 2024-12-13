/* Solution */

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let log = [];

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    log.push(arr.slice(start, end + 1));

    //3 < 5
    if (arr[middle] < target) {
      start = middle + 1;
    }
    //3 > 1
    if (arr[middle] > target) {
      end = middle - 1;
    }

    if (arr[middle] === target) return [middle, log, log.length];
  }
  return [-1, log, log.length];
};

module.exports = binarySearch;
