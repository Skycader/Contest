/**
 *
 * Replace all texts within <b></b> tags
 * to BTAG
 */

const f = (text) => {
  const r = /<b>.*?<\/b>/gm;
  return text.replace(r, 'BTAG');
};

module.exports = f;
