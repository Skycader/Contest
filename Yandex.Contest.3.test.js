f= require('./Yandex.Contest.3.js')
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(testBrackets("[a] (b) <>"), true)
    assert.strictEqual(testBrackets("[a] (b<)>"), false)
    assert.strictEqual(testBrackets(""), true)
    assert.strictEqual(testBrackets("<[(<a>)]>"), true)
    assert.strictEqual(testBrackets("hello[ [w]orld(!)] <y[ande]x>!"), true)
    assert.strictEqual(testBrackets("[>]"), false)
    assert.strictEqual(testBrackets("hello () world ]"), false)
    assert.strictEqual(testBrackets("empty"), true)
    assert.strictEqual(testBrackets("[ xxx ( yyy )"), false)
     
  });
  
});