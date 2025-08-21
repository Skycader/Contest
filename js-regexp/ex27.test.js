const [r1, r2, r3] = require("./ex27.js");

const f1 = (text) => r1.test(text);
const f2 = (text) => r2.test(text);
const f3 = (text) => r3.test(text);

describe("Running test cases for ex25", () => {
  it("...running test case #1", () => {
    expect(f1("has_1_exact_2_ly_3_digits")).toBe(true);
    expect(f1("has_1_notexact_2_ly_3_dig_4_its")).toBe(false);
  });

  it("...running test case #2", () => {
    expect(f2("has1_less_than_2_digits")).toBe(true);
    expect(f2("has1_not_4_less_than_2_di_4gits")).toBe(false);
  });

  it("...running test case #3", () => {
    expect(f3("h_1_as_mo_2_re_than_3_digits_4")).toBe(true);
    expect(f3("has_1_exact_2_ly_3_digits")).toBe(false);
  });
});
