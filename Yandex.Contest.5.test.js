const flow = require('./Yandex.Contest.5.js')
const { assert } = require('chai');

const add = x => y => y+x
const multiple = x => y => y*x

const f = flow(
	add(2), //<- 4
	multiple(3), //<- 6
)(4)

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(f, 18)
  });
});
