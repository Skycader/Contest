f = require("./ex13.js");

const text = `
1: $1.00
2: $2.00
3: $3.00
8: $44.00
9: $55.77
10: $25.15
15: $36.19
200: $550.16
500: $680.92
1001: $1000.00
1500: $2000.20
10001: $990.20
`;
describe("Regexp 13", () => {
  it("Test case for ex13", () => {
    expect(f(text)).toBe(5);
  });
});
