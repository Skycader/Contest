/**
 * Make sure the password consist of only ASCII symbols
 */

const f = (password) => {
  const r = /[A-Za-z0-9\p{P}\p{Z}]/;
  return r.test(password);
};
module.exports = f;
