/**
 * Make all texts within h1,2,3...6 tags CAPITAL
 */

const f = (text) => {
  const r = /(<h[1-6]>)(.*?)(<\/h[1-6]>)/gm;
  return text.replace(r, function (match, $1, $2, $3) {
    return $1 + $2.toUpperCase() + $3;
  });
};

module.exports = f;
