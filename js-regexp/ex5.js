/*
 * Find people who own rat or cat and their name is just 4 letters length
 * -> Jane's cat and Mike's rat and Naomi's dog and Alex's cat and John's dog => Jane Mike Alex (3)
 */
const r = /((\w){4})'s\s[r|c]at/;
const f = (text) => {
  return text.match(r)?.length || 0;
};
module.exports = f;
