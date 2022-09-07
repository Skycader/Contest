const f = require('./evenDigits.js')

test('Test case for even digits', () => {
	expect(f([12,345,2,6,7896])).toBe(2)
})
