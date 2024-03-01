/*
 * Remove all Mr. and Mrs. from text.
 */

const r = /(Mr.)|(Mrs.)/gi;
const f = (text) => {
  return text.replace(r, "");
};
module.exports = f;
