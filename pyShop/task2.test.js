isEven = require('./isEven.js')
isEven = isEven.isEven
describe('Testing isEven function', () => {
	test('Testing with integers', () => {
		expect(isEven(2)).toBe(false)
		expect(isEven(3)).toBe(true)
		expect(isEven(99)).toBe(true)
	})

	test('Testing with negative integers', () => {
		expect(isEven(-2)).toBe(false)
		expect(isEven(-3)).toBe(true)
		expect(isEven(-99)).toBe(true)
		expect(isEven(-0)).toBe(false)
	})

	test('Testing with float numbers', () => {
		expect(isEven(13.00)).toBe(true)
		expect(isEven(250.00)).toBe(false)
		expect(isEven(5.00)).toBe(true)
		expect(isEven(54.23)).toBe(true)
	})

	test('Testing with unexpected values', () => {
		expect(isEven(NaN)).toBe(false)
		expect(isEven(Infinity)).toBe(false)
	})
})
