/*
 * Ex10
 * Find all lol words like lel lil lal and change them to l*l but don't change lol itself
 * Сложность: ★★★★★★☆☆☆☆ (6/10)
 */

const r = /\bl[^o]l\b/gi;
const f = (text) => {
  return text.replace(r, "l*l");
};
module.exports = f;
