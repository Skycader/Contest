const f = require('./Palindrome.js')

describe('Palindrome test', () => {
	test('Test case 1', () => {
		expect(f(123321)).toBe(true)
		expect(f(1241)).toBe(false)
		expect(f(1231)).toBe(false)
		expect(f(-5)).toBe(false)
		expect(f(333)).toBe(true)
		expect(f(1234554321)).toBe(true)
	})
})
