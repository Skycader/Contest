const f = require("./binary-search.js");
const binarySearch = require("./binary-search.solution.js");
describe("binarySearch", () => {
  test("target value", () => {
    expect(f([1, 2, 3, 10, 11, 20], 2)).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 2),
    );
  });

  test("boundary value", () => {
    expect(f([1, 2, 3, 10, 11, 20], 20)).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 20),
    );
  });

  test("non-existent value", () => {
    expect(f([1, 2, 3, 10, 11, 20], 9)).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 9),
    );
  });
});
