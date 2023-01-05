function N() {
	this.foo = 1
	return {
		foo: 2,
		first() {
			console.log(this.foo)
		},

		second: () => {
			console.log(this.foo)
		}
	}
}

const n = new N()

n.first(); //
n.second(); //

const first = n.first;
const second = n.second

first(); //
second(); //
