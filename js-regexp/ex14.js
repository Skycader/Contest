/* Given text, such as
 * Follow us on https://twitter.com/123
 * and https://instagram.com/user/123
 *
 * Transform the instances of urls into
 * <a href="https://twitter.com/123">instagram</a>
 */

const text = `Follow us on https://twitter.com/123 and https://instagram.com/user/123`;
const r = /(https?:\/\/)(.*?)(\.com)((\/\w+)+)/g;

const f = (text) => {
  return text.replace(r, '<a href="$1$2$3$4">$2</a>');
};

module.exports = f;
