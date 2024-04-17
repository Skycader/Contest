/**
 * Count SPECIAL* ip addresses in the given text.
 * *SPECIAL IP ADDRESS LOOKS LIKE: 192.168.92.102...55.34.204
 * IN SUMMARY, IT CAN BE ANY LENGTH FROM 4 UNITS TO INFINITY.
 * TASK: FIND THEM ALL.
 *  */

const r = /^(\d{1,3}\.){3,}\d{1,3}$/gm;
const f = (text) => {
  return text.match(r)?.length || 0;
};

module.exports = f;
