/**
 * TASK:
 * Создайте конвейер (pipeline).
 * Передайте результат текущей функции в следующую.
 *
 * EXECUTION:
 * [Input] -> f1() -> f2() -> ... -> fn() -> [Result]
 *
 * @param {...Function} fns — Стек функций
 * @returns {Function} — Принимает initialValue
 */

const add = (x) => (y) => y + x;
const multiple = (x) => (y) => y * x;

/*
  USE EXAMPLE:
  const o = flow(
    add(2),      // Step 1: (4 + 2) = 6
    multiple(3), // Step 2: (6 * 3) = 18
  )(4);          // Input: 4
*/

module.exports = flow;
