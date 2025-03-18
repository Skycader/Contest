const f = require("./police.js");

const testCase = {
  suspects: {
    Алексей: ["Иван", "Наталья", "Сергей"],
    Сергей: ["Иван", "Света"],
    Наталья: ["Иван", "Света", "Сергей"],
    Игорь: ["Иван", "Наталья"],
  },
  deadPeople: ["Иван", "Наталья"],
  suspects2: {
    Алексей: ["Сергей"],
    Сергей: ["Иван", "Света"],
    Наталья: ["Света", "Сергей", "Иван", "Наталья"],
    Игорь: ["Иван", "Наталья"],
  },
};

describe(":: Police Department Test", () => {
  it("should find the criminal", () => {
    expect(f(testCase.suspects, testCase.deadPeople)).toBe("Алексей");
  });
  it("should find the other criminal", () => {
    expect(f(testCase.suspects2, testCase.deadPeople)).toBe("Наталья");
  });
});
