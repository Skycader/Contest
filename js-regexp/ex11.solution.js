/**
 * Given list of bills:
 * 100: $120.10
 * ...
 * 90550: $550.25
 *
 * Count as many bills are more than $100
 */

r = /\w+:\s\$\d{3,}\.\d+/g;
const f = (text) => {
  return text.match(r).length;
};

r = /\d+:\s\$[\d]{3,}\.\d+/g;
const f = (text) => {
  return text.match(r)?.length || 0;
};
module.exports = f;
