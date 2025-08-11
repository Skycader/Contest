/**
 * From
 * RHX: $431.41
 * MTG: $651.22
 * RTT: $300.00
 * return regex that makes an array of prices, so is 431.41, 651.22 and 300.00
 */
const r = /(?<=\$)[0-9.]+/g;
module.exports = r;
