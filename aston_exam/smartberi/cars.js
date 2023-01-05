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
  brand = ""
	type = ""
	fullDescription = ""

  constructor(brand, type) {
    this.brand = brand;
    this.type = type;
    this.fullDescription = `${this.brand} ${this.type}`;
  }
 
}

function createCar(brand, type) {
  let obj = new Car(brand, type);
  obj = new Proxy(obj, {
    
    set(target, prop, val) {
       switch (prop) {
				case 'brand':
					target.brand = val
					target.fullDescription = `${target.brand} ${target.type}`
					return true
				case 'type':
					target.type = val
					target.fullDescription = `${target.brand} ${target.type}`
					return true
				case 'fullDescription':
					if (val.split(" ").length < 2) return false
					target.fullDescription = val
					target.brand = target.fullDescription.split(" ")[0]
					target.type = target.fullDescription.split(" ")[1]
					return true
				default:
					return false
			 }
			 
    },
  });

	return obj
}

const car = createCar("lada","sedan")
console.log(car)
car.brand = 'niva'
console.log(car)
car.fullDescription = 'Gazel truck';
console.log(car)
car.fullDescription = 'Uazpickup';
console.log(car)
