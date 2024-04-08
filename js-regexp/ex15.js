/* Check if the give text is a valid HTML document
 *
 * VALID:
 * <html>
 * ...
 * </html>
 *
 * INVALID:
 * <html>...</html><html>...</html>
 * <htmx>...</htmx>
 */

const r = /^<html>[\w\W]*<\/html>$/g; //<-- should not have m flag;
const f = (text) => {
  console.log(`${text} => ${r.test(text)}`);
  return r.test(text.trim());
};

const valid1 = `
<html>
  Hello, world!
</html>
`;

module.exports = f;
