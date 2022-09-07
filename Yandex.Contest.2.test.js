
f=require('./Yandex.Contest.2.js')
const { assert } = require('chai');

var hubs = [
    {
      host: "hub01",
      browserName: "firefox",
      active: 3,
      total: 10,
    },
    {
      host: "hub02",
      browserName: "chrome",
      active: 2,
      total: 5,
    },
    {
      host: "hub03",
      browserName: "firefox",
      active: 0,
      total: 10,
    },
  ];

  let res = { firefox: { total: 20, active: 3 }, chrome: { total: 5, active: 2 } }

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(JSON.stringify(f(hubs)), JSON.stringify(res))
  });
});

