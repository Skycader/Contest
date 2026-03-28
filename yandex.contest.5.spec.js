const flow = require("./Yandex.Contest.5.js");

describe("Функция flow", () => {
  const add = (x) => (y) => y + x;
  const mult = (x) => (y) => y * x;

  test("Базовый сценарий: последовательное выполнение", () => {
    const f = flow(
      add(2), // 4 + 2 = 6
      mult(3), // 6 * 3 = 18
    )(4);
    expect(f).toBe(18);
  });

  test("Работа с одной функцией", () => {
    const f = flow(add(10))(5);
    expect(f).toBe(15);
  });

  test("Работа без функций (должен вернуть исходный аргумент)", () => {
    const f = flow()(100);
    expect(f).toBe(100);
  });

  test("Поддержка разных типов данных (строки)", () => {
    const concat = (str) => (val) => val + str;
    const f = flow(concat(" world"), concat("!"))("Hello");
    expect(f).toBe("Hello world!");
  });

  test("Длинная цепочка вызовов", () => {
    const f = flow(
      add(1), // 1
      add(1), // 2
      add(1), // 3
      mult(2), // 6
    )(0);
    expect(f).toBe(6);
  });
});
