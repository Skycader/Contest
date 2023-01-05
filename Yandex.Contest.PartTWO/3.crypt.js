//ab -> [b->bar]
//a[bar]-> [ab -> foo]
//foo
//
/*
 * Специальных преобразовний регистра делать не нужно, заглавные и строчные буквы - это разные буквы:
decode('Aa', [{ from: 'a', to: 'b' }]) === 'Ab'
Части исходного сообщения, не требующие замены, остаются, как есть:
decode('ab', [{ from: 'a', to: 'b' }]) === 'bb'
Уже заменённые символы нельзя заменять повторно.:
decode('ab', [{ from: 'a', to: 'ba' }, { from: 'b', to: 'r' }]) === 'bar'
Зашифрованное сообщение расшифровывается слева направо. Замена, встретившаяся в слове раньше, имеет приоритет.:
decode('ab', [{ from: 'b', to: 'bar' }, { from: 'ab', to: 'foo' }]) === 'foo'
При совпадении позиции нескольких замен в слове та замена, о которой договорились позже, имеет приоритет.:
decode('ab', [{ from: 'a', to: 'bar' }, { from: 'ab', to: 'foo' }]) === 'foo'

*/

const getCleanStr = (str) => { //cleans str of [] already replaced
	let start = str.indexOf("[")
	let end = str.indexOf("]")
	return str.slice(0,start)+str.slice(end+1,str.length)
}

const cleanStr = (str) => {
	let res = str
	while (res.indexOf("[") !== -1) {
		res = getCleanStr(res)
	}
	
	return res
}
const bestFit = (str,configs) => { //finds the right config to replace
	let index = str.length
	console.log("LENGTH: ", str.length)
	let count = 0
	let i = 0
	for (let config of configs) {
		i++
		if ((str.indexOf(config.from)<index)&&(index>=0)) {
			console.log((str.indexOf(config.from)+'<'+index))
			console.log("STR", str, "FROM", config.from, str.indexOf(config.from)) 
			console.log("BFT: ", str.indexOf(config.from))
			index = str.indexOf(config.from)
			count=i
		}
	}
	console.log('CHOOSING: ', configs[count-1])
	return configs[count-1]
}

const done = (str) => {
	let start = str.indexOf("[")
	let end = str.indexOf("]")
	return str.slice(start,end+1)
}

const decode = (str,configs) => {
	let work = 1
	while(work) {
	//	console.log(str)
	//	console.log("BF", bestFit(str,configs))
		str = str.replace(bestFit(str,configs).from, bestFit(str,configs).to)
		if (str == str.replace(bestFit(str,configs).from, bestFit(str,configs).to)) work=0
	//	console.log("AFTER",str)
	}
	return str
}

//console.log(decode('Aa', [{ from: 'a', to: 'b' }]))
console.log(decode('ab', [{ from: 'a', to: 'bar' }, { from: 'ab', to: 'foo' }]))
