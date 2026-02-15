const [r1, r2, r3] = require("./ex27.js");

const f1 = (text) => r1.test(text);
const f2 = (text) => r2.test(text);
const f3 = (text) => r3.test(text);

describe("Running test cases for ex25", () => {
  it("...running test case #1", () => {
    expect(f1("has_1_exact_2_ly_3_digits")).toBe(true);
    expect(f1("1234")).toBe(false);
    expect(f1("has_1_notex2act_2_ly_3_dig_4_its")).toBe(false);
  });

  it("...running test case #2", () => {
    expect(f2("1234")).toBe(false);
    expect(f2("12")).toBe(true);
    expect(f2("has1_less_than_2_digits")).toBe(true);
    expect(f2("has1_not_4_less_than_2_di_4gits")).toBe(false);
  });

  it("...running test case #3", () => {
    expect(f3("h_1_as_mo_2_re_than_3_digits_4")).toBe(true);
    expect(f3("has_1_exact_2_ly_3_digits")).toBe(true);
    expect(f3("1452")).toBe(true);
    expect(f3("12")).toBe(false);
  });

  // Дополнительные тесты для r1 (ровно 3 цифры)
  it("...дополнительные кейсы для r1 (ровно 3 цифры)", () => {
    expect(f1("")).toBe(false); // пустая строка → 0 цифр
    expect(f1("abc")).toBe(false); // нет цифр
    expect(f1("a1b")).toBe(false); // 1 цифра
    expect(f1("a1b2c")).toBe(false); // 2 цифры
    expect(f1("123")).toBe(true); // 3 цифры подряд
    expect(f1("100")).toBe(true); // 3 цифры (включая нули)
    expect(f1("a1!b2@c3#")).toBe(true); // 3 цифры с спецсимволами
    expect(f1("1234")).toBe(false); // 4 цифры
    expect(f1("0000")).toBe(false); // 4 нуля
    expect(f1("a1b2c3d")).toBe(true); // 3 цифры + нецифры после
    expect(f1("a1b2c3d4")).toBe(false); // 4 цифры
  });

  // Дополнительные тесты для r2 (меньше 3 цифр)
  it("...дополнительные кейсы для r2 (меньше 3 цифр)", () => {
    expect(f2("")).toBe(true); // пустая строка → 0 цифр
    expect(f2("!!!")).toBe(true); // только спецсимволы
    expect(f2("0")).toBe(true); // 1 цифра (ноль)
    expect(f2("99")).toBe(true); // 2 цифры подряд
    expect(f2("a9b")).toBe(true); // 1 цифра в тексте
    expect(f2("x1y2z")).toBe(true); // 2 цифры с разделителями
    expect(f2("123")).toBe(false); // ровно 3 цифры → не подходит
    expect(f2("000")).toBe(false); // 3 нуля → не подходит
    expect(f2("a1b2c3")).toBe(false); // 3 цифры → не подходит
    expect(f2("1 2")).toBe(true); // 2 цифры с пробелом
    expect(f2("12a")).toBe(true); // 2 цифры + буква
  });

  // Дополнительные тесты для r3 (3 или более цифр)
  it("...дополнительные кейсы для r3 (3+ цифр)", () => {
    expect(f3("")).toBe(false); // пустая строка
    expect(f3("ab")).toBe(false); // нет цифр
    expect(f3("7")).toBe(false); // 1 цифра
    expect(f3("55")).toBe(false); // 2 цифры
    expect(f3("000")).toBe(true); // 3 нуля
    expect(f3("9999")).toBe(true); // 4 цифры подряд
    expect(f3("a5b6c7")).toBe(true); // 3 цифры с разделителями
    expect(f3("1a2b3c4d")).toBe(true); // 4 цифры в тексте
    expect(f3("!!!123!!!")).toBe(true); // 3 цифры в окружении спецсимволов
    expect(f3("1 2 3")).toBe(true); // 3 цифры с пробелами
    expect(f3("1".repeat(100))).toBe(true); // 100 цифр подряд
  });
});
