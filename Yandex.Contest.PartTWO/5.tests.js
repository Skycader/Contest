const t = `
// Some imports and comments
const component = require('./component');

describe('suite', function () {
    it('test1', function () {
        // Some test 1
    });
    it('test2', function () {
        // Some test 2
    });
    it.skip('test3', function () {
        // Some test 3
    });
});`

const getTests = (tests) => {
	tests = tests.slice(tests.indexOf('describe'))

	let output = []
	
	const t_beg = 
	`// Some imports and comments
	const component = require('./component');
	describe('suite', function () {`

	const t_end = `});`
	while (tests.indexOf(" it") !== -1) {
		let start = tests.indexOf(" it")
		let end = tests.indexOf(";")
		output.push(t_beg + tests.slice(start,end+1) + t_end)
		tests = tests.slice(end+1)
	}

	return output
}

module.exports = getTests

console.log(getTests(t))

