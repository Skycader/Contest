const f = require('./negativesInMatrix.js')

test('Test', ()=>{
	expect(f([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])).toBe(8)
	expect(f([[3,2],[1,0]])).toBe(0)
	expect(f([[-1,-5,6],[-1,52,-3]])).toBe(4)
})
