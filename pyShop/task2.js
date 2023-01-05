isEven = require('./isEven.js')

describe('Testing isEven function', () => {
	test('Testing with integers', () => {
		expect(isEven(2)).toBe(true)
	})
})
