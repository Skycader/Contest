const f = require("./largest3.js")

describe("Testing largest3 ... ", ()=> {

	test("Test 1", () => {
		expect(f("6777133339")).toBe("777")
	})

	test("Test 2", () => {
		expect(f("2300019")).toBe("000")
	})

	test("Test 3", () => {
		expect(f("42352338")).toBe("")
	})
})
