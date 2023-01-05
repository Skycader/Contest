//27
//Algorithms and Data Structures
//BBBBBBBBBBBYBYYYYBBBBBBBBBB

const f  = (length,sentence,colors) => {
	let count = -1
	let res = ""
	for (let letter of sentence) {
		count++
		if (colors[count] == undefined) break

		if (letter == " ") {
			res+=" "
		} else {
			res+=colors[count]
		}
	}
	let balance = 0
	res = res.split(" ")
	let badWords = []
	let countWords = -1
	for (let word of res) {
		countWords++
		balance=0
		for (let letter of word) {
			switch(letter) {
				case 'B':
					balance--
					break
				case 'Y':
					balance++
					break
			}
			if (Math.abs(balance) > 1) {
				badWords[countWords]=1
			}

		}
	
	}

	return badWords.filter(item=>!!item).length
}

console.log (
f(27,"Algorithms and Data Structures","BBBBBBBBBBBYBYYYYBBBBBBBBBB")
)

var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let lines = 0
let argu = []
rl.on('line', function (data) {
    lines++
    if ((lines==1)||(lines==2)) {
        argu.push(data)
    }
    
    if (lines==3) {
        
        console.log(f(0,...argu))
        process.exit(0)
    }
});


