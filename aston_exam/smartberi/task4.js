const greet = (person) => {
	if (person == { name: 'bob'}) {
		return 'hey bob'
	} else {
		return 'hey alice'
	}
}

console.log(greet({ name: 'bob'}))
