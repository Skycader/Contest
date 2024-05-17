const f = require('./timeout-context.js');

let result = '';
console.log = function (value) {
  result += value;
};

f();

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res();
  }, 10);
});

describe('Timeout context problem', () => {
  it('It should be fixed, so it returns 0,1,2', async () => {
    await promise;
    expect(result).toBe('012');
  });
});
