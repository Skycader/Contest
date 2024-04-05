/* Given text, such as
 * Follow us on twitter https://twitter.com/123
 * and instagram https://instagram.com/user/123
 *
 * Transform the instances of urls into
 * <a href="https://twitter.com/123">instagram</a>
 */

const r = /(\w+)\s(https?:\/\/[\w\.\/.]+)/g;
const f = (text) => {
  return text.replace(r, '<a href="$2">$1</a>');
};

module.exports = f;
