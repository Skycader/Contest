/**
 * Trim &nbsp; (non-break space) in the given text.
 */

const r = //;
const f = (text) => {
  return text.replace(r, "&nbsp;");
};
module.exports = f;
