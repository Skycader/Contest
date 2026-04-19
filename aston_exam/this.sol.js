function foo() {
  console.log(this.bar);
}

var bar = "global";

var obj1 = {
  bar: "obj1",
  foo: foo,
};

var obj2 = {
  bar: "obj2",
};

foo(); //если strict, то undefined, т.к. внутри функции есть СВОЙ контекст, и там очевидно нет bar;
//если не strict -> то global, т.к. браузер подкинет "контекст" свыше из window, где и объявлен bar
obj1.foo(); //тут всё просто - функция рождена внутри объекта и хавает его контекст
foo.call(obj2); //тут всё просто, передан контекст напрямую
new foo(); //undefined т.к. внутри инстанса класса тупо не передан bar как свойство
