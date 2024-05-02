/**
 * Count words that
 * end with the same letter
 * they start with
 * I.e. aqua, astra, mom, text, roar, etc.
 */

const f = (text) => {
  const r = /\b(\w)(\w*)\1\b/gm;
  return text.match(r)?.length || 0;
};

module.exports = f;
