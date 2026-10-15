/**
 * Given an API, including methods:
 * api.get(index) => get number by index
 * api.getLength() => get length of arr
 *
 * Write a function that binary searches
 * a required value in a given array
 * with minimal requests.
 *
 * const f = (api, target) => {}
 */

const f = (api, target) => {
  const length = api.getLength();
  let start = 0;
  let end = length - 1;
  let mid = 0;
  let val = 0;

  while (start < end) {
    mid = Math.floor((start + end) / 2);
    val = api.get(mid);
    if (val === target) {
      return mid;
    }
    if (val < target) {
      end = mid - 1;
    }
    if (val > target) {
      start = mid + 1;
    }
  }

  return -1;
};

module.exports = f;
