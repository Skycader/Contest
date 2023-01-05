function isEven(num) {
    // Returns True if **num** is even or False if it is odd.
    return Boolean(num % 2);
}
var TEST_EQUAL = function (foo, n, expRes) {
    //Принимает первым аргументом функцию, вторым - ее аргумент, а третьим - ожидаемый результат 
    var result = foo(n) === expRes ? 'Correct! ' : 'Error! ';
    return result + 'Expected ' + foo(n) + ' to be equal ' + expRes;
};
console.log(TEST_EQUAL(isEven, 2, true));
console.log(TEST_EQUAL(isEven, 487600, true));
console.log(TEST_EQUAL(isEven, 1, false));
console.log(TEST_EQUAL(isEven, -17, false));
console.log(TEST_EQUAL(isEven, Infinity, false));
console.log(TEST_EQUAL(isEven, -0, true));
console.log(TEST_EQUAL(isEven, parseInt('18.45'), true));
console.log(TEST_EQUAL(isEven, (0.2 + 0.1) * 10, false));
console.log(TEST_EQUAL(isEven, 11e11, true));
console.log(TEST_EQUAL(isEven, 0xfe, true));
console.log(TEST_EQUAL(isEven, 2.4, false));
console.log(TEST_EQUAL(isEven, 20.00, true));
console.log(TEST_EQUAL(isEven, NaN, false));
// Функция содержит лишь один дефект: выполняет действие, противоположное описанному. 
// Исправить можно, изменив тело функции на  { return Boolean(num % 2 === 0); }.
