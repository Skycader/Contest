const f = require("./binary-search.js");

describe("binarySearch", () => {
  test("target value", () => {
    expect(f([1, 2, 3, 10, 11, 20], 2)).toBe(1);
  });

  test("boundary value", () => {
    expect(f([1, 2, 3, 10, 11, 20], 20)).toBe(5);
  });

  test("non-existent value", () => {
    expect(f([1, 2, 3, 10, 11, 20], 9)).toBe(-1);
  });
});

/* Solution */
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < target) {
      start = middle + 1;
    }
    if (arr[middle] > target) {
      end = middle - 1;
    }
    if (arr[middle] === target) {
      return middle;
    }
  }

  return -1;
};
