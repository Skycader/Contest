f = require("./ex14.js");

const text = `
Follow us on instagram https://instagram.com/user/axl, and also
you may like to follow us on twitter https://twitter.com/user/axl!
`;

const transformed_text = `
Follow us on <a href="https://instagram.com/user/axl">instagram</a>, and also
you may like to follow us on <a href="https://twitter.com/user/axl">twitter</a>!
`;
describe("Regexp 13", () => {
  it("Test case for ex13", () => {
    expect(f(text)).toBe(transformed_text);
  });
});
