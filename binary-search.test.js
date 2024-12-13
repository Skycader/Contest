const f = require("./binary-search.js");
const binarySearch = require("./binary-search.solution.js");
describe("binarySearch: middle target", () => {
  test("required index 1/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 2)[0]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 2)[0],
    );
  });

  test("required log 2/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 2)[1]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 2)[1],
    );
  });

  test("required iterations 3/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 2)[2]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 2)[2],
    );
  });
});

describe("binary search: boundary value", () => {
  test("required index 1/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 20)[0]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 20)[0],
    );
  });

  test("required log 2/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 20)[1]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 20)[1],
    );
  });

  test("required iterations 3/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 20)[2]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 20)[2],
    );
  });
});

describe("binary search: non-existent value", () => {
  test("required index 1/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 9)[0]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 9)[0],
    );
  });

  test("required log 2/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 9)[1]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 9)[1],
    );
  });

  test("required iterations 3/3", () => {
    expect(f([1, 2, 3, 10, 11, 20], 9)[2]).toEqual(
      binarySearch([1, 2, 3, 10, 11, 20], 9)[2],
    );
  });
});
