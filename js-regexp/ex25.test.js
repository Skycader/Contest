const r = require("./ex25.js");

const text = `
AGX: $23.50
TTX: $54.30
ARG: $90.00
`;

const f = (text) => text.match(r);

describe("Running test cases for ex25", () => {
  it("should work", () => {
    expect(f(text)).toEqual(["23.50", "54.30", "90.00"]);
  });
});
