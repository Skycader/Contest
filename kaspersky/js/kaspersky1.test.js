const f = require("./1.js");

describe("Running some tests to see how good your solution is...", () => {
  it("should return 0 if called f()", () => {
    expect(f()).toBe(0);
  });

  it("should return 9 if called f(9)()", () => {
    expect(f(9)()).toBe(9);
  });

  it("should return 9 if called f(10)(9)()", () => {
    expect(f(10)(9)()).toBe(19);
  });
});
