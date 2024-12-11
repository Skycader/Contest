/* Solution */
const binarySearch = (arr, target) => {
  const log = [];
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    console.log("WORKING", "MIDDLE:", arr[middle], arr.slice(start, end + 1));

    if (arr[middle] < target) {
      start = middle + 1;
      log.push(arr.slice(start, middle));
    }
    if (arr[middle] > target) {
      end = middle - 1;
      log.push(arr.slice(middle, end));
    }
    if (arr[middle] === target) {
      return [middle, log, log.length];
    }
  }

  return [-1, log, log.length];
};

module.exports = binarySearch;
