const testBrackets = require('./Yandex.Contest.3.js')

describe("Tests", () => {
  it("test", () => {

    expect(testBrackets("[a] (b) <>")).toBe(true)
    expect(testBrackets("[a] (b<)>")).toBe(false)
    expect(testBrackets("")).toBe(true)
    expect(testBrackets("<[(<a>)]>")).toBe(true)
    expect(testBrackets("hello[ [w]orld(!)] <y[ande]x>!")).toBe(true)
    expect(testBrackets("[>]")).toBe(false)
    expect(testBrackets("hello () world ]")).toBe(false)
    expect(testBrackets("empty")).toBe(true)
    expect(testBrackets("[ xxx ( yyy )")).toBe(false)
     
  });
  
});
