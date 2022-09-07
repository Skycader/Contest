const f = require('./waterBottles.js')

test('test case',()=>{
	expect(f(9,3)).toBe(13)
	expect(f(15,4)).toBe(19)
})
