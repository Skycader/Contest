/**
 * Write a sorting function,
 * that uses selection sort algorithm
 * and corresponding API:
 * const array = new Array()
 * f(array) => array is expected to be sorted
 *
 */

const f = (api) => {
  let sorted_count = 0;
  let min_index = 0;
  const arrayLength = api.getLength();

  for (let i = sorted_count; i < arrayLength; i++) {
    for (let j = sorted_count; j < arrayLength; j++) {
      if (api.get(min_index) > api.get(j)) min_index = j;
    }
    api.set(sorted_count, api.get(min_index));
    sorted_count++;
  }
};

module.exports = f;
