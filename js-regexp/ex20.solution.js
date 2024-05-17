/**
 * Make all texts within h1,2,3...6 tags CAPITAL
 */

/** A better solution using back reference
 * 17 may 2024 12:38
 * */
const f = (text) => {
  const r = /<h([1-6])>(.*?)<\/h\1>/g;
  return text.replace(r, (match, $1, $2) => {
    return '<h' + $1 + '>' + $2.toUpperCase() + '</h' + $1 + '>';
  });
};

const f2 = (text) => {
  const r = /(<h[1-6]>)(.*?)(<\/h[1-6]>)/gm;
  return text.replace(r, function (match, $1, $2, $3) {
    return $1 + $2.toUpperCase() + $3;
  });
};

module.exports = f;
