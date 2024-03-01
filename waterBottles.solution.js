/* 1 march 2024 10:38 */
const f = (full, ex, empty = 0, iterations = 0) => {
  return full > 0
    ? f(0, ex, empty + full, iterations + full)
    : empty >= ex
      ? f((empty / ex) | 0, ex, empty % ex, iterations)
      : iterations;
};

/* 11 june 2023 13:22 (took ~5 minutes with 2 mistakes)*/

const f = (fu, ex, em = 0, co = 0) => {
  if (fu > 0) {
    return f(0, ex, em + fu, co + fu);
  } else {
    if (em >= ex) {
      return f((fu + em / ex) | 0, ex, em % ex, co);
    } else {
      return co;
    }
  }
};

/* 17 feb 2023 22:47 */

const f = (fu, ex, em = 0, co = 0) =>
  fu > 0
    ? f(0, ex, em + fu, co + fu)
    : em >= ex
      ? f((em / ex) | 0, ex, em % ex, co)
      : co;

/* 14 january 2023 15:26 (9 days, 16 hours before) */

const f = (full, ex, em = 0, dr = 0) =>
  full > 0
    ? f(0, ex, em + full, dr + full)
    : em >= ex
      ? f((full + em / ex) | 0, ex, em % ex, dr)
      : dr;

/* 04 january 2023 23:00 */
const f = (full, exchange, empty = 0, drank = 0) => {
  console.log(full, exchange, empty, drank);
  return full > 0
    ? f(0, exchange, empty + full, drank + full)
    : empty >= exchange
      ? f((full + empty / exchange) | 0, exchange, empty % exchange, drank)
      : drank;
};

var f = (full, exchange, empty = 0, count = 0) =>
  empty < exchange && full == 0
    ? count
    : full > 0
      ? f(0, exchange, empty + full, count + full)
      : f(
          (empty - (empty % exchange)) / exchange,
          exchange,
          empty % exchange,
          count,
        );
const f = (full, ex, mt = 0, c = 0) =>
  mt < ex && full == 0
    ? c
    : full > 0
      ? f(0, ex, mt + full, c + full)
      : f((mt - (mt % ex)) / ex, ex, mt % ex, c);
const f = (full, ex, mt = 0, c = 0) =>
  full > 0 || ex <= mt
    ? full > 0
      ? f(0, ex, mt + full, c + full)
      : f((mt / ex) >> 0, ex, mt % ex, c)
    : c;
const f = (fu, ex, em = 0, co = 0) =>
  fu > 0 || em >= ex
    ? fu > 0
      ? f(0, ex, em + fu, co + fu)
      : f((fu + em / ex) >> 0, ex, em % ex, co)
    : co;
const f = (fu, ex, em = 0, co = 0) =>
  fu > 0 || em >= ex
    ? fu > 0
      ? f(0, ex, em + fu, co + fu)
      : f((fu + em / ex) | 0, ex, em % ex, co)
    : co;
const f = (fu, ex, em = 0, co = 0) =>
  (fu > 0) | (em >= ex)
    ? fu > 0
      ? f(0, ex, em + fu, co + fu)
      : f((fu + em / ex) | 0, ex, em % ex, co)
    : co;
const f = (fu, ex, em = 0, co = 0) =>
  fu > 0 || em >= ex
    ? fu > 0
      ? f(0, ex, em + fu, co + fu)
      : f((fu + em / ex) | 0, ex, em % ex, co)
    : co;
const f = (fu, ex, em = 0, co = 0) =>
  fu > 0 || em >= ex
    ? fu > 0
      ? f(0, ex, em + fu, co + fu)
      : f((fu + em / ex) | 0, ex, em % ex, co)
    : co;
