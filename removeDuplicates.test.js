const f = require('./removeDuplicates.js')

describe('Testing remove duplicates from string',()=>{
	test('Test case 1', ()=> {
		expect(f('abbac')).toBe('c')
	})
})
