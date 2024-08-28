/**
 * Make all texts within h1,2,3...6 tags CAPITAL
 */

const f = (text) => {
  const r = /<(h[1-6])>(.*?)<\/\1>/g;
  return text.replace(
    r,
    (match, m1, m2) => `<${m1}>${m2.toUpperCase()}</${m1}>`,
  );
};

/** Solution 31.05.2024 00:02 */

const f = (text) => {
  const r = /<(h[1-6])>(.*?)<\/\1>/g;
  return text.replace(r, (matrch, $1, $2) => {
    return `<${$1}>${$2.toUpperCase()}</${$1}>`;
  });
};

/** A better solution using back reference
 * 17 may 2024 12:38
 * */
const f3 = (text) => {
  const r = /<h([1-6])>(.*?)<\/h\1>/g;
  return text.replace(r, (match, $1, $2) => {
    return "<h" + $1 + ">" + $2.toUpperCase() + "</h" + $1 + ">";
  });
};

const f2 = (text) => {
  const r = /(<h[1-6]>)(.*?)(<\/h[1-6]>)/gm;
  return text.replace(r, function(match, $1, $2, $3) {
    return $1 + $2.toUpperCase() + $3;
  });
};

module.exports = f;
