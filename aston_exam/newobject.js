const b = {
	a: 10,
	b: {
		a: 10,
		b: 15,
		c: [1,2]
	}
}

const c = new Object(b);

b.b.a = 200

console.log(c)
