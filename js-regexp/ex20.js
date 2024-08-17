/**
 * Make all texts within h1,2,3...6 tags CAPITAL
 */

const f = (text) => {
  const r = /<(h[1-6])>(.*?)<\/\1>/g;
  return text.replace(r, (match, m1, m2) => {
    return `<${m1}>${m2.toUpperCase()}</${m1}>`;
  });
};

module.exports = f;
