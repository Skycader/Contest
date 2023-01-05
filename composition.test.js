const compose = require('./composition.js')

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
//const addOneMultTwo = (c) => multTwo(addOne(c))
//addOneMultTwo(5) // returns 12




test('Test case for composition', () => {
	const addOneMultTwo = compose(multTwo, addOne)
	expect(addOneMultTwo(5)).toBe(12)
})
