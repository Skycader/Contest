/** Напиши решение задачи на javaScript

// Представьте, что в полицейском участке проводится расследование. Было совершено несколько преступлений. У полицейских есть другие более приоритетные задания, поэтому они попросили вас написать программу, которая будет вычислять преступника по уже известным данным.

 

// Ваша задача состоит в том, чтобы создать функцию, которая принимает в себя 2 параметра:

// Объект в котором ключи - это подозреваемые в преступлении люди, а значения - массивы людей, которых видели подозреваемые в день убийства.

// Массив с именами людей, которых убил преступник.

 

Преступником является тот, кто видел ""всех убитых людей" (НЕ ТОЛЬКО УБИТЫХ ЛЮДЕЙ) в день убийства. Функция должна возвращать имя преступника.
*/

/**
 const suspects = {
    "Алексей": ["Иван", "Наталья", "Сергей"],
    "Сергей": ["Иван", "Света"],
    "Наталья": ["Иван", "Света", "Сергей"],
    "Игорь": ["Иван", "Наталья"]
};

const deadPeople = ["Иван", "Наталья"];

The killer is => Алексей
*/

module.exports = f;
