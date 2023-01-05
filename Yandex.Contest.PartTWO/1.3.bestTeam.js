
/*
 * Шаблон кода
/**
* @param {number} N - целое число, количество сотрудников готовых к объединению
* @param {number[]} staff - массив длины N с грейдами доступных сотрудников
* @param {number} K - целое число, количество доступных клавиатур
* @returns {number}
module.exports = function (N, staff, K) {
    // Ваш код

    return x // x - максимальный уровень Яндексформера
}
*/

const maxGrade = (N, staff, K) => {
	let max = 25
	let count = 0
	let sum = 0
	while (count<K) {
		if (staff.indexOf(max) !== -1) {
			sum+=max;
			count++
			staff[staff.indexOf(max)] = null;
		} else {
			max--
		}
	}
	return sum
}

//OK: maxGrade(8,[5, 13, 8, 4, 4, 15, 1, 9],8) == 59
//OK: maxGrade(11,[14, 8, 15, 19, 2, 21, 13, 21, 12, 10, 8],5) == 90
//OK: maxGrade(15,[19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4],1) == 20
//OK: maxGrade(12,[22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19],7)==151
//OK: maxGrade(7,[10, 3, 21, 23, 6, 3, 8],4)==62
console.log(maxGrade(8,[5, 13, 8, 4, 4, 15, 1, 9],8) == 59)
console.log(maxGrade(11,[14, 8, 15, 19, 2, 21, 13, 21, 12, 10, 8],5) == 90)
console.log(maxGrade(15,[19, 20, 5, 10, 2, 20, 7, 9, 1, 3, 13, 14, 3, 3, 4],1) == 20)
console.log(maxGrade(12,[22, 7, 24, 24, 11, 22, 24, 3, 9, 16, 2, 19],7)==151)
console.log(maxGrade(7,[10, 3, 21, 23, 6, 3, 8],4)==62)
module.exports = maxGrade

