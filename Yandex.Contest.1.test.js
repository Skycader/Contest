f=require('./Yandex.Contest.1.js')
const { assert } = require('chai');

let arr = [
	{name: 'width', value: 20},
	{name: 'height', value: 10},
	{name: 'price', value: 115}
]

let obj = {
    width: 20,
    height: 10,
    price: 115
}

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(JSON.stringify(f(arr)), JSON.stringify(obj))
  });
});
