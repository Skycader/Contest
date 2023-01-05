/*
 * Напишите функцию createCar, которая принимает на вход 2 строковых аргумента: марку и тип кузова автомобиля. Функция должна вернуть объект из трех свойств:

brand - марка автомобиля,
type - тип кузова автомобиля,
fullDescription - полное описание в формате марка + пробел + тип кузова.
Эти поля должны быть доступны для чтения и записи:

Если редактируются brand или type, то fullDescription также должно быть обновлено.
Если редактируется fullDescription, то brand и type также должны быть обновлены.
Если полное описание указано в недопустимом формате, то все поля объекта должны сохраниться.
const car = createCar('Lada', 'sedan');
car.brand = 'Niva';
console.log(car); -> { brand: 'Niva', type: 'sedan', fullDescription: 'Niva sedan' }

car.fullDescription = 'Gazel truck';
console.log(bage); -> { brand: 'Gazel', type: 'truck', fullDescription: 'Gazel truck' }

car.fullDescription = 'Uazpickup';
console.log(bage); -> { brand: 'Gazel', type: 'truck', fullDescription: 'Gazel truck' }
*/

class Car {
	_brand = ""
	t = ""
	fd = ""

	constructor(brand,type) {
		this._brand = brand
		this.t = type
		this.fd = `${this.b} ${this.t}`
	}

	set brand(value) {
		this._brand = value
		this.fd = `${this.b} ${this.t}` 		
	}
	set type(value) {
		this.t = value
		}
	set fullDescription(value) {
		this.fd = value
		this._brand = this.fd.split(" ")[0]
		this.t = this.fd.split(" ")[1]
	}
}

function createCar(brand,type) {
	return new Car(brand,type)
}
