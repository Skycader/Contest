/**
 * Make all texts within h1,2,3... tags CAPITAL
 */

const f = (text) => {
  const r = /(<h[1-6]>)(.*)(<\/h[1-6]>)/g;
  return text.replace(r, '$1$2$3', String.prototype.toUpperCase.apply('$2'));
};

module.exports = f;
