/* Given text, such as
 * Follow us on https://twitter.com/123
 * and https://instagram.com/user/123
 *
 * Transform the instances of urls into
 * <a href="https://twitter.com/123">instagram</a>
 */

/* 05 august 2024 01:35
 * Comment: youtube is being slowed... damn fuck */
const f = (text) => {
  const r = /(https:?\/\/)(.*?)(\.com)((\/\w+)+)/g;
  return text.replace(r, '<a href="$1$2$3$4">$2</a>');
};

/** 22.05.2024 07:23 */
const r = /(\w+)*\s(https:.*\.com[\/\w]+)/gi;
const f = (text) => {
  return text.replace(r, '<a href="$2">$1</a>');
};

const r = /(\w+)\s(https?:\/\/[\w\.\/.]+)/g;
const f = (text) => {
  return text.replace(r, '<a href="$2">$1</a>');
};

const r = /(\w+)\s(https?:\/\/\w+\.com[\/\w]+)/g;
const f = (text) => {
  return text.replace(r, '<a href="$2">$1</a>');
};

module.exports = f;
