const f = require('./ranges.js')

test('Test for ranges', () => {
	expect(f([0,2,3,4,6,8,9])).toEqual(['0','2->4','6','8->9'])
})
