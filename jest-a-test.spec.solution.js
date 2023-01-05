const f = require('./testingFunction.js')

describe('Test',()=>{
	test('Test case 1',()=>{
		expect(f('array',3,5)).toEqual([3,5])
	})

	test('Test case 2', ()=> {
		expect(f('sum',3,5)).toBe(8)
	})
})
