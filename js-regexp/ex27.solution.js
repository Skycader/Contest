/**
 * Write regex to test if there is
 * 1) exactly 3 digits in a given string
 * 2) less than 3 digits in a given string
 * 3) 3 or more digits in a given string
 */

//Shorter sol 07.01.2026
const r1 = /^(\D*\d\D*){3}$/;
const r2 = /^(\D*\d\D*){1,2}$/;
const r3 = /^(\D*\d\D*){3,}$/;

const r1 = /^(?=(?:\D*\d){3}\D*$)/; //<-- \D* - without these will work: exactly123, however, not this e123xactly
const r2 = /^(?=(?:\D*\d){1,2}\D*$)/;
const r3 = /^(?=(?:\D*\d){3,}\D*$)/;
module.exports = [r1, r2, r3];
