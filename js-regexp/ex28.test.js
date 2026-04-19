const f = require("./ex28.js");

describe("Running test cases for ex25", () => {
  it("...running test case #1", () => {
    expect(f("$MySup3erHard0Pass0wor0d")).toBe(true);
  });

  it("...running test case #2", () => {
    expect(f("MySuperHardPassword")).toBe(false);
  });

  it("...running test case #3", () => {
    expect(f("$mysuperhardpassword")).toBe(false);
  });

  it("...running test case #4", () => {
    expect(f("$$$MMMoney")).toBe(false);
  });

  it("...running test case #5", () => {
    expect(f("$TooShort3000")).toBe(false);
  });

  it("...running test case #6", () => {
    expect(f("$SpaceBarsAre Forbidden")).toBe(false);
  });

  it("...running test case #7 (Only 1 digit - should be false)", () => {
    expect(f("$MySup3erHardPassworDDDD")).toBe(false);
  });

  it("...running test case #8 (Stealth Space at the start - should be false)", () => {
    // Если нет якоря ^, ракета зацепится за середину и пропустит пробел в начале
    expect(f(" $MySup3erHard0Pass0wor0d")).toBe(false);
  });

  it("...running test case #9 (Stealth Space at the end - should be false)", () => {
    // Без якоря $ ракета скажет true, найдя совпадение до пробела
    expect(f("$MySup3erHard0Pass0wor0d ")).toBe(false);
  });

  it("...running test case #10 (Internal whitespace - should be false)", () => {
    // Проверка, что ракета не игнорирует пробел внутри длинной строки
    expect(f("$MySup3erHard0Pass 0wor0d")).toBe(false);
  });
});
