const f = require('./ex20.js');

const test1 = `
<h1>hello</h1>
<h2>world</h2>
`;

const expect1 = `
<h1>HELLO</h1>
<h2>WORLD</h2>
`;

const test2 = '<h1>hello world!</h1>';
const expect2 = '<h1>HELLO WORLD!</h1>';
describe('test 20', () => {
  it('should work fine', () => {
    expect(f(test1)).toBe(expect1);
  });

  it('should work fine #2', () => {
    expect(f(test2)).toBe(expect2);
  });
});
