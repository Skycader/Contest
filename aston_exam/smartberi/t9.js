function createCar(brand,type) {
	const obj = Object.create(
		{
			brand,
			type,
			fullDescription: `${brand} ${type}`
		},
		{
			brand: {
				value: brand,
				set(value) {
					console.log("setting brand name")
				}
		}
		}
	)

	return obj
}

const car = createCar("Lada","sedan")
console.log(car)
car.brand = "volvo"
console.log(car)
