f = require("./filter.js");
const moreThan10 = (num) => num > 10;

describe("Tests", () => {
  it("test", () => {
    expect(f([1, 2, 3, 99], moreThan10)).toEqual([99]);
  });
});
