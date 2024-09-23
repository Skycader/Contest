const f = require("./selection-sort.js");

describe("Selection sort test", () => {
  it("should sort correctly", () => {
    expect(f([12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
  });
});

/**
 * Solution
 const sort = (arr) => {
  const copy = [...arr];
  let min = 0;

  for (let j = 0; j < arr.length; j++) {
    min = j;
    for (let i = 1 + j; i < copy.length; i++) {
      if (copy[i] < copy[min]) {
        min = i;
      }
    }

    let temp = copy[j];
    copy[j] = copy[min];
    copy[min] = temp;
  }

  return copy;
};
 */
